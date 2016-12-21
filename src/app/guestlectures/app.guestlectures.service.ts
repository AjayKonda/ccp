
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { GuestLecture }     from './GuestLecture';
import 'rxjs/add/operator/map'
@Injectable()
export class GuestLectureService {
    constructor(private http: Http) { }
    private contactsUrl = 'https://api.frndzzy.com/webservices_cubix/college_portal_api.php';

    createGuestLectureReq(guestLecture: GuestLecture) {
        debugger;
        var getGuestLecturesUrl = this.contactsUrl + "?action=create_gl_req";
        return this.http.post(getGuestLecturesUrl, JSON.stringify(guestLecture))
            .map(this.extractData)
            .catch(this.handleError);
    }

    editGuestLectureReq(guestLecture: GuestLecture) {
        var getDepartmentsUrl = this.contactsUrl + "?action=edit_gl_req";
        return this.http.post(this.contactsUrl, JSON.stringify(guestLecture))
            .map(this.extractData)
            .catch(this.handleError);
    }

    readGuestLectureReq(college_id: number) {
        debugger;
        var getGuestLecturesUrl = this.contactsUrl + "?action=read_guest_lecturers";
        return this.http.post(getGuestLecturesUrl, JSON.stringify({ college_id: college_id, max_items: 50 }))
            .map(this.extractData)
            .catch(this.handleError);
    }

    readGuestLectureReqProfile(college_id: number, profileID: number) {
        debugger;
        var getGuestLecturesUrl = this.contactsUrl + "?action=read_guest_lecturers";
        return this.http.post(getGuestLecturesUrl, JSON.stringify({ college_id: college_id, guest_lecture_org_id: profileID }))
            .map(this.extractData)
            .catch(this.handleError);
    }

    publishGuestLecture(guest_lecture_req_id: number, send_option: number, account_id: number, role_id: number, dept_id: number, year: number) {
        var getGuestLecturesUrl = this.contactsUrl + "?action=publish_gl";
        return this.http.post(getGuestLecturesUrl, JSON.stringify({ guest_lecture_req_id: guest_lecture_req_id, send_option: send_option, account_id: account_id, role_id: role_id, dept_id: dept_id, year: year }))
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