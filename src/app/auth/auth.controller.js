(function() {
    'use strict';

    angular
        .module('app.auth')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['$location', '$firebaseAuth'];

    function AuthController($location, $firebaseAuth) {
        var vm = this;
        var firebaseReference = new Firebase('https://blistering-torch-6934.firebaseio.com/parties');
        var firebaseAuthObject = $firebaseAuth(firebaseReference);

        vm.user = {
            email: '',
            password: ''
        };

        vm.register = register;
        vm.login = login;
        vm.logout = logout;

        /**
         * Creates a new user to access the website. The new user is saved to
         * Firebase.
         * @param {object} user - The user to perform the sign in.
         */
        function register(user) {
            return firebaseAuthObject.$createUser(user)
                .then(function() {
                    vm.login(user);
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        /**
         * Performs the login in action to access the website.
         * The successful action of login redirects the user to the Wait List page.
         * @param {object} user - The user to perform the login.
         */
        function login(user) {
            return firebaseAuthObject.$authWithPassword(user)
                .then(function(loggedInUser) {
                    $location.path('/waitlist');
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        /**
         * Performs the logout action and redirects the user to the home page.
         */
        function logout() {
            firebaseAuthObject.$unauth();
            $location.path('/');
        }
    }
})();
