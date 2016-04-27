(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('mainNavbar', mainNavbar);

    function mainNavbar() {
        return {
            templateUrl: 'app/layout/navbar.html',
            restrict: 'E' // element directive
        };
    }
})();
