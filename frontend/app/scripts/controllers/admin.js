'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
    .controller('AdminCtrl', function ($scope, $timeout, Restangular, $mdToast, $rootScope) {

        var init = function () {

        };


        if (!sessionStorage.authenticated || sessionStorage.role != 'admin') {
            $location.path('/');
        }
        else {
            $rootScope.authenticated = true;
        }
        init();


    });
