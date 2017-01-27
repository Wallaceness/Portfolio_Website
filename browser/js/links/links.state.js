app.config(function($stateProvider){
	$stateProvider.state('links', {
		url: 'links',
		templateUrl: "browser/js/links/links.html",
		controller: "links_ctrl"
	})
})