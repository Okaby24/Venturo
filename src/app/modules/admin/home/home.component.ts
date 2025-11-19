import { Component, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexStroke,
  ApexGrid,
  NgApexchartsModule
} from 'ng-apexcharts';

export interface BarChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  stroke: ApexStroke;
  grid: ApexGrid;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [NgApexchartsModule]
})
export class HomeComponent implements OnInit {
  public barChartOptions!: Partial<BarChartOptions>;

  ngOnInit(): void {
    this.barChartOptions = {
      series: [
        {
          name: 'Sales',
          data: [30, 40, 35, 50, 49, 60, 70]
        }
      ],
      chart: {
        type: 'bar',
        height: 200
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '45%',
          
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Startup 1', 'Startup 2', 'Startup 3', 'Startup 4', 'Startup 5', 'Startup 6', 'Startup 7']
      },
      grid: {
          borderColor: '#f1f1f1',
  row: {
    colors: ['#f9f9f9', '#ffffff'],
    opacity: 0.5
  }
      },
      title: {
        text: 'Weekly Sales Overview',
        align: 'left'
      }
    };
  }
}
