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
var http_1 = require('@angular/http');
var notification_1 = require('./notification');
var NotificationComponent = (function () {
    function NotificationComponent(notificationService, http) {
        this.notificationService = notificationService;
        this.http = http;
        this.isLoading = false;
        this.model = new notification_1.Notification();
    }
    NotificationComponent.prototype.ngAfterViewInit = function () {
        $('#characterLeft').text('600 characters left');
        $('#message').keyup(function () {
            var max = 600;
            var len = $(this).val().length;
            if (len >= max) {
                $('#characterLeft').text('You have reached the limit');
                $('#characterLeft').addClass('red');
                $('#btnSubmit').addClass('disabled');
            }
            else {
                var ch = max - len;
                $('#characterLeft').text(ch + ' characters left');
                $('#btnSubmit').removeClass('disabled');
                $('#characterLeft').removeClass('red');
            }
        });
    };
    NotificationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.notificationService.getDepartments()
            .subscribe(function (result) {
            console.log(result);
            _this.result = result.data;
            _this.isLoading = false;
        }, function (error) { return _this.error = error; });
        if (localStorage.getItem('userInfo') != null && localStorage.getItem('userInfo') != undefined && localStorage.getItem('userInfo') != "undefined") {
            this.userData = JSON.parse(localStorage.getItem('userInfo'));
            console.log(this.userData);
        }
    };
    NotificationComponent.prototype.onSubmit = function (model) {
        var _this = this;
        jQuery("#btnSubmit").html("Sending....").prop('disabled', true);
        console.log(model);
        model.account_id = this.userData.user_account_info.account_id;
        model.role_id = this.userData.access_permission_info.role_id;
        model.college_id = this.userData.college_info.id;
        model.file_url = '';
        model.send_option = 1;
        this.notificationService.sendNotification(model)
            .subscribe(function (result) {
            _this.result = result.data;
            _this.resetModel();
            jQuery("#btnSubmit").html("Send").prop('disabled', false);
        }, function (error) { return _this.error = error; });
    };
    NotificationComponent.prototype.resetModel = function () {
        this.model.send_option = 1;
        this.model.dept_id = 0;
        this.model.year = 0;
        this.model.title = '';
        this.model.message = '';
        this.model.priority = 0;
        this.model.action_required = 0;
        this.model.action_question = '';
    };
    NotificationComponent = __decorate([
        core_1.Component({
            selector: 'notification',
            templateUrl: '../app/notifications/app.notifications.html',
        }), 
        __metadata('design:paramtypes', [app_notifications_service_1.NotificationService, http_1.Http])
    ], NotificationComponent);
    return NotificationComponent;
}());
exports.NotificationComponent = NotificationComponent;
//# sourceMappingURL=app.notifications.js.map