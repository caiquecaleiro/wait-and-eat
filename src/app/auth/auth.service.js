(function() {
    'use strict';

    angular
        .module('app.auth')
        .factory('authService', authService);

    authService.$inject = ['$firebaseAuth', 'firebaseDataService'];

    function authService($firebaseAuth, firebaseDataService) {
        var firebaseAuthObject = $firebaseAuth(firebaseDataService.root);

        var service = {
            register: register,
            login: login,
            logout: logout
        };

        return service;

        /**
         * Creates a new user to access the website. The new user is saved to
         * Firebase.
         * @param {object} user - The user to perform the sign in.
         */
        function register(user) {
            return firebaseAuthObject.$createUser(user);
        }

        /**
         * Performs the login action to access the website.
         * @param {object} user - The user to perform the login.
         */
        function login(user) {
            return firebaseAuthObject.$authWithPassword(user);
        }

        /**
         * Performs the logout action.
         */
        function logout() {
            return firebaseAuthObject.$unauth();
        }
    }
})();
