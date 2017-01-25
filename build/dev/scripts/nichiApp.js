var app = angular.module('Nichi', ['ngResource', 'ngSanitize', 'plangular']);


//plangular configuration
app.config(function(plangularConfigProvider) {

  plangularConfigProvider.clientId = 'fd5c20bcd247de1b14c0b7f02523e91d'

});

//twitter Controller
app.controller('twitterCtrl', ['$scope', '$resource', '$timeout', function($scope, $resource, $timeout) {}]);





//soundcloud controller
app.controller('soundCtrl', ['$scope', '$window', '$http', '$resource', '$timeout', function($scope, $window, $http, $resource, $timeout) {

  var obj = document.getElementById('audio');


  obj.addEventListener("durationchange", function() {

    var mins = Math.floor(obj.duration / 60);
    var secs = Math.round((obj.duration % 60));

    console.log(mins + ' and ' + secs)
  });



  $scope.connectURL;
  (function() {

    var params = {
      action: 'connect'
    }

    var authLink;
    $scope.sound = $resource('/sounds/:action', params);

    $scope.sound.query({ }, function(res) {
      var url = res[0];

      $http.get(url)
        .success(function(data) {
          $scope.connectURL = data;
          console.log(data) ;
        })
        .error(function(err) {
          console.log(err) ;
        });

    });


  })();

}]);