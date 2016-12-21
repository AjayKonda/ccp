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
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var app_guestlectures_service_1 = require('./app.guestlectures.service');
var GuestLecture_1 = require('./GuestLecture');
var TutorProfileComponent = (function () {
    function TutorProfileComponent(route, location, guestLectureService) {
        this.route = route;
        this.location = location;
        this.guestLectureService = guestLectureService;
        this.isLoading = false;
        this.isClicked = false;
        this.model = new GuestLecture_1.GuestLecture();
        this.guest_lecture_org_id = 0;
    }
    TutorProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.guest_lecture_org_id = id;
            _this.guestLectureService.readGuestLectureReqProfile(51, id)
                .subscribe(function (result) {
                _this.result = result.data[0];
                debugger;
                console.log(_this.result.name);
                _this.isLoading = false;
            }, function (error) { return _this.error = error; });
        });
        if (localStorage.getItem('userInfo') != null && localStorage.getItem('userInfo') != undefined && localStorage.getItem('userInfo') != "undefined") {
            this.userData = JSON.parse(localStorage.getItem('userInfo'));
            console.log(this.userData);
        }
    };
    TutorProfileComponent.prototype.changeDates = function () {
        this.isClicked = true;
    };
    TutorProfileComponent.prototype.goBack = function () {
        localStorage.setItem('fromProfile', 'true');
        this.location.back();
    };
    TutorProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        this.model.guest_lecture_org_id = this.guest_lecture_org_id;
        this.model.college_id = this.userData.college_info.id;
        this.model.date_range = '2016-12-20 to 2016-12-20';
        jQuery("#btnSubmit").html("Requesting....").prop('disabled', true);
        console.log(this.model);
        this.guestLectureService.createGuestLectureReq(this.model)
            .subscribe(function (result) {
            _this.result = result.data;
            //$('#myModal').modal('hide');
            jQuery("#btnSubmit").html("Send Request").prop('disabled', false);
            jQuery("#connect").prop('disabled', true);
        }, function (error) { return _this.error = error; });
    };
    TutorProfileComponent = __decorate([
        core_1.Component({
            selector: 'tutor-profile',
            templateUrl: '../app/guestlectures/app.tutorprofile.html',
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, common_1.Location, app_guestlectures_service_1.GuestLectureService])
    ], TutorProfileComponent);
    return TutorProfileComponent;
}());
exports.TutorProfileComponent = TutorProfileComponent;
//# sourceMappingURL=app.tutorprofile.js.map