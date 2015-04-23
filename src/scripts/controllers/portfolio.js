'use strict';

/**
 * @ngdoc function
 * @name freelancerApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the freelancerApp
 */
angular.module('freelancerApp')
  .controller('PortfolioCtrl', function ($scope) {

    $scope.works = [
      { id: 1, img: 'images/portfolio/cabin.png' },
      { id: 2, img: 'images/portfolio/cake.png' },
      { id: 3, img: 'images/portfolio/circus.png' },
      { id: 4, img: 'images/portfolio/game.png' },
      { id: 5, img: 'images/portfolio/safe.png' },
      { id: 6, img: 'images/portfolio/submarine.png' }
    ];

  });
