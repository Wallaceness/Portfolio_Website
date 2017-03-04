app.controller("homepage_ctrl", function($scope, $state) {
    $('document').ready(function() {
        $scope.enter();
    })
    $scope.transition = function() {
        $('#homepage').fadeOut(1500, function() {
            $state.go("about_me");
        })
    }
    $scope.enter = function() {
        $('#homepage').slideDown(1500, function() {
            $scope.ready = true;
            $scope.$digest()
        });
    }
    $scope.ready = false;
})
