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
var GuestLecture_1 = require('./GuestLecture');
var app_guestlectures_service_1 = require('./app.guestlectures.service');
var http_1 = require('@angular/http');
var CreateGuestLectureComponent = (function () {
    function CreateGuestLectureComponent(guestLectureService, http) {
        this.guestLectureService = guestLectureService;
        this.http = http;
        this.model = new GuestLecture_1.GuestLecture();
    }
    CreateGuestLectureComponent.prototype.onSubmit = function (model) {
        var _this = this;
        debugger;
        model.date_range = '2016-12-20 to 2016-12-20';
        this.guestLectureService.createGuestLectureReq(model)
            .subscribe(function (result) {
            _this.result = result.data;
            alert(result.message);
        }, function (error) { return _this.error = error; });
    };
    CreateGuestLectureComponent = __decorate([
        core_1.Component({
            selector: 'create-workshop',
            templateUrl: '../app/guestlectures/app.createguestlecture.html',
        }), 
        __metadata('design:paramtypes', [app_guestlectures_service_1.GuestLectureService, http_1.Http])
    ], CreateGuestLectureComponent);
    return CreateGuestLectureComponent;
}());
exports.CreateGuestLectureComponent = CreateGuestLectureComponent;
//# sourceMappingURL=app.createguestlecture.js.map