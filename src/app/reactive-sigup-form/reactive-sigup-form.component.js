"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactiveSigupFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ReactiveSigupFormComponent = /** @class */ (function () {
    function ReactiveSigupFormComponent() {
        this.form = new forms_1.FormGroup({
            username: new forms_1.FormControl('', forms_1.Validators.required),
            password: new forms_1.FormControl('', forms_1.Validators.required)
        });
    }
    Object.defineProperty(ReactiveSigupFormComponent.prototype, "username", {
        get: function () {
            return this.form.get('username');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ReactiveSigupFormComponent.prototype, "password", {
        get: function () {
            return this.form.get('password');
        },
        enumerable: false,
        configurable: true
    });
    ReactiveSigupFormComponent = __decorate([
        core_1.Component({
            selector: 'app-reactive-sigup-form',
            templateUrl: './reactive-sigup-form.component.html',
            styleUrls: ['./reactive-sigup-form.component.css']
        })
    ], ReactiveSigupFormComponent);
    return ReactiveSigupFormComponent;
}());
exports.ReactiveSigupFormComponent = ReactiveSigupFormComponent;
