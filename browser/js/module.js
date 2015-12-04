var app = angular.module('juke', ['ui.router']);

app.config(function ($stateProvider){
  $stateProvider.state('albumList', {
    url: '/albums/',
    controller: 'AlbumsCtrl',
    templateUrl: '/templates/albums.html'
  });
});

app.config(function ($stateProvider){
  $stateProvider.state('album', {
    url: '/album/:albumId',
    controller: 'AlbumCtrl',
    templateUrl: '/templates/album.html'
  });
});

app.config(function ($stateProvider){
  $stateProvider.state('artistList', {
    url: '/artists',
    controller: 'ArtistsCtrl',
    templateUrl: '/templates/artists.html'
  });
});

app.config(function ($stateProvider){
  $stateProvider.state('artist', {
    url: '/artist/:artistId',
    controller: 'ArtistCtrl',
    templateUrl: '/templates/artist.html'
  }).state('artist.albums', {
    url: '/albums',
    templateUrl: '/templates/artistAlbums.html'
  }).state('artist.songs', {
    url: '/songs',
    templateUrl: '/templates/artistSongs.html'
  });

});
