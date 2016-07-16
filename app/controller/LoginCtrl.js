angular.module('zhufengchat').controller('LoginCtrl',function($scope,$http){
    //实现用户的登陆 把用户填写的邮箱发送到后台
    $scope.login = function(){
        //$http $.ajax
        $http({
            url:'/user/login',
            method:'POST',
            data:{email:$scope.email}
        }).success(function(data){

        }).error(function(error){

        });
    }
});