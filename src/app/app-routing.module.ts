import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Chart } from 'chart.js/dist';
import { ChartComponent } from './chart/chart.component';
import { PdfReaderComponent } from './pdf-reader/pdf-reader.component';


const routes: Routes = [
  {
    component:ChartComponent,
    path:'Chart'
  },
  {
    component:PdfReaderComponent,
    path:'Report'
  },
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
