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
var Event_1 = require('./Event');
var app_events_service_1 = require('./app.events.service');
var http_1 = require('@angular/http');
var CreateEventComponent = (function () {
    function CreateEventComponent(eventsService, http) {
        this.eventsService = eventsService;
        this.http = http;
        this.progress = 0;
        this.response = {};
        this.arr = [];
        this.model = new Event_1.Event(51, 1, 2, "test", "test", this.date, this.date, this.date, this.date, "test", "test", "test", this.arr, this.arr, ['test']);
        this.date = new Date();
    }
    CreateEventComponent.prototype.ngOnInit = function () {
        this.zone = new core_1.NgZone({ enableLongStackTrace: false });
        this.basicOptions = {
            url: 'https://api.frndzzy.com/webservices_cubix/college_portal_api.php?action=upload_my_file'
        };
    };
    CreateEventComponent.prototype.handleUpload = function (data) {
        var _this = this;
        debugger;
        this.zone.run(function () {
            _this.response = data;
            _this.progress = data.progress.percent / 100;
        });
    };
    CreateEventComponent.prototype.onSubmit = function (model) {
        var _this = this;
        debugger;
        model.images = [];
        model.files = [];
        this.eventsService.createEvents(model)
            .subscribe(function (result) {
            _this.result = result.data;
            alert(result.message);
        }, function (error) { return _this.error = error; });
    };
    CreateEventComponent = __decorate([
        core_1.Component({
            selector: 'create-events',
            templateUrl: '../app/events/app.createevent.html',
        }), 
        __metadata('design:paramtypes', [app_events_service_1.EventsService, http_1.Http])
    ], CreateEventComponent);
    return CreateEventComponent;
}());
exports.CreateEventComponent = CreateEventComponent;
//# sourceMappingURL=app.createevent.js.map