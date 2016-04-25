(function() {
    'use strict';

    angular
        .module('app.waitList')
        .controller('WaitListController', WaitListController);

    WaitListController.$inject = ['$firebaseArray', 'FIREBASE_URL'];

    function WaitListController($firebaseArray, FIREBASE_URL) {
        // ViewModel
        var vm = this;
        var fireParties = new Firebase(FIREBASE_URL + 'parties');
        var fireTextMessages = new Firebase(FIREBASE_URL + 'textMessages');

        vm.newParty = new Party();
        vm.parties = $firebaseArray(fireParties);
        vm.addParty = addParty;
        vm.removeParty = removeParty;
        vm.sendTextMessage = sendTextMessage;
        vm.toggleDone = toggleDone;

        /**
         * The party is a group of people or just one person as well.
         * @constructor
         */
        function Party() {
            this.name = '';
            this.phone = '';
            this.size = '';
            this.done = false;
            this.notified = false;
        }

        /**
         * Adds the party to the Firebase.
         */
        function addParty() {
            vm.parties.$add(vm.newParty);
            vm.newParty = new Party();
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
            fireTextMessages.push(newTextMessage);
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
