(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\n  overflow-x: hidden;\n  max-width: 100% !important;\n}\n\nimg {\n  position:absolute;\n  position: relative;\n  width:100%;\n  height: 500px;\n  z-index: 0;\n}\n\nh1 {\n  position: absolute;\n  top: 300px;\n  text-align: center;\n  color: white;\n  z-index: 1;\n  font-size: 70px;\n}\n\nh2{\n  margin: 20px;\n  color: #5AB9EA;\n  font-size: 35px;\n}\n\np{\n  margin: 0 50px;\n  font-size: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFVBQVU7RUFDVixlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9hYm91dC11cy9hYm91dC11cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2e1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG5pbWcge1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDoxMDAlO1xuICBoZWlnaHQ6IDUwMHB4O1xuICB6LWluZGV4OiAwO1xufVxuXG5oMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHotaW5kZXg6IDE7XG4gIGZvbnQtc2l6ZTogNzBweDtcbn1cbmgye1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiAjNUFCOUVBO1xuICBmb250LXNpemU6IDM1cHg7XG59XG5we1xuICBtYXJnaW46IDAgNTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <img src=\"/assets/hackathonTeam.jpg\" alt=\":(\">\n    <h1 class=\"w-100\"> - About Us - </h1>\n</div>\n\n<div>\n  <h2 class=\"text-center\">Our Inspiration</h2>\n  <p>\n    We are a group of students from Cooper Union inspired by a friend who lost his personal belongings on the MTA. We believe in a system that promotes good behavior and wanted to come up with a more effective system than the traditional lost and found or the police. Itmine is a system that we created so that if someone stumbles upon lost belongings and returns it back to its rightful owner, he or she will be rewarded for their actions.\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/address-form/address-form.component.css":
/*!*********************************************************!*\
  !*** ./src/app/address-form/address-form.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHJlc3MtZm9ybS9hZGRyZXNzLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/address-form/address-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/address-form/address-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='card mb-3' >\n  <div class='card-header' style='height: 10em'>\n    <img [src]='addressMap'>\n  </div>\n  <div class='card-body'>\n    <div class='form-group'>\n      <label class='d-block'>\n        Address Line 1\n        <input class='form-control' type='text' [(ngModel)]='addressLine1' (change)='onAddressChanged()'>\n      </label>\n    </div>\n    <div class='form-row'>\n      <div class='form-group col-12 col-md-8'>\n        <label class='d-block'>\n          Address Line 2\n          <input class='form-control' type='text' [(ngModel)]='addressLine2' (change)='onAddressChanged()'>\n        </label>\n      </div>\n      <div class='form-group col-12 col-md-4'>\n        <label class='d-block'>\n          Country\n          <input class='form-control' type='text' disabled [(ngModel)]='countryCode' (change)='onAddressChanged()'>\n        </label>\n      </div>\n    </div>\n    <div class='form-group form-row'>\n      <div class='col-12 col-md-6'>\n        <label class='d-block'>\n          City / Locality\n          <input class='form-control' type='text' [(ngModel)]='cityLocality' (change)='onAddressChanged()'>\n        </label>\n      </div>\n      <div class='form-group col-12 col-md-4'>\n        <label class='d-block'>\n          State / Province\n          <input class='form-control' type='text' [(ngModel)]='stateProvince' (change)='onAddressChanged()'>\n        </label>\n      </div>\n      <div class='form-group col-12 col-md-2'>\n        <label class='d-block'>\n          Postal Code\n          <input class='form-control' type='text' [(ngModel)]='postalCode' (change)='onAddressChanged()'>\n        </label>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/address-form/address-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/address-form/address-form.component.ts ***!
  \********************************************************/
/*! exports provided: AddressFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressFormComponent", function() { return AddressFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server.service */ "./src/app/server.service.ts");



