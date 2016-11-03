var app = angular.module('Nichi', ['ngResource', 'ngSanitize']);




app.controller('twitterCtrl', ['$scope', '$resource', '$timeout', function ($scope, $resource, $timeout) {

}]);






app.controller('soundCtrl', ['$scope', '$window', '$http', '$resource', '$timeout', function ($scope, $window, $http, $resource, $timeout) {
    $scope.connectURL;
    (function () {

        var params = {
            action: 'connect'
        }

        var authLink;
        $scope.sound = $resource('/sounds/:action', params);

        $scope.sound.query({ }, function (res) {
            var url = res[0];

            $http.get(url)
            .success(function(data){
                $scope.connectURL = data;
                console.log( data ) ; 
            })
            .error(function(err){
                console.log( err ) ; 
            });
        
        });


    })();

}]);