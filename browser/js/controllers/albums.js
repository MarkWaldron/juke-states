app.controller('AlbumsCtrl', function ($scope, AlbumFactory, $stateParams) {
	AlbumFactory.fetchAll()
	.then(function (albums) {
		$scope.albums = albums;
	});
});
