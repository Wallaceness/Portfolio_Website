app.controller("links_ctrl", function($scope, $sce){
	$scope.links=[{name:"My Github Page", link: $sce.trustAsResourceUrl("https://github.com/Wallaceness")},
	{name: "My Stackoverflow Profile", link: $sce.trustAsResourceUrl("http://stackoverflow.com/users/7416146/wallaceness")},
	{name: "My Linkedin Profile", link: $sce.trustAsResourceUrl("https://www.linkedin.com/in/nathan-wallace-626b2326/")},
	{name: "My HackerRank Profile", link: $sce.trustAsResourceUrl("https://www.hackerrank.com/ncw232")},
	{name: "My freelancer.com Profile", link: $sce.trustAsResourceUrl("https://www.freelancer.com/u/Wallaceness.html")}]
})