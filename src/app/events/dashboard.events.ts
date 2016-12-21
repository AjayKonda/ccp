import { Component, OnInit  } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { Event } from './Event';
import { EventsService } from './app.events.service';
import { Http, Headers } from '@angular/http';

@Component({
    selector: 'dashboard-events',
    templateUrl: './dashboard.events.html',
})

export class DashboardEventsComponent implements OnInit {
  result: any; 
  tresult: any;
  error : any; 
  title:string; 



  constructor(private eventsService: EventsService,public http: Http) {     
        
    }

    ngOnInit() {
         this.eventsService.readEvents("51")
                            .subscribe(result =>{ 
                                this.result = result.data;
                                this.tresult= result.data;                             
                                console.log(this.result);
                               },                            
                              error =>  this.error = <any>error);
    }

    Search(title: string) {
    title = title.trim();   
    this.result= this.tresult.filter(t=>t.title.toLowerCase().startsWith(title.toLowerCase()));
   
  }

}
