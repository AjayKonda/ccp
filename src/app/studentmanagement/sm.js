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
var sm_service_1 = require('./sm.service');
var SMComponent = (function () {
    function SMComponent(service) {
        this.service = service;
        this.isUploading = false;
        this.isLoaded = false;
        this.isFinal = false;
        this.progress = 0;
        this.response = {};
    }
    SMComponent.prototype.ngOnInit = function () {
        this.zone = new core_1.NgZone({ enableLongStackTrace: false });
        this.basicOptions = {
            url: 'https://api.frndzzy.com/webservices_cubix/college_portal_api.php?action=upload_my_file',
            fieldReset: true,
            allowedExtensions: ['xls', 'xlsx']
        };
    };
    SMComponent.prototype.handleUpload = function (data) {
        var _this = this;
        jQuery("#uploader").hide();
        this.isUploading = true;
        this.isFinal = false;
        debugger;
        this.zone.run(function () {
            _this.isLoaded = false;
            if (data && data.response) {
                data = JSON.parse(data.response);
                _this.response = data;
                _this.apiurl = _this.response.api_url;
                _this.uploadNow(_this.apiurl);
            }
        });
    };
    SMComponent.prototype.uploadNow = function (apiurl) {
        var _this = this;
        if (localStorage.getItem('userInfo') != null && localStorage.getItem('userInfo') != undefined && localStorage.getItem('userInfo') != "undefined") {
            this.userData = JSON.parse(localStorage.getItem('userInfo'));
            console.log(this.userData);
        }
        this.service.uploadStudents(this.userData.user_account_info.id, this.userData.college_info.id, "94", apiurl)
            .subscribe(function (result) {
            debugger;
            console.log(result);
            _this.result = result.data;
            _this.isLoaded = true;
            _this.isUploading = false;
            jQuery("#uploader").show();
        }, function (error) { return _this.error = error; });
    };
    SMComponent.prototype.acknowledgeNow = function () {
        var _this = this;
        debugger;
        jQuery("#btnSubmit").html("Processing....").prop('disabled', true);
        this.service.acknowledgeStudents(this.userData.user_account_info.id, this.userData.college_info.id, "94", this.apiurl)
            .subscribe(function (result) {
            debugger;
            console.log(result);
            _this.finalResult = result;
            jQuery("#btnSubmit").html("Acknowledge").prop('disabled', false);
            _this.isFinal = true;
            _this.isLoaded = false;
            //alert(this.finalResult.message);
        }, function (error) { return _this.error = error; });
    };
    SMComponent = __decorate([
        core_1.Component({
            selector: 'student-management',
            templateUrl: '../app/studentmanagement/sm.html',
        }), 
        __metadata('design:paramtypes', [sm_service_1.SMService])
    ], SMComponent);
    return SMComponent;
}());
exports.SMComponent = SMComponent;
//# sourceMappingURL=sm.js.map