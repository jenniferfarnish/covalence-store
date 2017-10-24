angular.module('Store.directives', [])

// Directive for Navigation Bar
.directive('mainNavigation', [function() {
    return {
        templateUrl: 'directives/navbar.html',
        restrict: 'E',
        scope: {
            activePage: '='
        }
    };
}])

// Directive for Footer
.directive('footerNav', [function() {
    return {
        templateUrl: 'directives/footer.html',
        restrict: 'E',
    };
}]);