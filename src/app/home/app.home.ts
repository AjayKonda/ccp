import { Component } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
@Component({
    selector: 'home',
    templateUrl: './app.home.html'
})
export class HomeComponent {
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
