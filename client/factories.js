angular.module('Store.factories', [])
.factory('Product', ['$resource', function($resource) {
    return $resource('/api/products/:id', { id: '@id' });
}])

.factory('Category', ['$resource', function($resource) {
    return $resource('/api/categories/:id', {id: '@id'});
}])
