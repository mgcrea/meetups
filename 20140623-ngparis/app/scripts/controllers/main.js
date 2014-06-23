'use strict';

angular.module('mgcrea.Angularjs20140623')

  .controller('MainCtrl', function($scope, $location, version) {

    $scope.$path = $location.path.bind($location);
    $scope.version = version;

  });
