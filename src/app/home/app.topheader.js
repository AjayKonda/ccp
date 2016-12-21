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
var TopHeaderComponent = (function () {
    function TopHeaderComponent(router) {
        this.router = router;
        this.isLoggedIn = false;
    }
    TopHeaderComponent.prototype.isActiveRoute = function (route) {
        return this.router.isActive(route, true);
    };
    TopHeaderComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('userInfo') != null && localStorage.getItem('userInfo') != undefined && localStorage.getItem('userInfo') != "undefined") {
            this.isLoggedIn = true;
        }
    };
    TopHeaderComponent.prototype.logout = function () {
        localStorage.removeItem('userInfo');
        this.isLoggedIn = false;
    };
    TopHeaderComponent.prototype.dashboard = function () {
        this.router.navigate(['/dashboard/landing']);
    };
    TopHeaderComponent = __decorate([
        core_1.Component({
            selector: 'top-header',
            templateUrl: '../app/home/app.topheader.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], TopHeaderComponent);
    return TopHeaderComponent;
}());
exports.TopHeaderComponent = TopHeaderComponent;
//# sourceMappingURL=app.topheader.js.map