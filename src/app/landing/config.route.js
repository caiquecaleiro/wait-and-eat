(function() {
    'use strict';

    angular
        .module('app.landing')
        .config(configFunction); // Going to execute the config on the module app.landing

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/landing/landing.html'
            });
    }
})();
