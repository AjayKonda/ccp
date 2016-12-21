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
var app_notifications_service_1 = require('./app.notifications.service');
var NotificationHistoryComponent = (function () {
    function NotificationHistoryComponent(notificationService) {
        this.notificationService = notificationService;
        this.isLoading = false;
        this.isClicked = false;
        this.searchString = '';
    }
    NotificationHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        if (localStorage.getItem('userInfo') != null && localStorage.getItem('userInfo') != undefined && localStorage.getItem('userInfo') != "undefined") {
            this.userData = JSON.parse(localStorage.getItem('userInfo'));
            console.log(this.userData);
        }
        var body = JSON.stringify({ "college_id": this.userData.college_info.id });
        this.notificationService.fetchNotifications(body)
            .subscribe(function (result) {
            console.log(result);
            _this.result = result.notification_data;
            _this.tresult = result.notification_data;
            ;
            _this.isLoading = false;
        }, function (error) { return _this.error = error; });
    };
    NotificationHistoryComponent.prototype.changeDates = function () {
        if (jQuery("#change").html() == "CANCEL") {
            jQuery("#change").html("CHANGE");
            this.isClicked = false;
        }
        else if (jQuery("#change").html() == "CHANGE") {
            jQuery("#change").html("CANCEL");
            this.isClicked = true;
        }
    };
    NotificationHistoryComponent.prototype.getNotifications = function () {
        var _this = this;
        jQuery("#btnSubmit").html("Processing....").prop('disabled', true);
        this.isLoading = true;
        var body = JSON.stringify({ "college_id": this.userData.college_info.id });
        this.notificationService.fetchNotifications(body)
            .subscribe(function (result) {
            console.log(result);
            _this.result = result.notification_data;
            _this.tresult = result.notification_data;
            ;
            _this.isLoading = false;
            _this.changeDates();
            jQuery("#btnSubmit").html("Submit").prop('disabled', false);
        }, function (error) { return _this.error = error; });
    };
    NotificationHistoryComponent.prototype.Search = function () {
        var title = this.searchString.trim();
        debugger;
        this.result = this.tresult.filter(function (t) { return t.title.toLowerCase().includes(title.toLowerCase()); });
    };
    NotificationHistoryComponent = __decorate([
        core_1.Component({
            selector: 'notification-history',
            templateUrl: '../app/notifications/app.notificationhistory.html',
            providers: [app_notifications_service_1.NotificationService]
        }), 
        __metadata('design:paramtypes', [app_notifications_service_1.NotificationService])
    ], NotificationHistoryComponent);
    return NotificationHistoryComponent;
}());
exports.NotificationHistoryComponent = NotificationHistoryComponent;
//# sourceMappingURL=app.notificationhistory.js.map