(function() {
  'use strict';

  angular.
    module('nujamApp', [
      'ngAria',
      'ngAnimate',
      'ui.router'
    ]);


}());

(function() {
  'use strict';

  angular.
    module('nujamApp').
    config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider.
        state('home', {
          url: '/',
          templateUrl: 'app/pages/home.html'
        }).
        state('about', {
          url: '/about',
          templateUrl: 'app/pages/about.html'
        }).
        state('faq', {
          url: '/faq',
          templateUrl: 'app/pages/faq.html'
        });
    });
  }());

(function() {
  'use strict';

  angular.
    module('nujamApp').
    controller('nujamAppController', function(){
    });

}());
