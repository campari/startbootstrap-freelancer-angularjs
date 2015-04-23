'use strict';

/**
 * @ngdoc directive
 * @name freelancerApp.directive:navbarShrink
 * @description
 * # navbarShrink
 * Directive of the freelancerApp
 */
angular.module( 'freelancerApp' )

  // navbar-shrink
  .directive( 'navbarShrink', function( $window, $timeout ) {
    return function( scope, element, attrs ) {
      angular.element( $window ).bind( "scroll", function() {
        $timeout( shrink, 250 );
      });

      function shrink() {
        if( $window.pageYOffset >= 300 ) {
          element.addClass( 'navbar-shrink' );
        } else {
          element.removeClass( 'navbar-shrink' );
        }
      }
    };
  });