import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';
  profile: Object = { Name: "Nathaniel C. Wallace", "Preferred Name": "Nathan", Birthday: "December 19, 1990", Age: "Twenty-Seven", Occupation: "Jr. Web Developer", "Born In": "Richmond, VA", "Lives In": "Brooklyn, NY", Email: "ncw232@gmail.com" };
  skills: Object = [
        ["HTML", "CSS", "Javascript", "JQuery"],
        ["Angular 1", "Socket.io", "Node.js", "Sequel"],
        ["SASS", "Git/Github", "Python", "Gulp"],
        ["Webpack", "React", "Redux" ]
    ]
  education: Object = [{ name: "Fullstack Academy of Code", location: "New York, NY", dates: "July-October, 2016", studied: "Web Development" },
        { name: "J. Sargent Reynolds Community College", location: "Richmond, VA", dates: "April 2008-October 2009", studied: "Business, Precalculus, Drafting, World History, Geography" },
        { name: "Adult Education Center", location: "Richmond, VA", dates: "February 2009", studied: "GED" }
    ];
  work: Object = [{ name: "Quality Edgar Solutions", dates: "April 2017-Present", position: "Web Developer" },
        { name: "Papa Johns", dates: "August 2014-February 2015", position: "Delivery Driver" },
        { name: "E-bay", dates: "November 2012-January 2013; December 2013; December 2015-February 2016", position: "Picker, Packer, Returns Associate" },
        { name: "Kroger", dates: "October 2010-June 2012", position: "Cashier, U-Scan Coordinator, Office Clerk" },
    
    ];
  show_work: boolean  = false;
  show_education: boolean = false;
  show_skills: boolean = true;
    toggle(section: string) : void {
        if (section === 'work') {
            this.show_work = true;
            this.show_skills = false;
            this.show_education = false;
        } else if (section === 'education') {
            this.show_education = true;
            this.show_skills = false;
            this.show_work = false;
        } else {
            this.show_skills = true;
            this.show_education = false;
            this.show_work = false;
        }
    }
}
