
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Workshop } from './Workshop';
import 'rxjs/add/operator/map'
@Injectable()
export class WorkshopService {
  constructor(private http: Http) { }
  private contactsUrl = 'https://api.frndzzy.com/webservices_cubix/college_portal_api.php';

  readWorkshopOrgs(college_id: number) {
    var getDepartmentsUrl = this.contactsUrl + "?action=read_workshop_orgs";
    return this.http.post(this.contactsUrl, JSON.stringify({ college_id: college_id }))
      .map(this.extractData)
      .catch(this.handleError);
  }

  createWorkshopReq(workshop: Workshop) {
    debugger;
    var getDepartmentsUrl = this.contactsUrl + "?action=create_workshop_req";
    return this.http.post(getDepartmentsUrl, JSON.stringify(workshop))
      .map(this.extractData)
      .catch(this.handleError);
  }

  editWorkshopReq(workshop: Workshop) {
    var getDepartmentsUrl = this.contactsUrl + "?action=dit_workshop_req";
    return this.http.post(getDepartmentsUrl, JSON.stringify(workshop))
      .map(this.extractData)
      .catch(this.handleError);
  }

  readWorkshopReqs(college_id: string) {
    var getDepartmentsUrl = this.contactsUrl + "?action=read_workshop_orgs";
    return this.http.post(getDepartmentsUrl, JSON.stringify({ college_id: college_id }))
      .map(this.extractData)
      .catch(this.handleError);
  }

  readWorkshopReqProfile(college_id: number, workshop_orgid: number) {
    debugger;
    var getWorkshopUrl = this.contactsUrl + "?action=read_workshop_orgs";
    debugger;
    return this.http.post(getWorkshopUrl, JSON.stringify({ college_id: college_id, workshop_org_id: workshop_orgid }))
      .map(this.extractData)
      .catch(this.handleError);
  }

  publishWorkshop(workshop_req_id: number, send_option: number, account_id: number, role_id: number, dept_id: number, year: number) {
    var getDepartmentsUrl = this.contactsUrl + "?action=publish_workshop";
    return this.http.post(getDepartmentsUrl, JSON.stringify({ workshop_req_id: workshop_req_id, send_option: send_option, account_id: account_id, role_id: role_id, dept_id: dept_id, year: year }))
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    debugger;
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    debugger;
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}