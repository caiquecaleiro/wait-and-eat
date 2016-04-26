(function() {
    'use strict';

    angular
        .module('app.waitList')
        .controller('WaitListController', WaitListController);

    WaitListController.$inject = ['partyService', 'firebaseDataService'];

    function WaitListController(partyService, firebaseDataService) {
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
         * This method will create a new text message and save it on Firebase.
         * After saving it, the node.js server will listen and send a message
         * for the saved phone number (using the Twilio SMS).
         * @param {object} party - The party object.
         */
        function sendTextMessage(party) {
            var newTextMessage = {
                name: party.name,
                phoneNumber: party.phone,
                size: party.size
            };
            firebaseDataService.textMessages.push(newTextMessage);
            party.notified = true;
            vm.parties.$save(party);
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
