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
var SMService = (function () {
    function SMService(http) {
        this.http = http;
        this.frndzzyUrl = 'https://api.frndzzy.com/webservices_cubix/college_portal_api.php';
    }
    SMService.prototype.readStudents = function (account_id, college_id, department_id) {
        var completeUrl = this.frndzzyUrl + "?action=read_students_data";
        debugger;
        return this.http.post(completeUrl, JSON.stringify({ account_id: account_id, college_id: college_id, department_id: department_id }))
            .map(this.extractData)
            .catch(this.handleError);
    };
    SMService.prototype.uploadStudents = function (account_id, college_id, department_id, file_name) {
        var completeUrl = this.frndzzyUrl + "?action=upload_students_data";
        return this.http.post(completeUrl, JSON.stringify({ account_id: account_id, college_id: college_id, department_id: department_id, file_name: file_name }))
            .map(this.extractData)
            .catch(this.handleError);
    };
    SMService.prototype.acknowledgeStudents = function (account_id, college_id, department_id, file_name) {
        var completeUrl = this.frndzzyUrl + "?action=acknowledge_students_data";
        return this.http.post(completeUrl, JSON.stringify({ account_id: account_id, college_id: college_id, department_id: department_id, file_name: file_name }))
            .map(this.extractData)
            .catch(this.handleError);
    };
    SMService.prototype.submitStudent = function (account_id, college_id, department_id, student_id, mobile_number, email, user_name) {
        var completeUrl = this.frndzzyUrl + "?action=update_student_data";
        return this.http.post(completeUrl, JSON.stringify({ account_id: account_id, college_id: college_id, department_id: department_id, student_id: student_id, mobile_number: mobile_number, email: email, user_name: user_name }))
            .map(this.extractData)
            .catch(this.handleError);
    };
    SMService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    SMService.prototype.handleError = function (error) {
        debugger;
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    SMService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SMService);
    return SMService;
}());
exports.SMService = SMService;
//# sourceMappingURL=sm.service.js.map