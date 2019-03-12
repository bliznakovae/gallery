app.controller('ImagesCtrl', ['$scope', '$q', '$compile', '$window', '$http',
	function ($scope, $q, $compile, $window, $http) {
		$scope.getData = function (searchField) {
			$scope.loading = true;
			$http.jsonp("https://www.flickr.com/services/feeds/photos_public.gne?tags=" + searchField + "&format=json&jsoncallback=JSON_CALLBACK").success(function (data) {
				$scope.link = data.link;
				$scope.images = data.items;
				$scope.loading = false;
				$scope.default = false;
				for (var i = 0; i < $scope.images.length; i++)
				{
					"(.*?)"
					$scope.images[i].authorName = $scope.images[i].author.match(/\("(.*)"\)/)[1];
				}
			}).error(function (data) {
				$scope.images = "Request failed";
				$scope.loading = false;
			});
		}

		$http.jsonp("https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=JSON_CALLBACK").success(function (data) {
			$scope.link = data.link;
			$scope.default = true;
			$scope.images = data.items;
			$scope.loading = false;
			for (var i = 0; i < $scope.images.length; i++)
			{
				"(.*?)"
				$scope.images[i].authorName = $scope.images[i].author.match(/\("(.*)"\)/)[1];
			}
		}).error(function (data) {
			$scope.images = "Request failed";
			$scope.loading = false;
		});
	}
]);
