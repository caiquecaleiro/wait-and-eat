(function() {
    'use strict';

    angular
        .module('app.auth')
        .factory('authService', authService);

    authService.$inject = ['$firebaseAuth', 'firebaseDataService', 'partyService'];

    function authService($firebaseAuth, firebaseDataService, partyService) {
        var firebaseAuthObject = $firebaseAuth();

        var service = {
            firebaseAuthObject: firebaseAuthObject,
            register: register,
            login: login,
            logout: logout,
            isLoggedIn: isLoggedIn,
            sendWelcomeEmail: sendWelcomeEmail
        };

        return service;

        /**
         * Creates a new user to access the website. The new user is saved to
         * Firebase.
         * @param {object} user - The user to perform the sign in.
         */
        function register(user) {
            return firebaseAuthObject.$createUserWithEmailAndPassword(user.email, user.password);
        }

        /**
         * Performs the login action to access the website.
         * @param {object} user - The user to perform the login.
         */
        function login(user) {
            return firebaseAuthObject.$signInWithEmailAndPassword(user.email, user.password);
        }

        /**
         * Performs the logout action.
         */
        function logout() {
            partyService.reset();
            return firebaseAuthObject.$signOut();
        }

        /**
         * Returns whether the user is logged in or not.
         */
        function isLoggedIn() {
            return firebaseAuthObject.$getAuth();
        }

        /**
        * Sends a welcome email for the new user.
        */
        function sendWelcomeEmail(emailAddress) {
            firebaseDataService.emails.push({
                emailAddress: emailAddress
            });
        }
    }
})();
