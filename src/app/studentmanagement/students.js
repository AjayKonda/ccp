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
var student_1 = require('./student');
var StudentsComponent = (function () {
    function StudentsComponent(service) {
        this.service = service;
        this.isLoading = false;
        this.isClicked = false;
        this.searchString = '';
        this.modelStudent = new student_1.Student(0, "", "", "");
    }
    StudentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('userInfo') != null && localStorage.getItem('userInfo') != undefined && localStorage.getItem('userInfo') != "undefined") {
            this.userData = JSON.parse(localStorage.getItem('userInfo'));
            console.log(this.userData);
        }
        this.isLoading = true;
        this.service.readStudents(this.userData.user_account_info.id, this.userData.college_info.id, "94")
            .subscribe(function (result) {
            debugger;
            console.log(result);
            _this.result = result.data;
            _this.tresult = result.data;
            ;
            _this.isLoading = false;
        }, function (error) { return _this.error = error; });
    };
    StudentsComponent.prototype.Search = function () {
        var title = this.searchString.trim();
        this.result = this.tresult.filter(function (t) { return t.user_name.toLowerCase().includes(title.toLowerCase()); });
    };
    StudentsComponent.prototype.updateModel = function (student) {
        debugger;
        this.modelStudent = student;
    };
    StudentsComponent.prototype.submitStudent = function () {
        var _this = this;
        jQuery("#btnSubmit1").html("Processing....").prop('disabled', true);
        this.service.submitStudent(this.userData.user_account_info.id, this.userData.college_info.id, "94", this.modelStudent.user_id, this.modelStudent.mobile_number, this.modelStudent.email, this.modelStudent.user_name)
            .subscribe(function (result) {
            debugger;
            console.log(result);
            _this.saved = result.data;
            jQuery("#btnSubmit1").html("Submit").prop('disabled', false);
        }, function (error) { return _this.error = error; });
    };
    StudentsComponent = __decorate([
        core_1.Component({
            selector: 'student-management',
            templateUrl: '../app/studentmanagement/students.html',
        }), 
        __metadata('design:paramtypes', [sm_service_1.SMService])
    ], StudentsComponent);
    return StudentsComponent;
}());
exports.StudentsComponent = StudentsComponent;
//# sourceMappingURL=students.js.map