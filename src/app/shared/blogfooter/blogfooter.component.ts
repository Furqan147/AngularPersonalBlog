import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogfooter',
  templateUrl: './blogfooter.component.html',
  styleUrls: ['./blogfooter.component.scss']
})
export class BlogfooterComponent implements OnInit {

  constructor() { }

  currentSystemDate = new Date();

  ngOnInit(): void {
  }

}
