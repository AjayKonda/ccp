
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Account } from './Account';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()
export class AccountsService {
  constructor(private http: Http) { }
  private frndzzyUrl = 'https://api.frndzzy.com/webservices_cubix/college_portal_api.php';

  readAccounts(college_id: string) {
    var completeUrl = this.frndzzyUrl + "?action=read_accounts";
    return this.http.post(completeUrl, JSON.stringify({ college_id: college_id }))
      .map(this.extractData)
      .catch(this.handleError);
  }

  createAccount(account: Account) {
    var completeUrl = this.frndzzyUrl + "?action=create_account";
    return this.http.post(completeUrl, JSON.stringify(account))
      .map(this.extractData)
      .catch(this.handleError);
  }
  editAccount(account: Account) {
    var completeUrl = this.frndzzyUrl + "?action=edit_account";
    return this.http.post(completeUrl, JSON.stringify(account))
      .map(this.extractData)
      .catch(this.handleError);
  }
  getRoles() {
    debugger;
    var getRolesUrl = this.frndzzyUrl + "?action=get_roles";
    return this.http.post(getRolesUrl, '')
      .map(this.extractData)
      .catch(this.handleError);
  }

  getDepartments() {
    debugger;
    var getDepartmentsUrl = this.frndzzyUrl + "?action=get_departments";
    return this.http.post(getDepartmentsUrl, '')
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    debugger;
    let body = res.json();
    return body || {};
  }
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}