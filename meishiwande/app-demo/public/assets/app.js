require('angular');
require('angular-route');
require('angular-animate');
// require('ionic');


var app = angular.module('app', ['ngRoute','ngAnimate','ionic']);

//引入服务
require('./services/config');
require('./services/api');


// 引入控制器
require('./controller/main_controller');


// 指定此处模版文件加载使用html-loader加载器
var tplMain = require('./tpl/main.html');
// console.log(tplMain);
var tplare=require('./tpl/are.html');
var tpllist=require('./tpl/list.html');
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/',{
          template:tplMain,
          controller:'mainController'
        })
        .when('/are',{
          template:tplare,
        })
        .when('/list',{
          template:tpllist,
        });
}]);
