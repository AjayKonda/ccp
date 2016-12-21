"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
var GuestLectureService = (function () {
    function GuestLectureService(http) {
        this.http = http;
        this.contactsUrl = 'https://api.frndzzy.com/webservices_cubix/college_portal_api.php';
    }
    GuestLectureService.prototype.createGuestLectureReq = function (guestLecture) {
        debugger;
        var getGuestLecturesUrl = this.contactsUrl + "?action=create_gl_req";
        return this.http.post(getGuestLecturesUrl, JSON.stringify(guestLecture))
            .map(this.extractData)
            .catch(this.handleError);
    };
    GuestLectureService.prototype.editGuestLectureReq = function (guestLecture) {
        var getDepartmentsUrl = this.contactsUrl + "?action=edit_gl_req";
        return this.http.post(this.contactsUrl, JSON.stringify(guestLecture))
            .map(this.extractData)
            .catch(this.handleError);
    };
    GuestLectureService.prototype.readGuestLectureReq = function (college_id) {
        debugger;
        var getGuestLecturesUrl = this.contactsUrl + "?action=read_guest_lecturers";
        return this.http.post(getGuestLecturesUrl, JSON.stringify({ college_id: college_id, max_items: 50 }))
            .map(this.extractData)
            .catch(this.handleError);
    };
    GuestLectureService.prototype.readGuestLectureReqProfile = function (college_id, profileID) {
        debugger;
        var getGuestLecturesUrl = this.contactsUrl + "?action=read_guest_lecturers";
        return this.http.post(getGuestLecturesUrl, JSON.stringify({ college_id: college_id, guest_lecture_org_id: profileID }))
            .map(this.extractData)
            .catch(this.handleError);
    };
    GuestLectureService.prototype.publishGuestLecture = function (guest_lecture_req_id, send_option, account_id, role_id, dept_id, year) {
        var getGuestLecturesUrl = this.contactsUrl + "?action=publish_gl";
        return this.http.post(getGuestLecturesUrl, JSON.stringify({ guest_lecture_req_id: guest_lecture_req_id, send_option: send_option, account_id: account_id, role_id: role_id, dept_id: dept_id, year: year }))
            .map(this.extractData)
            .catch(this.handleError);
    };
    GuestLectureService.prototype.extractData = function (res) {
        debugger;
        var body = res.json();
        return body || {};
    };
    GuestLectureService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    GuestLectureService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GuestLectureService);
    return GuestLectureService;
}());
exports.GuestLectureService = GuestLectureService;
//# sourceMappingURL=app.guestlectures.service.js.map