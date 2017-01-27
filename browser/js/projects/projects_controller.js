'use strict';

console.log("controller");
app.controller('projects_ctrl', function($scope, $sce){
	console.log("hi!")
	$scope.projects=[
	{id: "top-left", show: false, title: "Sudoku Solver", description: 'The project includes a fully functional program to solve and generate sudoku puzzles and the interface to use it. To use it, one selects either the solve or generate options, then enters the corresponding numbers into the table in order to solve or enters the number of spaces to fill to generate. The program can solve virtually any valid sudoku arrangement, including “the hardest sudoku in the world”. It was programmed using Python and Python’s Web App2 module for the back-end functionality, and HTML and CSS on the front-end. I deployed it using Google App Engine.', link: $sce.trustAsResourceUrl("https://my-solver.appspot.com")}, 
	{id: "top-right", show: false, title: "My Arimaa Challenge", description: "This project was my take on the Arimaa Challenge. The challenge, beaten in 2015 by the bot Sharp, was run by Omar Syed and offered $10,000 to the first developer who could program a bot better than humans at his board game Arimaa, which he designed to be hard for bots to play. My project includes a bot and an interface for users to play against it. While the bot is not exactly as good as Sharp…, it is still fun to play against, particularly for a novice. The app was developed with HTML/CSS and Javascript on the front end, Node.js on the back-end, Python for the bot, and was deployed using Heroku.", link: $sce.trustAsResourceUrl("https://arimaa-engine.herokuapp.com")},
	{id: "bottom-left", show: false, title: "Minestore", description: 'I developed this application while at Fullstack Academy in collaboration with three other classmates. It is a fake e-commerce store selling rocks and minerals (and asteroids!). Features include a user sign up/login page, a catalogue of fake products, individual product pages, a cart feature, and an administrator page. The app was built with HTML/CSS, Javascript, Angular, SASS, Gulp, Node, Git, and PostgresSql, and deployed using Heroku. My contributions included building one of the database tables, some of the Express routing, some of the front-end using Angular, and the user authentication features.', link: $sce.trustAsResourceUrl("https://mine-store.herokuapp.com")}, 
	{id: "bottom-right", show: false, title: "Grab Gab", description: 'I helped build this application as part of a team with three other classmates at Fullstack Academy. The app is a real time word game similar to Boggle but with expanded rules and community features that go with the game. It was developed with a large array of software technologies including Node.js and PostgresSql on the back-end and HTML/CSS, Javascript, SASS, Gulp, Git, Angular, and Socket.io on the front. My contributions were to many of the front-end Angular features, the styling with SASS/CSS, some of the routing and database tables with Express and Sequelize, and limited work with the sockets. The game is deployed using Heroku.', link: $sce.trustAsResourceUrl("https://www.grab-gab.com")}]
	$scope.toggle=function(Project){
		for (var item in $scope.projects){
			if ($scope.projects[item].title===Project){
				if ($scope.projects[item].show===false){
					$scope.projects[item].show=true;
				}
				else{
					$scope.projects[item].show=false;
				}
				return;
			}
		}
	}
})