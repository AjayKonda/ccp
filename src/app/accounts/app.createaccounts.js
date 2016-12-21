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
var Account_1 = require('./Account');
var app_accounts_service_1 = require('./app.accounts.service');
var http_1 = require('@angular/http');
var CreateAccountsComponent = (function () {
    function CreateAccountsComponent(accountsService, http) {
        this.accountsService = accountsService;
        this.http = http;
        this.model = new Account_1.Account();
        this.isLoading = false;
    }
    CreateAccountsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model.dept = 0;
        this.model.role_id = -1;
        this.isLoading = true;
        this.accountsService.getRoles()
            .subscribe(function (result) {
            console.log(result);
            _this.roles = result.data;
        }, function (error) { return _this.error = error; });
        this.accountsService.getDepartments()
            .subscribe(function (result) {
            console.log(result);
            _this.departments = result.data;
            _this.isLoading = false;
        }, function (error) { return _this.error = error; });
        if (localStorage.getItem('userInfo') != null && localStorage.getItem('userInfo') != undefined && localStorage.getItem('userInfo') != "undefined") {
            this.userData = JSON.parse(localStorage.getItem('userInfo'));
            console.log(this.userData);
        }
    };
    CreateAccountsComponent.prototype.onSubmit = function (model) {
        var _this = this;
        jQuery("#btnSubmit").html("Processing....").prop('disabled', true);
        console.log(model);
        model.college_id = this.userData.college_info.id;
        model.profile_pic = "https://3dprint.com/wp-content/uploads/2015/05/322.jpg";
        //var body = JSON.stringify(model);
        this.accountsService.createAccount(model)
            .subscribe(function (result) {
            _this.result = result;
            _this.resetModel();
            jQuery("#btnSubmit").html("Register").prop('disabled', false);
        }, function (error) { return _this.error = error; });
        console.log(this.result);
    };
    CreateAccountsComponent.prototype.resetModel = function () {
        this.model.role_id = -1;
        this.model.dept = -1;
        this.model.username = '';
        this.model.password = '';
        this.model.firstname = '';
        this.model.lastname = '';
        this.model.gender = '';
    };
    CreateAccountsComponent = __decorate([
        core_1.Component({
            selector: 'createaccounts',
            templateUrl: '../app/accounts/app.createaccounts.html'
        }), 
        __metadata('design:paramtypes', [app_accounts_service_1.AccountsService, http_1.Http])
    ], CreateAccountsComponent);
    return CreateAccountsComponent;
}());
exports.CreateAccountsComponent = CreateAccountsComponent;
//# sourceMappingURL=app.createaccounts.js.map