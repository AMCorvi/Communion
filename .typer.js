app.factory('authSound', ['$http', function($http){
    return $http('https://soundcloud.com/connect?client_id=fd5c20bcd247de1b14c0b7f02523e91d&client_secret=fa6fcbd0a53ea1b2661faca2eed1e2cb&redirect_uri=localhost%3A3005&response_type=code&scope=non-expiring').success(function(data){
        return data; })
    .error(function(err){
        return err;
    })
}]);