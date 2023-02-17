import { Component, OnInit } from '@angular/core';
// import {Chart,registerables}from 'node_modules/chart.js'
// Chart.register(...registerables);
import Chart from 'chart.js/auto';
// import { getRelativePosition } from 'chart.js/helpers';
import axios from 'axios'

interface data { 
  vendorName:string,
  totalResources: number,
}



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent {

  Users:data[] = []
  label_data:any[] =[];
  real_data:any[]=[];
  response:any;

  // resp = axios.get("http://demo3205980.mockable.io/get/chart/demo")
  


  public chart: any;
  createChart(){
    
    this.chart = new Chart("MyChart", {
      type: 'bar', 

      data: {// X-Axis
        labels: this.response.data.map((res: any) => {
          return res.vendorName
        }), 
	       datasets: [
          {
            label: "Resources",
            data: this.response.data.map((res:any) => {
              return res.totalResources
            }),
            backgroundColor: '#ADD8E6'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }

  async ngOnInit(){
    this.response = await axios.get("http://demo3205980.mockable.io/get/chart/demo")
    console.log (this.response.data)
    this.label_data = this.response.data 
    this.createChart();
    console.log(this.response.data.map((res: any) => {
      return res.vendorName
    }))

  }

}

