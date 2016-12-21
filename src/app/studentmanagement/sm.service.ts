
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map'
@Injectable()
export class SMService {
    constructor(private http: Http) { }
    private frndzzyUrl = 'https://api.frndzzy.com/webservices_cubix/college_portal_api.php';
    result: any;
    readStudents(account_id: string, college_id: string, department_id: string) {
        var completeUrl = this.frndzzyUrl + "?action=read_students_data";
        debugger;
        return this.http.post(completeUrl, JSON.stringify({ account_id: account_id, college_id: college_id, department_id: department_id }))
            .map(this.extractData)
            .catch(this.handleError);
    }
    uploadStudents(account_id: string, college_id: string, department_id: string, file_name: string) {
        var completeUrl = this.frndzzyUrl + "?action=upload_students_data";
        return this.http.post(completeUrl, JSON.stringify({ account_id: account_id, college_id: college_id, department_id: department_id, file_name: file_name }))
            .map(this.extractData)
            .catch(this.handleError);
    }
    acknowledgeStudents(account_id: string, college_id: string, department_id: string, file_name: string) {
        var completeUrl = this.frndzzyUrl + "?action=acknowledge_students_data";
        return this.http.post(completeUrl, JSON.stringify({ account_id: account_id, college_id: college_id, department_id: department_id, file_name: file_name }))
            .map(this.extractData)
            .catch(this.handleError);
    }
    submitStudent(account_id: string, college_id: string, department_id: string, student_id: number, mobile_number: string, email: string, user_name: string) {
        var completeUrl = this.frndzzyUrl + "?action=update_student_data";
        return this.http.post(completeUrl, JSON.stringify({ account_id: account_id, college_id: college_id, department_id: department_id, student_id: student_id, mobile_number: mobile_number, email: email, user_name: user_name }))
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
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


