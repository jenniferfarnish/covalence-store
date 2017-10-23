angular.module('Store', [
    'ngRoute',
    'ngResource',
    'Store.factories',
    'Store.controllers',
    'Store.services',
    'Store.directives'
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
    .when('/', {
        templateUrl: 'views/welcome.html',
        controller: 'WelcomeController'
    })
    .when('/apparel', {
        templateUrl: 'views/apparel.html',
        controller: 'ApparelController'
    })
    .when('/misc', {
        templateUrl: 'views/misc.html',
        controller: 'MiscListController',
    })
    .when('/contactus', {
        templateUrl: 'views/contact_us.html',
        controller: 'ContactUsController'
    })
    .when('/:theId', {
        templateUrl: 'views/single_item.html',
        controller: 'SingleItemController'
    })
    .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutController'
    })
    .otherwise({
        redirectTo: '/'
    });
}])