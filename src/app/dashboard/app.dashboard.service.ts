
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'
@Injectable()
export class DashboardService {
    constructor(private http: Http) { }
    private frndzzyUrl = 'https://api.frndzzy.com/webservices_cubix/college_portal_api.php';
    result: any;
    readDashboard(college_id: string) {
        var completeUrl = this.frndzzyUrl + "?action=read_dashboard_content";
        return this.http.post(completeUrl, JSON.stringify({ college_id: college_id }))
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
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


