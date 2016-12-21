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
var app_guestlectures_service_1 = require('./app.guestlectures.service');
var http_1 = require('@angular/http');
var GuestLecturesComponent = (function () {
    function GuestLecturesComponent(guestLectureService, http) {
        this.guestLectureService = guestLectureService;
        this.http = http;
        this.isLoading = false;
        this.searchString = '';
    }
    GuestLecturesComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isBack = JSON.parse(localStorage.getItem('fromProfile'));
        debugger;
        if (isBack == true) {
            localStorage.setItem('fromProfile', 'false');
            this.result = JSON.parse(localStorage.getItem('GuestLectures'));
        }
        else {
            this.isLoading = true;
            this.guestLectureService.readGuestLectureReq(51)
                .subscribe(function (result) {
                console.log(result);
                _this.result = result.data;
                _this.tresult = result.data;
                console.log(result.data);
                localStorage.setItem('GuestLectures', JSON.stringify(_this.result));
                _this.isLoading = false;
            }, function (error) { return _this.error = error; });
        }
    };
    GuestLecturesComponent.prototype.Search = function () {
        var title = this.searchString.trim();
        debugger;
        this.result = this.tresult.filter(function (t) { return t.name.toLowerCase().includes(title.toLowerCase()); });
    };
    GuestLecturesComponent = __decorate([
        core_1.Component({
            selector: 'guest-lectures',
            templateUrl: '../app/guestlectures/app.guestlectures.html',
        }), 
        __metadata('design:paramtypes', [app_guestlectures_service_1.GuestLectureService, http_1.Http])
    ], GuestLecturesComponent);
    return GuestLecturesComponent;
}());
exports.GuestLecturesComponent = GuestLecturesComponent;
//# sourceMappingURL=app.guestlectures.js.map