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
var app_workshop_service_1 = require('./app.workshop.service');
var http_1 = require('@angular/http');
var WorkshopsComponent = (function () {
    function WorkshopsComponent(workshopService, http) {
        this.workshopService = workshopService;
        this.http = http;
        this.isLoading = false;
        this.searchString = '';
    }
    WorkshopsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.workshopService.readWorkshopReqs("51")
            .subscribe(function (result) {
            console.log(result);
            _this.result = result.data;
            _this.tresult = result.data;
            _this.isLoading = false;
        }, function (error) { return _this.error = error; });
    };
    WorkshopsComponent.prototype.Search = function () {
        var title = this.searchString.trim();
        debugger;
        this.result = this.tresult.filter(function (t) { return t.title.toLowerCase().includes(title.toLowerCase()); });
    };
    WorkshopsComponent = __decorate([
        core_1.Component({
            selector: 'workshops',
            templateUrl: '../app/workshops/app.workshops.html',
        }), 
        __metadata('design:paramtypes', [app_workshop_service_1.WorkshopService, http_1.Http])
    ], WorkshopsComponent);
    return WorkshopsComponent;
}());
exports.WorkshopsComponent = WorkshopsComponent;
//# sourceMappingURL=app.workshops.js.map