(function() {
    'use strict';

    angular
        .module('app.auth')
        .directive('authForm', authForm);

    function authForm() {
        return {
            templateUrl: 'app/auth/authForm.html',
            restrict: 'E',
            controller: AuthFormController,
            controllerAs: 'vm',
            bindToController: true,
            scope: {
                error: '=', // '=' Binds object
                formTitle: '@', // '@' Binds string
                submitAction: '&' // '&' Binds function
            }
        };
    }

    function AuthFormController() {
        var vm = this;
        vm.user = {
            email: '',
            password: ''
        };
    }
})();
