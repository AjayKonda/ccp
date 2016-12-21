import { Component } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { Workshop } from './Workshop';
import { WorkshopService } from './app.workshop.service';
import { Http, Headers } from '@angular/http';

@Component({
    selector: 'create-workshop',
    templateUrl: './app.createworkshop.html',
})

export class CreateWorkshopComponent {
    result: any;    
    error : any;
    
    constructor(private workshopService: WorkshopService,public http: Http) {
    }

    model = new Workshop();
     onSubmit(model) {
            debugger;
            model.date_range='2016-12-20 to 2016-12-20';                       
            this.workshopService.createWorkshopReq(model)
                           .subscribe(
                            result =>{ this.result = result.data;
                            alert(result.message);
                            },                            
                            error =>  this.error = <any>error);               
     }
               
}
