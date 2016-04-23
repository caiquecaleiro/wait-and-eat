(function() {
    'use strict';

    angular
        .module('app.waitList')
        .controller('WaitListController', WaitListController);

    WaitListController.$inject = ['$firebaseArray'];

    function WaitListController($firebaseArray) {
        // ViewModel
        var vm = this;
        var fireParties = new Firebase('https://blistering-torch-6934.firebaseio.com/parties');

        vm.newParty = new Party();
        vm.parties = $firebaseArray(fireParties);
        vm.addParty = addParty;

        function Party() {
            this.name = '';
            this.phone = '';
            this.size = '';
            this.done = false;
            this.notified = false;
        }

        function addParty() {
            vm.parties.$add(vm.newParty);
            vm.newParty = new Party();
        }
    }
})();
