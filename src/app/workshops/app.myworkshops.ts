import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { Workshop } from './Workshop';
import { WorkshopService } from './app.workshop.service';
import { Http, Headers } from '@angular/http';
@Component({
    selector: 'myworkshops',
    templateUrl: './app.myworkshops.html',
})

export class MyWorkshopsComponent implements OnInit {
    result: any;
    tresult: any
    error: any;
      isLoading = false;
    constructor(private workshopService: WorkshopService, public http: Http) {
    }

    ngOnInit() {
          this.isLoading = true;
        this.workshopService.readWorkshopReqs("51")
            .subscribe(result => {
                console.log(result);
                this.result = result.data;
                this.tresult = result.data;
                  this.isLoading = false;
            },
            error => this.error = <any>error);
    }

    Search(title: string) {
        title = title.trim();
        this.result = this.tresult.filter(t => t.title.toLowerCase().startsWith(title.toLowerCase()));

    }
}
