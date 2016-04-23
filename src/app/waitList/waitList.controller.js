(function() {
    'use strict';

    angular
        .module('app.waitList')
        .controller('WaitListController', WaitListController);

    function WaitListController() {
        // ViewModel
        var vm = this;

        vm.parties = [1, 2, 3, 4];
    }
})();
