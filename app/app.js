angular.module('zhufengchat',['ngRoute','angularMoment'])
.config(function($routeProvider){//配置路由
    $routeProvider.when('/',{
        templateUrl:'/pages/login.html',
        controller:'LoginCtrl'
    }).when('/rooms',{
        templateUrl:'/pages/rooms.html',
        controller:'RoomsCtrl'
    }).otherwise({
        redirectTo:'/'
    });
}).run(function($rootScope){
    $rootScope.$on('login',function(event,user){
        $rootScope.user = user;
    });
});
