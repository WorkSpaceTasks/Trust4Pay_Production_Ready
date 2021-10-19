import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  WebsiteStats:any;
  Date='19 Oct 2021';
  constructor() { }

  ngOnInit(): void {
  }

}
