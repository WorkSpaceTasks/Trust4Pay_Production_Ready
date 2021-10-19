import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { DashBoardComponent } from '../../AdminComponent/DashBoard/dash-board/dash-board.component';
import { MinimalistChartsComponent } from '../../AdminComponent/DashBoard/MinimalistCharts/minimalist-charts/minimalist-charts.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent,
    DashBoardComponent,
    MinimalistChartsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
