app.controller('ArtistCtrl', function ($scope, PlayerFactory, ArtistFactory, $stateParams) {

			$scope.artistId = $stateParams.artistId;
			ArtistFactory.fetchById($scope.artistId)
			.then(function (artist) {
				$scope.artist = artist;
			});


	$scope.viewAlbum = function (albumId) {
		$rootScope.$broadcast('changeView', {
			name: 'oneAlbum',
			id: albumId
		});
	};

	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};
	$scope.start = function (song) {
		PlayerFactory.start(song, $scope.artist.songs);
	};

});
