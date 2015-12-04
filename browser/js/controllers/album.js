app.controller('AlbumCtrl', function ($scope, PlayerFactory, AlbumFactory, $stateParams) {

	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};
	$scope.start = function (song) {
		PlayerFactory.start(song, $scope.album.songs);
	};
	$scope.albumId = $stateParams.albumId;
	AlbumFactory.fetchById($scope.albumId)
	.then(function (album) {
			$scope.album = album;
	});
});
