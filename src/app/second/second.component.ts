import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
  }

  NavigatetoFirst()
  {
    this.router.navigate(['/first']);
  }


}
