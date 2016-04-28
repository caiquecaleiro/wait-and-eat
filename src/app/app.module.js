// Immediately Invoked Function Expression (IIFE)
(function() {
    'use strict';

    angular
        .module('app', [
            // Angular modules
            'ngRoute',
            // Third-party modules
            'firebase',
            // Custom modules
            'app.landing',
            'app.waitList',
            'app.auth',
            'app.core',
            'app.layout'
        ])
        .config(configFunction)
        .run(runFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/'
            });
    }

    runFunction.$inject = ['$location', '$rootScope'];

    /**
     * Listen for routeChangeError and whenever the user is not authenticated,
     * he/she is redirected to the home page.
     */
    function runFunction($location, $rootScope) {
        $rootScope.$on('$routeChangeError',
            function(event, next, previous, error) {
                if (error == 'AUTH_REQUIRED') {
                  $location.path('/');
                }
            });
    }
})();
