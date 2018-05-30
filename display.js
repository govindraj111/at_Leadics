var app =angular.module("appModule",['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
      .state('default',{
        url: '/defaultpage',
        templateUrl:'templates/defaultpage.html'
  })

      .state('pageone',{
        url: '/pageone',
        templateUrl:'templates/pageone.html'
  })

    .state('pagetwo',{
        url: '/pagetwo',
        templateUrl: 'templates/pagetwo.html'
  })

    .state('pagethree',{
        url: '/pagethree',
        templateUrl:'templates/pagethree.html'
  });

    $urlRouterProvider.otherwise('/defaultpage');
});