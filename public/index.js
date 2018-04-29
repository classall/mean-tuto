angular.module('angularApp', [])
  .controller('indexCtrl', function($scope, indexService) {

    var ctrl = this;

    ctrl.users = [];

    $scope.name1 = '';

    ctrl.name2 = '';

    $scope.greeting1 = `Hello ${$scope.name1}`;

    ctrl.greeting2 = `Hi ${ctrl.name2}`;

    indexService.getUsers(function(users) {
      if (users !== null) {
        ctrl.users = users;
      }
    });

  })
  .service('indexService', function($http) {

    var service = this;

    service.getUsers = function(callback) {
      $http.get('/api/users').then(function(res) {
        callback(res.data);
      }, function(err) {
        console.error(err);
        callback(null);
      });
    };

    return service;

  });
