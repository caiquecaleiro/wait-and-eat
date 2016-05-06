(function() {
    'use strict';

    angular
        .module('app.waitList')
        .directive('partyForm', partyForm);

    function partyForm() {
        return {
            templateUrl: 'app/waitList/directives/partyForm.html',
            restrict: 'E',
            scope: {},
            controller: PartyFormController,
            controllerAs: 'vm'
        };

        PartyFormController.$inject = ['partyService'];

        function PartyFormController(partyService) {

        }
    }
})();
