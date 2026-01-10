import { Component, inject, OnInit } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexStroke,
  ApexGrid,
  NgApexchartsModule,
} from 'ng-apexcharts';
import {
  DashboardData,
  HomeService,
} from '../../../core/services/home.service';

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
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [NgApexchartsModule],
})
export class HomeComponent implements OnInit {
  public barChartOptions!: Partial<BarChartOptions>;
  homeService = inject(HomeService);
  dashboard: DashboardData | undefined;

  ngOnInit(): void {
    // Fetch dashboard data from backend
    this.homeService.getDashboard().subscribe({
      next: (data) => {
        this.dashboard = data;

        // Set chart options dynamically
        this.barChartOptions = {
          series: [
            { name: 'Sales', data: data.weeklySales ?? [] }, // fallback to empty array
          ],
          chart: { type: 'bar', height: 200 },
          xaxis: { categories: data.categories ?? [] }, // fallback to empty array
          plotOptions: { bar: { horizontal: false, columnWidth: '45%' } },
          dataLabels: { enabled: false },
          stroke: { show: true, width: 2, colors: ['transparent'] },
          grid: {
            borderColor: '#f1f1f1',
            row: { colors: ['#f9f9f9', '#ffffff'], opacity: 0.5 },
          },
          title: { text: 'Weekly Sales Overview', align: 'left' },
        };
      },
      error: (err) => console.error('Dashboard API error:', err),
    });
  }
}
