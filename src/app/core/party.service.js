(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('partyService', partyService);

    partyService.$inject = ['$firebaseArray', 'firebaseDataService'];

    function partyService($firebaseArray, firebaseDataService) {
        var parties = null;

        var service = {
            Party: Party,
            getPartiesByUser: getPartiesByUser,
            reset: reset
        };
        return service;

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
         * Returns the parties related with the user id.
         * @param {object} userId - The user id code (uid).
         */
        function getPartiesByUser(userId) {
            if (!parties) {
              parties = $firebaseArray(firebaseDataService.users.child(userId).child('parties'));
            }
            return parties;
        }

        /**
        * Breaks the connection stablished by $firebaseArray.
        */
        function reset() {
            if (parties) {
              parties.$destroy();
              parties = null;
            }
        }
    }



})();
