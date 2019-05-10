import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router : Router) { }

  ngOnInit() {
  }

  NavigatetoSecond()
  {
    this.router.navigate(['/second']);
  }

}
