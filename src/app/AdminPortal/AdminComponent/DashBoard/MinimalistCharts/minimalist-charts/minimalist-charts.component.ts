import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minimalist-charts',
  templateUrl: './minimalist-charts.component.html',
  styleUrls: ['./minimalist-charts.component.css']
})
export class MinimalistChartsComponent implements OnInit {

  NewVisitors:any;
  Purchases:any;
  ActiveUsers:any;
  Returned:any;
  Clicks:any;
  constructor() { }

  ngOnInit(): void {
  }

}
