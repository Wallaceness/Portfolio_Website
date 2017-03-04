app.config(function($stateProvider) {
    $stateProvider.state("about_me", {
        url: "about_me",
        templateUrl: "browser/js/about_me/about_me.html",
        controller: "about_me_ctrl"
    })
})
