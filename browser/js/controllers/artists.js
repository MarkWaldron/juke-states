app.controller('ArtistsCtrl', function ($scope, ArtistFactory) {
	ArtistFactory.fetchAll()
	.then(function (artists) {
		$scope.artists = artists;
		console.log($scope.artists);
	});
});
