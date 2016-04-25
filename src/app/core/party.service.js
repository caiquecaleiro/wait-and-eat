(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('partyService', partyService);

    function partyService() {
        var service = {
            Party: Party
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
    }



})();
