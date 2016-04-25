(function() {
    'use strict';

    angular
        .module('app.auth')
        .controller('AuthController', AuthController);

    AuthController.$inject = ['$firebaseAuth'];

    function AuthController($firebaseAuth) {
        var vm = this;
        var firebaseReference = new Firebase('https://blistering-torch-6934.firebaseio.com/parties');
        var firebaseAuthObject = $firebaseAuth(firebaseReference);

        vm.user = {
            email: '',
            password: ''
        };

        vm.register = register;
        vm.login = login;

        /**
         * Creates a new user to access the website. The new user is saved to
         * Firebase.
         */
        function register(user) {
            return firebaseAuthObject.$createUser(user)
                .then(function(user) {
                    console.log(user);
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        /**
         * Performs the login in action to access the website.
         */
        function login(user) {
            return firebaseAuthObject.$authWithPassword(user)
                .then(function(loggedInUser) {
                    console.log(loggedInUser);
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }
})();
