 
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Event }     from './Event';
import 'rxjs/add/operator/map'
@Injectable()
export class EventsService {
  constructor (private http: Http) {}
  private contactsUrl = 'https://api.frndzzy.com/webservices_cubix/college_portal_api.php';
  result :any;
  readEvents(college_id : string)
     {
         var completeUrl=this.contactsUrl+"?action=read_events";
         return this.http.post(completeUrl, JSON.stringify({college_id: college_id}))
                   .map(this.extractData)
                   .catch(this.handleError);     
     }

     createEvents(event : Event)
     {
         var completeUrl=this.contactsUrl+"?action=create_event";
        this.result= this.http.post(completeUrl, JSON.stringify(event))
                   .map(this.extractData)
                   .catch(this.handleError);
                   return this.result;
     }

     fileUpload(file : any)
     {
       debugger;
         var completeUrl=this.contactsUrl+"?action=upload_my_file";
        this.result= this.http.post(completeUrl, JSON.stringify(file))
                   .map(this.extractData)
                   .catch(this.handleError);
                   return this.result;
     }

     private extractData(res: Response) {
        let body = res.json();
        return body || { };
  }
  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
 
 
 