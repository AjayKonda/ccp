import { Component, AfterViewInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { DashboardService } from './app.dashboard.service';
declare var jQuery: any;
@Component({
  selector: 'landing',
  styles: [`
    .chart {
      display: block;
    }`
  ],
  templateUrl: './app.landing.html',
})

export class LandingComponent implements AfterViewInit {
  result: any;
  error: any;
  userData: any;
  isLoading = false;
  constructor(private dashboardService: DashboardService) {
  }
  ngAfterViewInit() {
    jQuery('#myCarousel').carousel({
      interval: 4000
    });
  }
  ngOnInit() {
    this.isLoading = true;
    if (localStorage.getItem('userInfo') != null && localStorage.getItem('userInfo') != undefined && localStorage.getItem('userInfo') != "undefined") {
      this.userData = JSON.parse(localStorage.getItem('userInfo'));
    }
    this.dashboardService.readDashboard(this.userData.college_info.id)
      .subscribe(result => {
        this.result = result;
        console.log(result);
        this.isLoading = false;
      },
      error => this.error = <any>error);
  }

// lineChart
  public lineChartData:Array<any> = [
    [65, 59, 80, 81, 56, 55, 40]
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';



  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: string = 'pie';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  private datasets = [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3]
    }
  ];

  private labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

  private options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
}
