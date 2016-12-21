import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { DashboardService } from './app.dashboard.service';

@Component({
    selector: 'dashboard',
    templateUrl: './app.dashboard.html',
})
export class DashboardComponent implements OnInit {

    constructor(public router: Router, private dashboardService: DashboardService) {
    }
    userData: any;
    ngOnInit() {
        this.loadUser();
    }
    loadUser() {
        this.userData = JSON.parse(localStorage.getItem('userInfo'));
    }
    logout() {
        localStorage.removeItem('userInfo');
        window.location.href="/"
    }
    home() {
        window.location.href="/"
    }
     dashboard() {
        this.router.navigate(['/dashboard']);
    }
}
