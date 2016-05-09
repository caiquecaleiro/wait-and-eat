(function() {
    'use strict';

    angular
        .module('app.waitList')
        .controller('WaitListController', WaitListController);

    WaitListController.$inject = ['textMessageService', 'partyService', 'user'];

    function WaitListController(textMessageService, partyService, user) {
        // ViewModel
        var vm = this;
        vm.parties = partyService.getPartiesByUser(user.uid);
    }
})();
