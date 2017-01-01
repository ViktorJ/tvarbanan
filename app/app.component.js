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
var data_service_1 = require('./data.service');
var AppComponent = (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
        this.departures = [];
        this.arrivals = [];
        this.customTrip = [];
        this.locations = [];
        this.destination = {};
        this.gullmars = '740021705';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.getTripData(this.gullmars).subscribe(function (data) {
            for (var _i = 0, _a = data.Trip; _i < _a.length; _i++) {
                var trip = _a[_i];
                _this.departures.push(trip.LegList.Leg[0].Origin);
                _this.arrivals.push(trip.LegList.Leg[0].Destination);
            }
        });
    };
    AppComponent.prototype.search = function (term) {
        var _this = this;
        this.dataService.searchLocation(term).subscribe(function (locations) { return _this.locations = locations.StopLocation; });
        if (this.locations) {
            this.destination = this.locations[0];
        }
    };
    AppComponent.prototype.calcTrip = function (des) {
        var _this = this;
        this.dataService.getTripData(des).subscribe(function (data) { return _this.customTrip = data.Trip[0].LegList.Leg; });
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.component.html',
            providers: [data_service_1.DataService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map