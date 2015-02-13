// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','starter.controllers','starter.services','ngResource'])

.run(function($ionicPlatform, $rootScope,   $state,   $stateParams) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
  if(window.cordova && window.cordova.plugins.Keyboard) {
    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
  }
  if(window.StatusBar) {
    StatusBar.styleDefault();
  }


    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;    
  });
})

.config( ['$stateProvider', '$urlRouterProvider',
  function ($stateProvider,   $urlRouterProvider) {

    // Use $urlRouterProvider to configure any redirects (when) and invalid 
    // urls (otherwise).
    $urlRouterProvider.otherwise('/');

    // documentation on ui-router and $stateProvider
    //   - https://github.com/angular-ui/ui-router/wiki
    //   - video overview: https://www.youtube.com/watch?v=dqJRoh8MnBo
    $stateProvider  
      .state("home", {
          // Use a url of "/" to set a state as the "home".
          url: "/",
          // ion-nav-view within index.html.
          templateUrl : 'views/home.html',
          controller: "HomeController"
        })
      .state("detail", {
          // Use a url of "/detail/:index" to set a state as the "detail".
          url: "/detail/:index",
          // ion-nav-view within index.html.
          templateUrl : 'views/detail.html',
          controller: "DetailController"
        })      

}]
)

.value ("KINVEY", {
    "auth": "Basic a2lkXy0xTVFyQW1najo1OGEwNjkxZTRlNzc0YTc0YTYxYjEzMTdhYzExOGM3MQ==",
    "appUrl": "https://baas.kinvey.com/appdata/kid_-1MQrAmgj/testCollection/",
    "baseUrl": "https://baas.kinvey.com/appdata/kid_-1MQrAmgj/testCollection/"
  });

  
