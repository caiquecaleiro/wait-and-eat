(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('mainNavbar', mainNavbar);

    function mainNavbar() {
        return {
            templateUrl: 'app/layout/navbar.html',
            restrict: 'E', // Element directive
            scope: {}, // Isolated scope
            controller: NavbarController,
            controllerAs: 'vm'
        };
    }

    NavbarController.$inject = ['$location', 'authService']

    function NavbarController($location, authService) {
        var vm = this;
        vm.isLoggedIn = authService.isLoggedIn;
        vm.logout = logout;

        /**
         * Performs the logout action and redirects the user to the home page.
         */
        function logout() {
            authService.logout();
            $location.path('/');
        }
    }
})();
