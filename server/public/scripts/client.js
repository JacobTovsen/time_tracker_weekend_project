let app = angular.module('TimeTrackerApp', ['ngRoute', 'ngMaterial', 'ngMessages']).config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('orange')
      .backgroundPalette('orange')
      ;});

app.config(function($routeProvider){
    $routeProvider.when('/', {
        templateUrl: '/views/entry.html',
        controller: 'EntryController as vm'
    }).when( '/project', {
        templateUrl: '/views/project.html',
        controller: 'ProjectController as vm'
    }).when( '/report', {
        templateUrl: '/views/report.html',
        controller: 'ReportController as vm'
    }).otherwise({
        template: '<h1>404</h1>'
    });
});