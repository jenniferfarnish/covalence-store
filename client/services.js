angular.module('Store.services', [])
.service('SEOService', ['$rootScope', function ($rootScope) {
    this.setSEO = function (data) {
        $rootScope.seo = {};
        for (let p in data) {
            $rootScope.seo[p] = data[p];
        }
    }
}]);