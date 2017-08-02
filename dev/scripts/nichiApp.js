var app = angular.module('communion', []);




app.factory('soundcloud', ['$http', function($http) {

    return $http.get('http://api.soundcloud.com/users/829120/tracks?client_id=6GTzygpXw9qubWUmlmh70ZUHLidrgGJw')  
       .then(
           //Succesful request function
           function(response){
               return response.data
           },
           //Handle Error func
           function(err) {
              return console.log(err.data)
           }
       )
      
}])


app.controller('soundCtrl',['$scope', 'soundcloud', '$http', function($scope, soundcloud, $http) {
    
    $scope.changeTrack = function(url, image){
        var music = document.getElementById('music')
        var playerImage = document.getElementById('imgs')
        $http.get(`${url}?client_id=6GTzygpXw9qubWUmlmh70ZUHLidrgGJw`)
            .then(function(response){
                    $scope.swapTo = response.location
                    return console.log(response.location)
                },
                function(err){
                    return console.log(err.data)
                })
            music.setAttribute('src', `${url}?client_id=6GTzygpXw9qubWUmlmh70ZUHLidrgGJw`)
            playerImage.setAttribute('style', `background-image: url('${image}')`)
         }      
        soundcloud.then(function(data) {
                $scope.communion = {}
                $scope.communion.tracks = data
                return $scope.communion.tracks
            }
    )


}])


app.factory('hypelatest', ['$http', function($http){



   return $http.get('http://hypem.com/playlist/latest/all/json/1/data.js')
        .then(
            //Handle Succesful request
            function(response){
                return response.data
            },

            // handle request error
            function(err){
                return console.log(err.data)
            }

        )
}])


app.factory('hypecommunionfavs', ['$http', function($http){




    return $http.get('http://hypem.com/playlist/loved/Redee/json/1/data.js')
        .then(
            //Handle Succesful request
            function(response){
                return response.data
            },

            // handle request error
            function(err){
                return console.log(err.data)
            }

        )


}])



app.factory('hypepop', ['$http', function($http){


   return $http.get("http://hypem.com/playlist/popular/all/json/1/data.js")
        .then(
            //Handle Succesful request
            function(response){
                return response.data
            },

            // handle request error
            function(err){
                return console.log(err.data)
            }

        )


}])




app.controller('hypeCtrl', ['$scope','hypepop', 'hypelatest', 'hypecommunionfavs', function($scope, hypepop, hypelatest, hypecommunionfavs){

    hypelatest.then(function(data){
        $scope.hypelatest = data;
        delete $scope.hypelatest.version
        return $scope.hypelatest
    })

    hypecommunionfavs.then(function(data){
        $scope.hypecommunionfavs = data;
        delete $scope.hypecommunionfavs.version

        return $scope.hypecommunionfavs
    })

    hypepop.then(function(data){
        $scope.hypepop = data;
        delete $scope.hypepop.version
        return $scope.hypepop
    })

}])










// app.directive('appInfo', function() {
//   return {
//     restrict: 'E',
//     scope: {
//       info: '='
//     },
//     templateUrl: 'js/directives/appInfo.html'
//   };
// });
//









/* app.controller('soundCtrl',[function(){

    // initiate auth popup
    SC.connect().then(function() {
      return SC.get('/me');
    }).then(function(me) {
      alert('Hello, ' + me.username);
    });

}]) */


//soundcloud controller
/* app.controller('soundCtrl', ['$scope', '$window', '$http', '$resource', '$timeout', function($scope, $window, $http, $resource, $timeout) {

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

}]); */
