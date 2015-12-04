const express = require('express')
const mime = require('mime')
const router = express.Router()
const mongoose = require('mongoose')
module.exports = router

router.get('/', function(req, res, next) {
  mongoose.model('Album')
    .find(req.query)
    .then(function(albums) {
      res.json(albums)
    })
    .then(null, next)
})

router.param('albumId', function(req, res, next, id) {
  mongoose.model('Album')
    .findById(id)
    .populate('artists songs')
    .then(function(album) {
      if(!album) throw new Error('not found!')
      req.album = album
      next()
    })
    .then(null, next)
})

router.get('/:albumId.image', function(req, res, next) {
  mongoose.model('Album')
    .findById(req.params.albumId)
    .select('+cover +coverType')
    .then(function(album) {
      if(!album.cover || !album.coverType) return next(new Error('no cover'))
      res.set('Content-Type', mime.lookup(album.coverType))
      res.send(album.cover)
    })
    .then(null, next)
})

router.get('/:albumId', function(req, res) {
  res.json(req.album)
})