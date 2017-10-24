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
    .when('/products', {
        templateUrl: 'views/product_list.html',
        controller: 'ProductsController'
    })
    .when('/apparel', {
        templateUrl: 'views/apparel.html',
        controller: 'ProductsController'
    })
    .when('/misc', {
        templateUrl: 'views/misc.html',
        controller: 'ProductsController',
    })
    .when('/contactus', {
        templateUrl: 'views/contact_us.html',
        controller: 'ContactUsController'
    })
    .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutController'
    })
    .when('/:id', {
        templateUrl: 'views/single_item.html',
        controller: 'SingleItemController'
    })
    .otherwise({
        redirectTo: '/'
    });
}])