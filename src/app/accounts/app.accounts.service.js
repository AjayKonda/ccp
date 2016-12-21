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
require('rxjs/add/operator/catch');
var AccountsService = (function () {
    function AccountsService(http) {
        this.http = http;
        this.frndzzyUrl = 'https://api.frndzzy.com/webservices_cubix/college_portal_api.php';
    }
    AccountsService.prototype.readAccounts = function (college_id) {
        var completeUrl = this.frndzzyUrl + "?action=read_accounts";
        return this.http.post(completeUrl, JSON.stringify({ college_id: college_id }))
            .map(this.extractData)
            .catch(this.handleError);
    };
    AccountsService.prototype.createAccount = function (account) {
        var completeUrl = this.frndzzyUrl + "?action=create_account";
        return this.http.post(completeUrl, JSON.stringify(account))
            .map(this.extractData)
            .catch(this.handleError);
    };
    AccountsService.prototype.getRoles = function () {
        debugger;
        var getRolesUrl = this.frndzzyUrl + "?action=get_roles";
        return this.http.post(getRolesUrl, '')
            .map(this.extractData)
            .catch(this.handleError);
    };
    AccountsService.prototype.getDepartments = function () {
        debugger;
        var getDepartmentsUrl = this.frndzzyUrl + "?action=get_departments";
        return this.http.post(getDepartmentsUrl, '')
            .map(this.extractData)
            .catch(this.handleError);
    };
    AccountsService.prototype.extractData = function (res) {
        debugger;
        var body = res.json();
        return body || {};
    };
    AccountsService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    AccountsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AccountsService);
    return AccountsService;
}());
exports.AccountsService = AccountsService;
//# sourceMappingURL=app.accounts.service.js.map