(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('textMessageService', textMessageService);

    textMessageService.$inject = ['firebaseDataService'];

    function textMessageService(firebaseDataService) {
        var service = {
            sendTextMessage: sendTextMessage
        };
        
        return service;

        /**
         * This method will create a new text message and save it on Firebase.
         * After saving it, the node.js server will listen and send a message
         * for the saved phone number (using the Twilio SMS).
         * @param {object} party - The party object.
         * @param {object} parties - The firebaseDataService parties
         */
        function sendTextMessage(party, parties) {
            var newTextMessage = {
                name: party.name,
                phoneNumber: party.phone,
                size: party.size
            };
            firebaseDataService.textMessages.push(newTextMessage);
            party.notified = true;
            parties.$save(party);
        }
    }
})();
