import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  links: Object = [{ name: "My Github Page", link: "https://github.com/Wallaceness" },
        { name: "My Stackoverflow Profile", link: "http://stackoverflow.com/users/7416146/wallaceness" },
        { name: "My Linkedin Profile", link: "https://www.linkedin.com/in/nathan-wallace-626b2326/" },
        { name: "My HackerRank Profile", link: "https://www.hackerrank.com/ncw232" },
    ]
}
