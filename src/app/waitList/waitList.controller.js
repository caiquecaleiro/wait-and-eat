(function() {
    'use strict';

    angular
        .module('app.waitList')
        .controller('WaitListController', WaitListController);

    WaitListController.$inject = ['partyService', 'user'];

    function WaitListController(partyService, user) {
        // ViewModel
        var vm = this;
        vm.parties = partyService.getPartiesByUser(user.uid);
    }
})();
