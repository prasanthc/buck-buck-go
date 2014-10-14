var bbgApp = angular.module("bbgApp", ['ngRoute']);

bbgApp.config(function ($routeProvider, $locationProvider, $httpProvider) {

//    //Enable cross domain calls
//    $httpProvider.defaults.useXDomain = true;
//
//    //Remove the header used to identify ajax call  that would prevent CORS from working
//    delete $httpProvider.defaults.headers.common['x-www-form-urlencoded'];

    $routeProvider.when('/', {templateUrl: 'search.html', controller: 'homeCtrl'}).
            when('/:query', {templateUrl: 'results.html', controller: 'resultsCtrl'});
});

