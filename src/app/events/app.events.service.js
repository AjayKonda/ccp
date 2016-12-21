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
var EventsService = (function () {
    function EventsService(http) {
        this.http = http;
        this.contactsUrl = 'https://api.frndzzy.com/webservices_cubix/college_portal_api.php';
    }
    EventsService.prototype.readEvents = function (college_id) {
        var completeUrl = this.contactsUrl + "?action=read_events";
        return this.http.post(completeUrl, JSON.stringify({ college_id: college_id }))
            .map(this.extractData)
            .catch(this.handleError);
    };
    EventsService.prototype.createEvents = function (event) {
        var completeUrl = this.contactsUrl + "?action=create_event";
        this.result = this.http.post(completeUrl, JSON.stringify(event))
            .map(this.extractData)
            .catch(this.handleError);
        return this.result;
    };
    EventsService.prototype.fileUpload = function (file) {
        debugger;
        var completeUrl = this.contactsUrl + "?action=upload_my_file";
        this.result = this.http.post(completeUrl, JSON.stringify(file))
            .map(this.extractData)
            .catch(this.handleError);
        return this.result;
    };
    EventsService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    EventsService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    EventsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EventsService);
    return EventsService;
}());
exports.EventsService = EventsService;
//# sourceMappingURL=app.events.service.js.map