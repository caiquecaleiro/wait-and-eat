(function() {
    'use strict';

    angular
        .module('app.auth')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['$location', 'authService'];

    function AuthController($location, authService) {
        var vm = this;

        vm.user = {
            email: '',
            password: ''
        };
        vm.error = null;
        vm.register = register;
        vm.login = login;

        /**
         * Creates a new user to access the website.
         * With the success return, it will execute the login action and send a
         * welcome email for the user.
         * @param {object} user - The user to perform the sign in.
         */
        function register(user) {
            return authService.register(user)
                .then(function() {
                    return vm.login(user);
                })
                .then(function() {
                    return authService.sendWelcomeEmail(user.email);
                })
                .catch(function(error) {
                    vm.error = error;
                });
        }

        /**
         * Performs the login action to access the website.
         * The successful action of login redirects the user to the Wait List page.
         * @param {object} user - The user to perform the login.
         */
        function login(user) {
            return authService.login(user)
                .then(function(loggedInUser) {
                    $location.path('/waitlist');
                })
                .catch(function(error) {
                    vm.error = error;
                });
        }
    }
})();
