app.controller("about_me_ctrl", function($scope) {
    $scope.profile = { Name: "Nathaniel C. Wallace", "Preferred Name": "Nathan", Birthday: "December 19, 1990", Age: "Twenty-Seven", Occupation: "Jr. Web Developer", "Born In": "Richmond, VA", "Lives In": "Brooklyn, NY", Email: "ncw232@gmail.com" };
    $scope.skills = [
        ["HTML", "CSS", "Javascript", "JQuery"],
        ["Angular 1", "Socket.io", "Node.js", "Sequel"],
        ["SASS", "Git/Github", "Python", "Gulp"],
        ["Webpack", "React", "Redux" ]
    ]
    $scope.education = [{ name: "Fullstack Academy of Code", location: "New York, NY", dates: "July-October, 2016", studied: "Web Development" },
        { name: "J. Sargent Reynolds Community College", location: "Richmond, VA", dates: "April 2008-October 2009", studied: "Business, Precalculus, Drafting, World History, Geography" },
        { name: "Adult Education Center", location: "Richmond, VA", dates: "February 2009", studied: "GED" }
    ];
    $scope.work = [{ name: "Quality Edgar Solutions", dates: "April 2017-Present", position: "Web Developer" },
        { name: "Papa Johns", dates: "August 2014-February 2015", position: "Delivery Driver" },
        { name: "E-bay", dates: "November 2012-January 2013; December 2013; December 2015-February 2016", position: "Picker, Packer, Returns Associate" },
        { name: "Kroger", dates: "October 2010-June 2012", position: "Cashier, U-Scan Coordinator, Office Clerk" },
    
    ];
    $scope.show_work = false;
    $scope.show_education = false;
    $scope.show_skills = true;
    $scope.toggle = function(section) {
        if (section === 'work') {
            $scope.show_work = true;
            $scope.show_skills = false;
            $scope.show_education = false;
        } else if (section === 'education') {
            $scope.show_education = true;
            $scope.show_skills = false;
            $scope.show_work = false;
        } else {
            $scope.show_skills = true;
            $scope.show_education = false;
            $scope.show_work = false;
        }
    }
})