var AddressFormComponent = /** @class */ (function () {
    function AddressFormComponent(server) {
        this.server = server;
        this.countryCode = 'US';
        this.addressChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AddressFormComponent.prototype.onAddressChanged = function () {
        this.addressChange.emit({
            addressLine1: this.addressLine1,
            addressLine2: this.addressLine2,
            cityLocality: this.cityLocality,
            stateProvince: this.stateProvince,
            postalCode: this.postalCode,
            countryCode: this.countryCode
        });
        this.validateAddress();
    };
    AddressFormComponent.prototype.validateAddress = function () {
        var _this = this;
        this.server.validateAddress({
            addressLine1: this.addressLine1,
            addressLine2: this.addressLine2,
            cityLocality: this.cityLocality,
            stateProvince: this.stateProvince,
            postalCode: this.postalCode,
            countryCode: this.countryCode
        })
            .then(function (response) {
            _this.addressLine1 = response.additionalData.address_line1;
            // this.addressLine2 = response.additionalData.address_line2;
            _this.cityLocality = response.additionalData.city_locality;
            _this.stateProvince = response.additionalData.state_province;
            _this.postalCode = response.additionalData.postal_code;
            _this.countryCode = response.additionalData.country_code;
        })
            .catch(function (err) { return console.error(err); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddressFormComponent.prototype, "address", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddressFormComponent.prototype, "addressChange", void 0);
    AddressFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-address-form',
            template: __webpack_require__(/*! ./address-form.component.html */ "./src/app/address-form/address-form.component.html"),
            styles: [__webpack_require__(/*! ./address-form.component.css */ "./src/app/address-form/address-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"]])
    ], AddressFormComponent);
    return AddressFormComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authorize_authorize_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authorize/authorize.component */ "./src/app/authorize/authorize.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _trackers_trackers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trackers/trackers.component */ "./src/app/trackers/trackers.component.ts");
/* harmony import */ var _track_track_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./track/track.component */ "./src/app/track/track.component.ts");
/* harmony import */ var _return_return_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./return/return.component */ "./src/app/return/return.component.ts");
/* harmony import */ var _hiw_hiw_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hiw/hiw.component */ "./src/app/hiw/hiw.component.ts");












var routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"] },
    { path: 'about', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__["AboutUsComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
    { path: 'hiw', component: _hiw_hiw_component__WEBPACK_IMPORTED_MODULE_11__["HiwComponent"] },
    { path: 'trackers', component: _trackers_trackers_component__WEBPACK_IMPORTED_MODULE_8__["TrackersComponent"] },
    { path: 'track', component: _track_track_component__WEBPACK_IMPORTED_MODULE_9__["TrackComponent"] },
    { path: 'return', component: _return_return_component__WEBPACK_IMPORTED_MODULE_10__["ReturnComponent"] },
    { path: 'auth', component: _authorize_authorize_component__WEBPACK_IMPORTED_MODULE_3__["AuthorizeComponent"] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\n  --dark: #5680E9;\n  --light: #84CEEB;\n  --bright: #5AB9EA;\n  --pale: #C1C8E4;\n  --contrast: #8860D0;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIC0tZGFyazogIzU2ODBFOTtcbiAgLS1saWdodDogIzg0Q0VFQjtcbiAgLS1icmlnaHQ6ICM1QUI5RUE7XG4gIC0tcGFsZTogI0MxQzhFNDtcbiAgLS1jb250cmFzdDogIzg4NjBEMDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'itmine-client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _authorize_authorize_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authorize/authorize.component */ "./src/app/authorize/authorize.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _track_track_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./track/track.component */ "./src/app/track/track.component.ts");
/* harmony import */ var _return_return_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./return/return.component */ "./src/app/return/return.component.ts");
/* harmony import */ var _trackers_trackers_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./trackers/trackers.component */ "./src/app/trackers/trackers.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _address_form_address_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./address-form/address-form.component */ "./src/app/address-form/address-form.component.ts");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./server.service */ "./src/app/server.service.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _hiw_hiw_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hiw/hiw.component */ "./src/app/hiw/hiw.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _authorize_authorize_component__WEBPACK_IMPORTED_MODULE_4__["AuthorizeComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_8__["AboutUsComponent"],
                _track_track_component__WEBPACK_IMPORTED_MODULE_9__["TrackComponent"],
                _return_return_component__WEBPACK_IMPORTED_MODULE_10__["ReturnComponent"],
                _trackers_trackers_component__WEBPACK_IMPORTED_MODULE_11__["TrackersComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
                _address_form_address_form_component__WEBPACK_IMPORTED_MODULE_14__["AddressFormComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_16__["NavComponent"],
                _hiw_hiw_component__WEBPACK_IMPORTED_MODULE_17__["HiwComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"]
            ],
            providers: [_server_service__WEBPACK_IMPORTED_MODULE_15__["ServerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authorize/authorize.component.css":
/*!***************************************************!*\
  !*** ./src/app/authorize/authorize.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhvcml6ZS9hdXRob3JpemUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/authorize/authorize.component.html":
/*!****************************************************!*\
  !*** ./src/app/authorize/authorize.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='jumbotron jumbotron-fluid'>\n  <div class='container'>\n    <div class='card'>\n      <div class='card-body'>\n        <div class='form-row'>\n          <div class='form-group col-12 col-md-6'>\n            <label class='d-block'>\n              Email\n              <input class='form-control' type='email' [(ngModel)]='userEmail'>\n            </label>\n          </div>\n          <div class='form-group col-12 col-md-6'>\n            <label class='d-block'>\n              Password\n              <input class='form-control' type='password' [(ngModel)]='userPassword'>\n            </label>\n          </div>\n        </div>\n        <div class='collapse' id='toggleSignup'>\n          <div class='form-row'>\n            <div class='form-group col-12 col-md-6'>\n              <label class='d-block'>\n                Name\n                <input class='form-control' type='text' [(ngModel)]='userName'>\n              </label>\n            </div>\n            <div class='form-group col-12 col-md-6'>\n              <label class='d-block'>\n                Phone\n                <input class='form-control' type='tel' [(ngModel)]='userPhone'>\n              </label>\n            </div>\n          </div>\n          <div class='form-row'>\n            <div class='form-group col-12'>\n              <label class='d-block'>\n                Company Name\n                <input class='form-control' type='text' [(ngModel)]='companyName'>\n              </label>\n            </div>\n          </div>\n          <app-address-form [(address)]='address'></app-address-form>\n        </div>\n        <div class='form-group'>\n          <button class='btn btn-outline-primary mb-3' type='submit' (click)='signInOut ? signUp() : signIn()'>{{ this.signInOut ? 'Sign up' : 'Sign in' }}</button>\n          <small class='form-text text-muted'>{{ this.signInOut ? 'Not signed up?' : 'Signed up already?' }} <a class='' data-toggle='collapse' href='#toggleSignup' (click)='toggleSignInOut()'>{{ this.signInOut ? 'Sign in' : 'Sign up' }}</a>.</small>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/authorize/authorize.component.ts":
/*!**************************************************!*\
  !*** ./src/app/authorize/authorize.component.ts ***!
  \**************************************************/
/*! exports provided: AuthorizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizeComponent", function() { return AuthorizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthorizeComponent = /** @class */ (function () {
    function AuthorizeComponent(server, router) {
        this.server = server;
        this.router = router;
        this.address = {
            addressLine1: '',
            addressLine2: '',
            cityLocality: '',
            stateProvince: '',
            postalCode: '',
            countryCode: 'US'
        };
        this.signInOut = false;
    }
    AuthorizeComponent.prototype.ngOnInit = function () {
    };
    AuthorizeComponent.prototype.signIn = function () {
        var _this = this;
        this.server.signIn(this.userEmail, this.userPassword)
            .then(function (response) {
            console.log('successfully signed in');
            _this.server.getUserDetails();
            _this.router.navigateByUrl('/');
        })
            .catch(function (err) {
            console.error('Error signing in: ' + err.errorMessage);
        });
    };
    AuthorizeComponent.prototype.signUp = function () {
        var _this = this;
        this.server.signUp(this.userEmail, this.userPassword, this.userName, this.userPhone, this.address, this.companyName)
            .then(function (response) {
            console.log('successfully signed up');
            _this.server.getUserDetails();
            _this.router.navigateByUrl('/');
        })
            .catch(function (err) {
            console.error('Error signing up: ' + err.errorMessage);
        });
    };
    AuthorizeComponent.prototype.toggleSignInOut = function () {
        this.signInOut = !this.signInOut;
    };
    AuthorizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-authorize',
            template: __webpack_require__(/*! ./authorize.component.html */ "./src/app/authorize/authorize.component.html"),
            styles: [__webpack_require__(/*! ./authorize.component.css */ "./src/app/authorize/authorize.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthorizeComponent);
    return AuthorizeComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"column\"> <img id=\"bq1\" src=\"/assets/bqcode.jpg\" alt=\"sad\"> </div>\n  <div class=\"column\"> <img id=\"bq2\" src=\"/assets/bqcode.jpg\" alt=\"sad\"> </div>\n  <div class=\"column\"> <img id=\"bq3\" src=\"/assets/bqcode.jpg\" alt=\"sad\"> </div>\n  <div class=\"column\"> <img id=\"bq4\" src=\"/assets/bqcode.jpg\" alt=\"sad\"> </div>\n</div>\n\n<div>\n  <h2 class=\"text-center\">Frequently Asked Questions</h2>\n  <ul>\n    <li><h3>How do I track my package after the finder sends it to the post office?</h3></li>\n    <li><p></p></li>\n    <li><h3>What if it is easier and faster to just return the lost item to the person directly? (as in if the person who lost the item is around the area or lives close by)</h3></li>\n    <li><p></p></li>\n    <li><h3>What happens to the items that are not picked up?</h3></li>\n    <li><p></p></li>\n    <li><h3>How do I know that the item is returned in the condition that it was found in?</h3></li>\n    <li><p></p></li>\n    <li><h3>What happens if the QR code is misplaced from the item? </h3></li>\n    <li><p></p></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/hiw/hiw.component.css":
/*!***************************************!*\
  !*** ./src/app/hiw/hiw.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n margin: 0 auto;\n}\nimg {\n  width: 300px;\n  height: 300px;\n}\nh1 {\n  position: absolute;\n  top: 200px;\n  text-align: center;\n  color: black;\n  z-index: 1;\n  font-size: 70px;\n}\nol li {\n  font-size: 25px;\n}\nh2{\n  margin: 20px;\n  color: #5AB9EA;\n  font-size: 35px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGl3L2hpdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2hpdy9oaXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdiB7XG4gbWFyZ2luOiAwIGF1dG87XG59XG5pbWcge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMzAwcHg7XG59XG5cbmgxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiA3MHB4O1xufVxub2wgbGkge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbmgye1xuICBtYXJnaW46IDIwcHg7XG4gIGNvbG9yOiAjNUFCOUVBO1xuICBmb250LXNpemU6IDM1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/hiw/hiw.component.html":
/*!****************************************!*\
  !*** ./src/app/hiw/hiw.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"column\"><img src=\"/assets/tshirt.jpg\" alt=\"sad\"> </div>\n    <div class=\"column\"><img src=\"/assets/bear trap.jpg\" alt=\"sad\"> </div>\n    <div class=\"column\"><img src=\"/assets/ID.jpg\" alt=\"sad\"> </div>\n    <div class=\"column\"><img src=\"/assets/keys.jpg\" alt=\"sad\"> </div>\n    <h1 class=\"w-100\"> - How It Works - </h1>\n</div>\n\n<div></div>\n  <h2 class=\"text-center\">The Affordable Boomerang process in getting what's yours right Back To You</h2>\n  <ol>\n    <li>Scan QR Code on Lost Item</li>\n    <li>Return lost item to a nearby supported office </li>\n    <li>Ship Package to owner using generated shipping label</li>\n    <li>Go on our website for a Reward</li>\n  </ol>\n</div>\n\n"

/***/ }),

/***/ "./src/app/hiw/hiw.component.ts":
/*!**************************************!*\
  !*** ./src/app/hiw/hiw.component.ts ***!
  \**************************************/
/*! exports provided: HiwComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiwComponent", function() { return HiwComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HiwComponent = /** @class */ (function () {
    function HiwComponent() {
    }
    HiwComponent.prototype.ngOnInit = function () {
    };
    HiwComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hiw',
            template: __webpack_require__(/*! ./hiw.component.html */ "./src/app/hiw/hiw.component.html"),
            styles: [__webpack_require__(/*! ./hiw.component.css */ "./src/app/hiw/hiw.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HiwComponent);
    return HiwComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n#header{\n  height: 100px;\n}\n\n.nav-pills {\n  margin-right: 40px;\n}\n\n#home {\n  color: #8860D0;\n}\n\nul.nav a:hover {\n  color: #8860D0 !important;\n}\nbutton {\n  position: fixed;\n  right: 50px;\n  color: white;\n  height: 60px;\n  width: 60px;\n  text-align: center;\n  background-color: #8860D0;\n  border-radius: 50%;\n  font-size: 30px;\n  transition: .5s;\n  margin-top: 20px;\n}\n\nbutton:hover{\n  background-color: #5680E9;\n  width: 70px;\n  height: 70px;\n  opacity: 0.5;\n}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW1DRSIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4jaGVhZGVye1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ubmF2LXBpbGxzIHtcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xufVxuXG4jaG9tZSB7XG4gIGNvbG9yOiAjODg2MEQwO1xufVxuXG51bC5uYXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjODg2MEQwICFpbXBvcnRhbnQ7XG59XG5idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiA1MHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg4NjBEMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRyYW5zaXRpb246IC41cztcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuYnV0dG9uOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTY4MEU5O1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBvcGFjaXR5OiAwLjU7XG59Ki9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<button className=\"topRightButton\" type=\"button\" onClick={this.doSomething()}>D</button>-->\n\n<nav class='navbar navbar-light navbar-expand-md bg-transparent'>\n  <button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbar-collapse'>\n    <span class='navbar-toggler-icon'></span>\n  </button>\n\n  <div class='collapse navbar-collapse' id='navbar-collapse'>\n    <ul class='navbar-nav mr-auto'>\n      <li class='nav-item active'>\n        <a class='nav-link' routerLink='/'>Home</a>\n      </li>\n    </ul>\n  </div>\n\n  <ul class='navbar-nav'>\n    <li class='nav-item'>\n      <a class='nav-link btn btn-info text-light' routerLink='/auth' *ngIf='!isSignedIn'>Get Protected</a>\n      <a class='nav-link' *ngIf='isSignedIn' (click)='signOut()'>Sign out</a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavComponent = /** @class */ (function () {
    function NavComponent(server, router) {
        this.server = server;
        this.router = router;
    }
    Object.defineProperty(NavComponent.prototype, "isSignedIn", {
        get: function () {
            return this.userDetails !== null;
        },
        enumerable: true,
        configurable: true
    });
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.server.getUserDetails();
        this.server.userDetails.subscribe(function (userDetailPush) {
            _this.userDetails = userDetailPush;
        });
    };
    NavComponent.prototype.signOut = function () {
        var _this = this;
        this.server.signOut()
            .then(function () {
            _this.server.getUserDetails();
            _this.router.navigateByUrl('/')
                .then(function () { });
        })
            .catch(function (err) { return console.error(err); });
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/return/return.component.css":
/*!*********************************************!*\
  !*** ./src/app/return/return.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JldHVybi9yZXR1cm4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/return/return.component.html":
/*!**********************************************!*\
  !*** ./src/app/return/return.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  return works!\n</p>\n"

/***/ }),

/***/ "./src/app/return/return.component.ts":
/*!********************************************!*\
  !*** ./src/app/return/return.component.ts ***!
  \********************************************/
/*! exports provided: ReturnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReturnComponent", function() { return ReturnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReturnComponent = /** @class */ (function () {
    function ReturnComponent() {
    }
    ReturnComponent.prototype.ngOnInit = function () {
    };
    ReturnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-return',
            template: __webpack_require__(/*! ./return.component.html */ "./src/app/return/return.component.html"),
            styles: [__webpack_require__(/*! ./return.component.css */ "./src/app/return/return.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReturnComponent);
    return ReturnComponent;
}());



/***/ }),

/***/ "./src/app/server.service.ts":
/*!***********************************!*\
  !*** ./src/app/server.service.ts ***!
  \***********************************/
/*! exports provided: ServerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerService", function() { return ServerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var ServerService = /** @class */ (function () {
    function ServerService() {
        // observable to track when signed in
        this.userDetails = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    // private function to run api call
    ServerService.prototype.makeApiCall = function (endpoint, data) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.addEventListener('load', function () {
                if (this.response.errorCode === 0) {
                    resolve(this.response);
                }
                else {
                    reject(this.response);
                }
            });
            xhr.addEventListener('error', function () {
                reject(this.response);
            });
            xhr.responseType = 'json';
            xhr.open('POST', '/api/' + endpoint, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));
        });
    };
    // sign in
    ServerService.prototype.signIn = function (email, password) {
        return this.makeApiCall('signin', {
            email: email,
            password: password
        });
    };
    // sign up
    ServerService.prototype.signUp = function (email, password, name, phone, address, companyName) {
        return this.makeApiCall('signup', {
            email: email,
            password: password,
            address: address,
            name: name,
            phone: phone,
            company: companyName
        });
    };
    // sign out
    ServerService.prototype.signOut = function () {
        return this.makeApiCall('signout', {});
    };
    // validate address using shipengine api
    ServerService.prototype.validateAddress = function (address) {
        return this.makeApiCall('validateaddress', address);
    };
    // check if signed in
    ServerService.prototype.getUserDetails = function () {
        var _this = this;
        this.makeApiCall('userdetails', {})
            .then(function (response) {
            _this.userDetails.next(response);
        })
            .catch(function (err) {
            // 4 is successful sign out
            if (err.errorCode === 4) {
                _this.userDetails.next(null);
            }
            else {
                console.error(err.errorMessage);
            }
        });
    };
    ServerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ServerService);
    return ServerService;
}());



/***/ }),

/***/ "./src/app/track/track.component.css":
/*!*******************************************!*\
  !*** ./src/app/track/track.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWNrL3RyYWNrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/track/track.component.html":
/*!********************************************!*\
  !*** ./src/app/track/track.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  track works!\n</p>\n"

/***/ }),

/***/ "./src/app/track/track.component.ts":
/*!******************************************!*\
  !*** ./src/app/track/track.component.ts ***!
  \******************************************/
/*! exports provided: TrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackComponent", function() { return TrackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TrackComponent = /** @class */ (function () {
    function TrackComponent() {
    }
    TrackComponent.prototype.ngOnInit = function () {
    };
    TrackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-track',
            template: __webpack_require__(/*! ./track.component.html */ "./src/app/track/track.component.html"),
            styles: [__webpack_require__(/*! ./track.component.css */ "./src/app/track/track.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TrackComponent);
    return TrackComponent;
}());



/***/ }),

/***/ "./src/app/trackers/trackers.component.css":
/*!*************************************************!*\
  !*** ./src/app/trackers/trackers.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWNrZXJzL3RyYWNrZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/trackers/trackers.component.html":
/*!**************************************************!*\
  !*** ./src/app/trackers/trackers.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  trackers works!\n</p>\n"

/***/ }),

