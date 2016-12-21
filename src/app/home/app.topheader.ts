import { Component } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
@Component({
    selector: 'top-header',
    templateUrl: './app.topheader.html'
})
export class TopHeaderComponent {
    constructor(public router: Router) { }
    isLoggedIn = false;
    isActiveRoute(route: string) {
        return this.router.isActive(route, true);
    }
    ngOnInit() {
        if (localStorage.getItem('userInfo') != null && localStorage.getItem('userInfo') != undefined && localStorage.getItem('userInfo') != "undefined") {
            this.isLoggedIn = true;
        }
    }
    logout() {
        localStorage.removeItem('userInfo');
        this.isLoggedIn = false;
    }
    dashboard() {   
        this.router.navigate(['/dashboard/landing']);
    }
}