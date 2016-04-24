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

        /**
         * Creates a new user to access the website. The new user is saved to
         * Firebase.
         */
        function register(user) {
            return firebaseAuthObject.$createUser(user)
                .then(function() {
                    console.log(user);
                })
                .catch(function(error) {
                    console.log(error);
                });
        }
    }
})();