/***/ "./src/app/trackers/trackers.component.ts":
/*!************************************************!*\
  !*** ./src/app/trackers/trackers.component.ts ***!
  \************************************************/
/*! exports provided: TrackersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackersComponent", function() { return TrackersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TrackersComponent = /** @class */ (function () {
    function TrackersComponent() {
    }
    TrackersComponent.prototype.ngOnInit = function () {
    };
    TrackersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trackers',
            template: __webpack_require__(/*! ./trackers.component.html */ "./src/app/trackers/trackers.component.html"),
            styles: [__webpack_require__(/*! ./trackers.component.css */ "./src/app/trackers/trackers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TrackersComponent);
    return TrackersComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<<<<<<< HEAD\n#TheBox{\n  max-width: 100% !important;\n  overflow-x: hidden;\n}\n#authenticate li{\n  margin-right: 30px;\n  display: inline-block;\n}\ndiv h1{\n  margin-top: -100px;\n}\n.display-2 {\n  color:  #5680E9;\n}\ndiv li{\n  text-decoration: none;\n}\n.btn-primary{\n  margin: 20px;\n  background-color: white;\n  color: #5AB9EA;\n  border-color: #84CEEB;\n}\nh5 {\n  text-align: center;\n  font-size: 30px;\n}\n.row {\n  margin-top: 30px;\n  padding-top: 30px;\n}\na {\n  text-decoration: none;\n  color: #5AB9EA;\n}\nimg {\n  height: 400px;\n  width: 400px;\n}\n=======\n>>>>>>> a1ac6c29f3f0b19f0f6757574a738135040e52c1\n#logo img {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  margin-top: -100px;\n}\n@-webkit-keyframes boomerang {\n  0%{\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n  50%{\n    -webkit-transform: rotate(720deg);\n            transform: rotate(720deg);\n  }\n  100%{\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n  }\n}\n@keyframes boomerang {\n  0%{\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n  50%{\n    -webkit-transform: rotate(720deg);\n            transform: rotate(720deg);\n  }\n  100%{\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n  }\n}\n#logo img:hover{\n  -webkit-animation-name: boomerang;\n          animation-name: boomerang;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n.card-img-top{\n  justify: middle;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBRUE7OztFQUdFLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7QUFDRjtBQVZBO0VBQ0U7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0FBQ0Y7QUFDQTtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsc0NBQThCO1VBQTlCLDhCQUE4QjtFQUM5Qiw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLDhDQUFzQztVQUF0QyxzQ0FBc0M7RUFDdEMsMkNBQW1DO1VBQW5DLG1DQUFtQztBQUNyQztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiPDw8PDw8PCBIRUFEXG4jVGhlQm94e1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuI2F1dGhlbnRpY2F0ZSBsaXtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbmRpdiBoMXtcbiAgbWFyZ2luLXRvcDogLTEwMHB4O1xufVxuXG4uZGlzcGxheS0yIHtcbiAgY29sb3I6ICAjNTY4MEU5O1xufVxuXG5kaXYgbGl7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmJ0bi1wcmltYXJ5e1xuICBtYXJnaW46IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzVBQjlFQTtcbiAgYm9yZGVyLWNvbG9yOiAjODRDRUVCO1xufVxuXG5oNSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ucm93IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjNUFCOUVBO1xufVxuXG5pbWcge1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogNDAwcHg7XG59XG5cbj09PT09PT1cbj4+Pj4+Pj4gYTFhYzZjMjlmM2YwYjE5ZjBmNjc1NzU3NGE3MzgxMzUwNDBlNTJjMVxuI2xvZ28gaW1nIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICBtYXJnaW4tdG9wOiAtMTAwcHg7XG59XG5cbkBrZXlmcmFtZXMgYm9vbWVyYW5nIHtcbiAgMCV7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB9XG4gIDUwJXtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg3MjBkZWcpO1xuICB9XG4gIDEwMCV7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxufVxuI2xvZ28gaW1nOmhvdmVye1xuICBhbmltYXRpb24tbmFtZTogYm9vbWVyYW5nO1xuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogNXM7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cblxuLmNhcmQtaW1nLXRvcHtcbiAganVzdGlmeTogbWlkZGxlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='jumbotron-fluid'>\n  <div class='container'>\n\n    <!-- header text -->\n    <div class=\"row d-flex justify-content-center\">\n      <h1 class=\"display-2 text-center\">ItMine</h1>\n    </div>\n\n    <!-- logo image -->\n    <div id=\"logo\" class=\"flex-column text-center row\">\n      <img src=\"/assets/ItMineLogo.jpeg\" class=\"rounded text-center d-block mx-auto\" alt=\"\" style='width: 15em;height:15em'>\n      <a routerLink=\"/trackers\">\n        <button type=\"button\" class=\"btn btn-primary\">It's Mine</button>\n      </a>\n    </div>\n\n  </div>\n</div>\n\n<div class='jumbotron jumbotron-fluid'>\n  <div class='container'>\n    <div class=\"row\">\n      <div class='col-12 col-md-6 col-xl-3'>\n        <a routerLink='/track'>\n          <div class=\"card mb-5\">\n            <img class=\"card-img-top\" alt=\"\" style='height: 10em;width: 100%;background-image:url(/assets/8.png);background-size:cover;background-position:center;'>\n            <div class=\"card-body\">\n              <p class='lead text-center'>Return Lost Items</p>\n            </div>\n          </div>\n        </a>\n      </div>\n\n      <div class='col-12 col-md-6 col-xl-3'>\n        <a routerLink='/hiw'>\n          <div class=\"card mb-5\">\n            <img class=\"card-img-top\" alt=\"\" style='height: 10em;width: 100%;background-image:url(/assets/5.png);background-size:cover;background-position:center;'>\n            <div class=\"card-body\">\n              <p class=\"lead text-center\">How It Works</p>\n            </div>\n          </div>\n        </a>\n      </div>\n\n      <div class='col-12 col-md-6 col-xl-3'>\n        <a routerLink='/about'>\n          <div class=\"card mb-5\">\n            <img class=\"card-img-top\" alt=\"\" style='height: 10em;width: 100%;background-image:url(/assets/6.png);background-size:cover;background-position:center;'>\n            <div class=\"card-body\">\n              <p class=\"lead text-center\">About Us</p>\n            </div>\n          </div>\n        </a>\n      </div>\n\n      <div class='col-12 col-md-6 col-xl-3'>\n        <a routerLink='/contact'>\n          <div class=\"card mb-5\">\n            <img class=\"card-img-top\" alt=\"\" style='height: 10em;width: 100%;background-image:url(/assets/7.png);background-size:cover;background-position:center;'>\n            <div class=\"card-body\">\n              <p class='lead text-center'>FAQs</p>\n            </div>\n          </div>\n        </a>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/amy/10b-erp/itmine-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map