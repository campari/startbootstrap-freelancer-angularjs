'use strict';

/**
 * @ngdoc function
 * @name freelancerApp.controller:ContactFormCtrl
 * @description
 * # ContactFormCtrl
 * Controller of the freelancerApp
 */
angular.module('freelancerApp')
  .controller('ContactFormCtrl', function ($scope) {

    $scope.form = {};
    $scope.fields = [
      { name: 'name',
        label: 'Name',
        inputType: 'input',
        type: 'text',
        placeholder: 'Name'
      }, {
        name: 'email',
        label: 'Email Address',
        inputType: 'input',
        type: 'email',
        placeholder: 'Email Address'
      }, {
        name: 'phone',
        label: 'Phone Number',
        inputType: 'input',
        type: 'tel',
        placeholder: 'Phone Number'
      }, {
        name: 'message',
        label: 'Message',
        inputType: 'textarea',
        rows: 5,
        placeholder: 'Message'
      }
    ];

  });
