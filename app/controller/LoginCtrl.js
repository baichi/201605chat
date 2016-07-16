angular.module('zhufengchat').controller('LoginCtrl',function($scope,$http,$location){
    //实现用户的登陆 把用户填写的邮箱发送到后台
    $scope.login = function(){
        //$http $.ajax
        $http({
            url:'/user/login',
            method:'POST',
            data:{email:$scope.email}
        }).success(function(user){
            //向上级作用域发射事件
            $scope.$emit('login',user);
            //登陆成功后要跳转到房间列表
            $location.path('/rooms');//跳转路径
        }).error(function(error){
            $location.path('/');
        });
    }
});