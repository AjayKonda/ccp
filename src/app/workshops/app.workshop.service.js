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
var WorkshopService = (function () {
    function WorkshopService(http) {
        this.http = http;
        this.contactsUrl = 'https://api.frndzzy.com/webservices_cubix/college_portal_api.php';
    }
    WorkshopService.prototype.readWorkshopOrgs = function (college_id) {
        var getDepartmentsUrl = this.contactsUrl + "?action=read_workshop_orgs";
        return this.http.post(this.contactsUrl, JSON.stringify({ college_id: college_id }))
            .map(this.extractData)
            .catch(this.handleError);
    };
    WorkshopService.prototype.createWorkshopReq = function (workshop) {
        debugger;
        var getDepartmentsUrl = this.contactsUrl + "?action=create_workshop_req";
        return this.http.post(getDepartmentsUrl, JSON.stringify(workshop))
            .map(this.extractData)
            .catch(this.handleError);
    };
    WorkshopService.prototype.editWorkshopReq = function (workshop) {
        var getDepartmentsUrl = this.contactsUrl + "?action=dit_workshop_req";
        return this.http.post(getDepartmentsUrl, JSON.stringify(workshop))
            .map(this.extractData)
            .catch(this.handleError);
    };
    WorkshopService.prototype.readWorkshopReqs = function (college_id) {
        var getDepartmentsUrl = this.contactsUrl + "?action=read_workshop_orgs";
        return this.http.post(getDepartmentsUrl, JSON.stringify({ college_id: college_id }))
            .map(this.extractData)
            .catch(this.handleError);
    };
    WorkshopService.prototype.readWorkshopReqProfile = function (college_id, workshop_orgid) {
        debugger;
        var getWorkshopUrl = this.contactsUrl + "?action=read_workshop_orgs";
        debugger;
        return this.http.post(getWorkshopUrl, JSON.stringify({ college_id: college_id, workshop_org_id: workshop_orgid }))
            .map(this.extractData)
            .catch(this.handleError);
    };
    WorkshopService.prototype.publishWorkshop = function (workshop_req_id, send_option, account_id, role_id, dept_id, year) {
        var getDepartmentsUrl = this.contactsUrl + "?action=publish_workshop";
        return this.http.post(getDepartmentsUrl, JSON.stringify({ workshop_req_id: workshop_req_id, send_option: send_option, account_id: account_id, role_id: role_id, dept_id: dept_id, year: year }))
            .map(this.extractData)
            .catch(this.handleError);
    };
    WorkshopService.prototype.extractData = function (res) {
        debugger;
        var body = res.json();
        return body || {};
    };
    WorkshopService.prototype.handleError = function (error) {
        debugger;
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    WorkshopService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], WorkshopService);
    return WorkshopService;
}());
exports.WorkshopService = WorkshopService;
//# sourceMappingURL=app.workshop.service.js.map