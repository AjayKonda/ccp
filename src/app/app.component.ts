import { Component } from '@angular/core';
import { Routes,Router, RouterModule } from '@angular/router';
import './rxjs-operators';
@Component({
    selector:'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(public router: Router){}
      isActiveRoute(route: string) {
        return this.router.isActive(route,true);
    } 
 }
