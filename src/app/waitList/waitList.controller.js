(function() {
    'use strict';

    angular
        .module('app.waitList')
        .controller('WaitListController', WaitListController);

    WaitListController.$inject = ['textMessageService', 'partyService', 'user'];

    function WaitListController(textMessageService, partyService, user) {
        // ViewModel
        var vm = this;
        vm.newParty = new partyService.Party();
        vm.parties = partyService.parties;
        vm.addParty = addParty;
        vm.removeParty = removeParty;
        vm.sendTextMessage = sendTextMessage;
        vm.toggleDone = toggleDone;

        /**
         * Adds the party to the Firebase.
         */
        function addParty() {
            vm.parties.$add(vm.newParty);
            vm.newParty = new partyService.Party();
        }

        /**
         * Removes the party from the Firebase.
         * @param {object} party - The party object.
         */
        function removeParty(party) {
            vm.parties.$remove(party);
        }

        /**
         * Sends a text message for the user's cellphone number.
         * @param {object} party - The party object.
         */
        function sendTextMessage(party) {
            textMessageService.sendTextMessage(party, vm.parties);
        }

        /**
         * Saves the party to the Firebase whenever the user toggles the Done
         * checkbox.
         * @param {object} party - The party object
         */
        function toggleDone(party) {
            vm.parties.$save(party);
        }
    }
})();
