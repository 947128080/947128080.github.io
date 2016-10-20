var app=angular.module('app',['ngRoute']);
app.config(['$routrProvider',function($routrProvider){
  $routeProvider
  .when('/',{
    templateUrl:'../tpl/tab1.html',
    controller:''
  })
  .when('/tab2',{
    templateUrl:'../tpl/tab2.html',
    controller:''
  })
  .when('/tab3',{
    templateUrl:'../tpl/tab3.html',
    controller:'bookController'
  })
  .when('/about', {
            templateUrl: '../tpl/about.html',
            controller: ''
        })
  .when('/tab4/:id',{
    templateUrl:'../tpl/tab4.html',
    controller:'bookListController'
  })
  .otherwise({
      redirectTo:'/'
      });
}]);
