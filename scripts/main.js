app.controller('MainCtrl', ['$scope', '$q', '$compile', '$window', '$http',
    function($scope, $q, $compile, $window, $http) {
        $scope.myFunction = function() {
            console.log('tuk e')
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            }
            else {
                x.className = "topnav";
            }
        }
    }
]);
