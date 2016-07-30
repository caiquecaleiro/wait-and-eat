(function() {
    'use strict';

    angular
        .module('app.waitList')
        .config(configFunction);

    configFunction.$inject = ['$routeProvider'];

    function configFunction($routeProvider) {
        $routeProvider
            .when('/waitlist', {
                templateUrl: 'app/waitList/waitList.html',
                controller: 'WaitListController',
                controllerAs: 'vm',
                resolve: {user: resolveUser}
            });

        resolveUser.$inject = ['authService'];

        /**
         * The resolve returns success if the user is logged in.
         */
        function resolveUser(authService) {
            return authService.firebaseAuthObject.$requireSignIn();
        }
    }
})();
