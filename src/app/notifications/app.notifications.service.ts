
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Notification } from './notification';
import 'rxjs/add/operator/map'
@Injectable()
export class NotificationService {
  constructor(private http: Http) { }
  private frndzzyUrl = 'https://api.frndzzy.com/webservices_cubix/college_portal_api.php';
  result: any;
  getDepartments() {
    debugger;
    var getDepartmentsUrl = this.frndzzyUrl + "?action=get_departments";
    return this.http.post(getDepartmentsUrl, '')
      .map(this.extractData)
      .catch(this.handleError);
  }

  fetchNotifications(body) {
    debugger;
    var getNotificationsUrl = this.frndzzyUrl + "?action=read_notification_history";
    return this.http.post(getNotificationsUrl, body)
      .map(this.extractData)
      .catch(this.handleError);
  }

  sendNotification(noti: Notification) {
    var notificationUrl = this.frndzzyUrl + "?action=notify_students";
    this.result = this.http.post(notificationUrl, JSON.stringify(noti))
      .map(this.extractData)
      .catch(this.handleError);
    return this.result;
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