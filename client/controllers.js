angular.module('Store.controllers', [])
   
.controller('WelcomeController', ['$scope', '$location', 'SEOService', function($scope, $location, SEOService) {
    SEOService.setSEO({
        title: 'Covalence Store',
        description: 'Welconme to the Covalence Store',
        url: $location.url()
    });
}])
.controller('ProductsController', ['$scope', 'Product', 'SEOService', '$location', function ($scope, Product, SEOService, $location) {
        $scope.products = Product.query();

        SEOService.setSEO({
            title: 'Covalence Store Products',
            description: 'Items currently available for sale',
            url: $location.url()
        });

        $scope.show = function(value) {
            if(value == 2) {
                return true;
            }
            if(value == 1) {
                return false;
            }
        }
    }])

    .controller('SingleItemController', ['$scope', 'Product', '$routeParams', 'SEOService', '$location', function ($scope, Product, $routeParams, SEOService, $location) {
        $scope.product = Product.get({ id: $routeParams.id }, function (success) {
            SEOService.setSEO({
                title: $scope.product.title,
                description: $scope.product.description,
                price: $scope.product.price,
                image: $scope.product.imageurl,
                url: $location.url()
            });
        });
    }])

    .controller('ContactUsController', ['$scope', 'ContactForm', function($scope, ContactForm) {
        $scope.send = function() {
            let contact = new ContactForm({
                from: $scope.email,
                message: $scope.message
            });

            contact.$save(function() {
                alert('Thank you for your message. We will get back with you shortly');
            }, function(err) {
                console.log(err);
            });
        }
    }]);