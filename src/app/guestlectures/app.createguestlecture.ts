import { Component } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { GuestLecture } from './GuestLecture';
import { GuestLectureService } from './app.guestlectures.service';
import { Http, Headers } from '@angular/http';

@Component({
    selector: 'create-workshop',
    templateUrl: './app.createguestlecture.html',
})

export class CreateGuestLectureComponent {
    result: any;    
    error : any;
    
    constructor(private guestLectureService: GuestLectureService,public http: Http) {
    }

    model = new GuestLecture();
     onSubmit(model) {
            debugger;
            model.date_range='2016-12-20 to 2016-12-20';                       
            this.guestLectureService.createGuestLectureReq(model)
                           .subscribe(
                            result =>{ this.result = result.data;
                            alert(result.message);
                            },                            
                            error =>  this.error = <any>error);               
     }
               
}
