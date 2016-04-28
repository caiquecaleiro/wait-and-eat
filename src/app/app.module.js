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
        .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider
            .otherwise({
                redirectTo: '/'
            });
    }
})();
