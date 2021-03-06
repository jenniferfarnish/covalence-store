angular.module('Store.factories', [])
.factory('Product', ['$resource', function($resource) {
    return $resource('/api/products/:id', { id: '@id' });
}])

.factory('Category', ['$resource', function($resource) {
    return $resource('/api/categories/:id', {id: '@id'});
}])

.factory('ContactForm', ['$resource', function($resource) {
    return $resource('/api/contactus/:id', {id: '@id'});
}])

.factory('Payment', ['$resource', function($resource) {
    return $resource('/api/purchases/:id', {id: '@id'});
}])

.factory('PurchProd', ['$resource', function($resource) {
    return $resource('api/purchprod/:id', {id: '@id'});
}]);