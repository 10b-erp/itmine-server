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
/* harmony import */ var _found_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./found/found.component */ "./src/app/found/found.component.ts");
/* harmony import */ var _return_return_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./return/return.component */ "./src/app/return/return.component.ts");
/* harmony import */ var _hiw_hiw_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hiw/hiw.component */ "./src/app/hiw/hiw.component.ts");












var routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"] },
    { path: 'about', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__["AboutUsComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
    { path: 'hiw', component: _hiw_hiw_component__WEBPACK_IMPORTED_MODULE_11__["HiwComponent"] },
    { path: 'trackers', component: _trackers_trackers_component__WEBPACK_IMPORTED_MODULE_8__["TrackersComponent"] },
    { path: 'found', component: _found_found_component__WEBPACK_IMPORTED_MODULE_9__["FoundComponent"] },
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

module.exports = ":root {\n  --dark: #5680E9;\n  --light: #84CEEB;\n  --bright: #5AB9EA;\n  --pale: #C1C8E4;\n  --contrast: #8860D0;\n}\n\ndiv{\n  font-family: \"Helvetica Neue\";\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gIC0tZGFyazogIzU2ODBFOTtcbiAgLS1saWdodDogIzg0Q0VFQjtcbiAgLS1icmlnaHQ6ICM1QUI5RUE7XG4gIC0tcGFsZTogI0MxQzhFNDtcbiAgLS1jb250cmFzdDogIzg4NjBEMDtcbn1cblxuZGl2e1xuICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiO1xufVxuIl19 */"

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
/* harmony import */ var _return_return_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./return/return.component */ "./src/app/return/return.component.ts");
/* harmony import */ var _trackers_trackers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./trackers/trackers.component */ "./src/app/trackers/trackers.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _address_form_address_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./address-form/address-form.component */ "./src/app/address-form/address-form.component.ts");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./server.service */ "./src/app/server.service.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _hiw_hiw_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./hiw/hiw.component */ "./src/app/hiw/hiw.component.ts");
/* harmony import */ var _found_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./found/found.component */ "./src/app/found/found.component.ts");


















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
                _found_found_component__WEBPACK_IMPORTED_MODULE_17__["FoundComponent"],
                _return_return_component__WEBPACK_IMPORTED_MODULE_9__["ReturnComponent"],
                _trackers_trackers_component__WEBPACK_IMPORTED_MODULE_10__["TrackersComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"],
                _address_form_address_form_component__WEBPACK_IMPORTED_MODULE_13__["AddressFormComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_15__["NavComponent"],
                _hiw_hiw_component__WEBPACK_IMPORTED_MODULE_16__["HiwComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
            ],
            providers: [_server_service__WEBPACK_IMPORTED_MODULE_14__["ServerService"]],
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

module.exports = "#bq2{\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n#bq3{\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n#bq4{\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n.column{\n  margin: 0 auto;\n}\nh2{\n  margin: 30px;\n  color: #5AB9EA;\n}\nul li {\n  list-style: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBd0I7VUFBeEIsd0JBQXdCO0FBQzFCO0FBQ0E7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYnEye1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG4jYnEze1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuI2JxNHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbn1cblxuLmNvbHVtbntcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmgye1xuICBtYXJnaW46IDMwcHg7XG4gIGNvbG9yOiAjNUFCOUVBO1xufVxuXG51bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4iXX0= */"

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

/***/ "./src/app/found/found.component.css":
/*!*******************************************!*\
  !*** ./src/app/found/found.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3{\n  margin-bottom: 20px;\n}\n\nol {\n  line-style-type:\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm91bmQvZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb3VuZC9mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDN7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbm9sIHtcbiAgbGluZS1zdHlsZS10eXBlOlxufVxuIl19 */"

/***/ }),

/***/ "./src/app/found/found.component.html":
/*!********************************************!*\
  !*** ./src/app/found/found.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='jumbotron jumbotron-fluid'>\n  <div class='container'>\n\n    <div class=\"alert alert-danger\" *ngIf=\"isInvalidSid\"><strong>Notice:</strong> The ID associated with this package is not valid.</div>\n\n    <!-- INSTRUCTIONS HERE -->\n  <h1>How to do good and get paid!</h1>\n    <h3>We are so glad you scanned this lost item. To get paid for helping the owner, follow these quick instructions</h3>\n    <ol>\n      <li>Take the lost item and head to the nearest UPS store</li>\n      <li>Enter weight of the package in ounces</li>\n    </ol>\n\n    <!-- enter weight -->\n    <div class=\"card mb-3\">\n      <div class=\"card-body\">\n\n        <div class=\"form-group\">\n          <label for=\"weightInput\">Weight</label>\n          <input type=\"number\" class=\"form-control\" aria-describedby=\"emailHelp\" placeholder=\"Enter weight\" id='weightInput' name='weightInput' [(ngModel)]=\"weight\">\n        </div>\n        <div class=\"form-group\">\n          <button type=\"button\" class=\"btn btn-info\" (click)=\"setWeight()\" [disabled]=\"isInvalidSid\">Set Weight</button>\n        </div>\n\n      </div>\n    </div>\n\n    <ol>\n      <li>Give the package to a UPS worker so that they can scan the shipping label</li>\n      <li>Once scanned, the owner will be notified and ItMine.com will gift you money</li>\n      <li>Enter your email and we will send you your reward once the package arrives at the owner's home</li>\n    </ol>\n    <h2>Thank you for protecting someone's valuables today</h2>\n\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"form-group\">\n          <label for=\"exampleInputEmail1\" [(ngModel)]=\"giftEmail\">Email address</label>\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" [disabled]=\"isInvalidSid\">\n          <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n        </div>\n        <button type=\"button\" class=\"btn btn-info\">Get Reward!</button>\n      </div>\n    </div>\n\n    <!-- SHIPPING LABEL WILL GO BELOW HERE -->\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/found/found.component.ts":
/*!******************************************!*\
  !*** ./src/app/found/found.component.ts ***!
  \******************************************/
/*! exports provided: FoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoundComponent", function() { return FoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server.service */ "./src/app/server.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FoundComponent = /** @class */ (function () {
    function FoundComponent(server, activatedRoute) {
        this.server = server;
        this.activatedRoute = activatedRoute;
        this.isInvalidSid = false;
        this.giftEmail = '';
    }
    FoundComponent.prototype.setWeight = function () {
        if (!this.isInvalidSid) {
            this.server.setPackageWeight(this.sid, this.weight)
                .then(function (response) {
                console.log(response.additionalData);
            })
                .catch(function (err) {
                console.log(err.errorMessage);
            });
        }
    };
    FoundComponent.prototype.setGiftEmail = function () {
        if (!this.isInvalidSid) {
            this.server.setPackageGiftEmail(this.sid, this.giftEmail);
        }
    };
    FoundComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            var sid = params['sid'];
            _this.sid = sid;
            _this.server.checkSid(sid)
                .then(function (response) {
                console.log(response);
            })
                .catch(function (err) {
                console.log(err);
                _this.isInvalidSid = true;
            });
        });
    };
    FoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-track',
            template: __webpack_require__(/*! ./found.component.html */ "./src/app/found/found.component.html"),
            styles: [__webpack_require__(/*! ./found.component.css */ "./src/app/found/found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], FoundComponent);
    return FoundComponent;
}());



/***/ }),

/***/ "./src/app/hiw/hiw.component.css":
/*!***************************************!*\
  !*** ./src/app/hiw/hiw.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n margin: 0 auto;\n}\nimg {\n  width: 160px;\n  height: 160px;\n}\nh1 {\n  position: absolute;\n  top: 50px;\n  text-align: center;\n  color: black;\n  z-index: 1;\n  font-size: 70px;\n}\nol li {\n  font-size: 25px;\n  margin-top:20px;\n}\nh2{\n  margin: 20px;\n  color: #5AB9EA;\n  font-size: 35px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGl3L2hpdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9oaXcvaGl3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuIG1hcmdpbjogMCBhdXRvO1xufVxuaW1nIHtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDE2MHB4O1xufVxuXG5oMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjaztcbiAgei1pbmRleDogMTtcbiAgZm9udC1zaXplOiA3MHB4O1xufVxub2wgbGkge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi10b3A6MjBweDtcbn1cblxuaDJ7XG4gIG1hcmdpbjogMjBweDtcbiAgY29sb3I6ICM1QUI5RUE7XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/hiw/hiw.component.html":
/*!****************************************!*\
  !*** ./src/app/hiw/hiw.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"row\">\n    <div class=\"column\"><img src=\"/assets/ID.jpg\" alt=\"sad\"> </div>\n    <div class=\"column\"><img src=\"/assets/keys.jpg\" alt=\"sad\"> </div>\n    <h1 class=\"w-100\"> - How It Works - </h1>\n</div>\n\n<div></div>\n  <h2 class=\"text-center\">Quick and Easy with a Reward</h2>\n  <ol>\n    <li>Scan QR Code on Lost Item</li>\n    <li>Return lost item to a nearby supported office </li>\n    <li>Ship Package to owner using generated shipping label</li>\n    <li>Get Your Reward</li>\n  </ol>\n</div>\n\n\n"

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
        this.packagesObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.baseUrl = 'https://itmine.herokuapp.com/';
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
    // get user's packages
    ServerService.prototype.getPackages = function () {
        var _this = this;
        this.makeApiCall('packages', {})
            .then(function (response) { return _this.packagesObservable.next(response); })
            .catch(function (err) { return console.error(err); });
    };
    ServerService.prototype.getPackagesObservable = function () {
        return this.packagesObservable;
    };
    // order new pps
    ServerService.prototype.orderPPs = function (numPPs) {
        return this.makeApiCall('orderpps', { n: numPPs });
    };
    // check if sid exists
    ServerService.prototype.checkSid = function (sid) {
        return this.makeApiCall('checksid', { sid: sid });
    };
    // set package data
    ServerService.prototype.setPackageGiftEmail = function (sid, giftEmail) {
        return this.makeApiCall('setpackagegiftemail', { sid: sid, giftEmail: giftEmail });
    };
    ServerService.prototype.setPackageWeight = function (sid, weight) {
        return this.makeApiCall('setpackageweight', { sid: sid, weight: weight });
    };
    ServerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ServerService);
    return ServerService;
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

module.exports = "<div class='jumbotron-fluid'>\n  <div class='container'>\n\n    <h1>Package management</h1>\n\n    <!-- order a package -->\n    <div class='card my-5'>\n      <div class='card-header'>\n        <label for='numOrders' class='mb-0'>Order package protection code</label>\n      </div>\n      <div class='card-body'>\n        <div class='input-group'>\n          <input class='form-control' id='numOrders' type='number' placeholder='Quantity' [(ngModel)]='numOrders' min='0' max='10' step='1'>\n          <div class='input-group-append'>\n            <button class='btn btn-outline-secondary' (click)='orderPPs()'>Order</button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- manage packages -->\n    <div class='card'>\n      <div class='card-header'>\n        <label class='mb-0'>List of purchased package protection codes</label>\n      </div>\n      <div class='card-body overflow-auto' style='max-height: 30em'>\n        <table class='table table-hover'>\n          <thead>\n          <tr>\n            <th>QR Code</th>\n            <th>Purchase Date</th>\n            <th>Tracking Info</th>\n            <th>Deactivate</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor='let pack of packages'>\n            <td><img [src]='pack.qrCode'></td>\n            <td>{{ pack.purchaseDate | date:'medium' }}</td>\n            <td>{{ pack.trackingInfo || 'N/A' }}</td>\n            <td><button class='btn btn-danger' type='button'>×</button></td>\n          </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n\n      </div>\n    </div>\n\n"

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
/* harmony import */ var _server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server.service */ "./src/app/server.service.ts");



var TrackersComponent = /** @class */ (function () {
    function TrackersComponent(server) {
        this.server = server;
        this.numOrders = 0;
    }
    TrackersComponent.prototype.orderPPs = function () {
        var _this = this;
        this.server.orderPPs(this.numOrders)
            .then(function () {
            _this.server.getPackages();
            _this.numOrders = 0;
        })
            .catch(function (err) { return console.error(err); });
    };
    TrackersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.server.getPackagesObservable().subscribe(function (update) {
            if (update !== null) {
                _this.packages = update.additionalData;
                _this.packages.forEach(function (pack) {
                    var data = _this.server.baseUrl + '/found?sid=' + pack._id.toString();
                    pack.qrCode = 'https://chart.googleapis.com/chart?cht=qr&chs=128x128&chl=' + encodeURI(data);
                });
            }
        });
        this.server.getPackages();
    };
    TrackersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-trackers',
            template: __webpack_require__(/*! ./trackers.component.html */ "./src/app/trackers/trackers.component.html"),
            styles: [__webpack_require__(/*! ./trackers.component.css */ "./src/app/trackers/trackers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_server_service__WEBPACK_IMPORTED_MODULE_2__["ServerService"]])
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

module.exports = "\n#TheBox{\n  max-width: 100% !important;\n  overflow-x: hidden;\n}\n#authenticate li{\n  margin-right: 30px;\n  display: inline-block;\n}\ndiv h1{\n  margin-top: -100px;\n}\n.display-2 {\n  color:  #5680E9;\n}\ndiv li{\n  text-decoration: none;\n}\n.btn-primary{\n  margin: 20px;\n  background-color: white;\n  color: #5AB9EA;\n  border-color: #84CEEB;\n}\nh5 {\n  text-align: center;\n  font-size: 30px;\n}\n.row {\n  margin-top: 30px;\n  padding-top: 30px;\n}\na {\n  text-decoration: none;\n  color: #5AB9EA;\n}\nimg {\n  height: 400px;\n  width: 400px;\n}\n=======\n>>>>>>> a1ac6c29f3f0b19f0f6757574a738135040e52c1\n#logo img {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  margin-top: -100px;\n}\n@-webkit-keyframes boomerang {\n  0%{\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n  50%{\n    -webkit-transform: rotate(720deg);\n            transform: rotate(720deg);\n  }\n  100%{\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n  }\n}\n@keyframes boomerang {\n  0%{\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n  }\n  50%{\n    -webkit-transform: rotate(720deg);\n            transform: rotate(720deg);\n  }\n  100%{\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n  }\n}\n#logo img:hover{\n  -webkit-animation-name: boomerang;\n          animation-name: boomerang;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n.card-img-top{\n  justify: middle;\n}\n@-webkit-keyframes grow {\n    0%{\n      -webkit-transform: scale(1.0);\n              transform: scale(1.0);\n    }\n    100%{\n      -webkit-transform: scale(1.1);\n              transform: scale(1.1);\n    }\n}\n@keyframes grow {\n    0%{\n      -webkit-transform: scale(1.0);\n              transform: scale(1.0);\n    }\n    100%{\n      -webkit-transform: scale(1.1);\n              transform: scale(1.1);\n    }\n}\n.card:hover{\n  -webkit-animation-name: grow;\n          animation-name: grow;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n  -webkit-animation-duration: .2s;\n          animation-duration: .2s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkO0FBRUE7OztFQUdFLGdDQUF3QjtVQUF4Qix3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRTtJQUNFLGdDQUF3QjtZQUF4Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7RUFDQTtJQUNFLGlDQUF5QjtZQUF6Qix5QkFBeUI7RUFDM0I7QUFDRjtBQVZBO0VBQ0U7SUFDRSxnQ0FBd0I7WUFBeEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxpQ0FBeUI7WUFBekIseUJBQXlCO0VBQzNCO0FBQ0Y7QUFDQTtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsc0NBQThCO1VBQTlCLDhCQUE4QjtFQUM5Qiw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLDhDQUFzQztVQUF0QyxzQ0FBc0M7RUFDdEMsMkNBQW1DO1VBQW5DLG1DQUFtQztBQUNyQztBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0lBQ0k7TUFDRSw2QkFBcUI7Y0FBckIscUJBQXFCO0lBQ3ZCO0lBQ0E7TUFDRSw2QkFBcUI7Y0FBckIscUJBQXFCO0lBQ3ZCO0FBQ0o7QUFQQTtJQUNJO01BQ0UsNkJBQXFCO2NBQXJCLHFCQUFxQjtJQUN2QjtJQUNBO01BQ0UsNkJBQXFCO2NBQXJCLHFCQUFxQjtJQUN2QjtBQUNKO0FBQ0E7RUFDRSw0QkFBb0I7VUFBcEIsb0JBQW9CO0VBQ3BCLDhDQUFzQztVQUF0QyxzQ0FBc0M7RUFDdEMsK0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixxQ0FBNkI7VUFBN0IsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNUaGVCb3h7XG4gIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG4jYXV0aGVudGljYXRlIGxpe1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuZGl2IGgxe1xuICBtYXJnaW4tdG9wOiAtMTAwcHg7XG59XG5cbi5kaXNwbGF5LTIge1xuICBjb2xvcjogICM1NjgwRTk7XG59XG5cbmRpdiBsaXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uYnRuLXByaW1hcnl7XG4gIG1hcmdpbjogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjNUFCOUVBO1xuICBib3JkZXItY29sb3I6ICM4NENFRUI7XG59XG5cbmg1IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHg7XG59XG5cbi5yb3cge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMzBweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICM1QUI5RUE7XG59XG5cbmltZyB7XG4gIGhlaWdodDogNDAwcHg7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuPT09PT09PVxuPj4+Pj4+PiBhMWFjNmMyOWYzZjBiMTlmMGY2NzU3NTc0YTczODEzNTA0MGU1MmMxXG4jbG9nbyBpbWcge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIG1hcmdpbi10b3A6IC0xMDBweDtcbn1cblxuQGtleWZyYW1lcyBib29tZXJhbmcge1xuICAwJXtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbiAgNTAle1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDcyMGRlZyk7XG4gIH1cbiAgMTAwJXtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICB9XG59XG4jbG9nbyBpbWc6aG92ZXJ7XG4gIGFuaW1hdGlvbi1uYW1lOiBib29tZXJhbmc7XG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xufVxuXG4uY2FyZC1pbWctdG9we1xuICBqdXN0aWZ5OiBtaWRkbGU7XG59XG5cbkBrZXlmcmFtZXMgZ3JvdyB7XG4gICAgMCV7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgfVxufVxuLmNhcmQ6aG92ZXJ7XG4gIGFuaW1hdGlvbi1uYW1lOiBncm93O1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAuMnM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='jumbotron-fluid'>\n  <div class='container'>\n\n    <!-- header text -->\n    <div class=\"row d-flex justify-content-center\">\n      <h1 class=\"display-2 text-center\">ItMine</h1>\n    </div>\n\n    <!-- logo image -->\n    <div id=\"logo\" class=\"flex-column text-center row\">\n      <img src=\"/assets/ItMineLogo.jpeg\" class=\"rounded text-center d-block mx-auto\" alt=\"\" style='width: 15em;height:15em'>\n      <a routerLink=\"/trackers\">\n        <button type=\"button\" class=\"btn btn-primary\">It's Mine</button>\n      </a>\n    </div>\n\n  </div>\n</div>\n\n<div class='jumbotron jumbotron-fluid'>\n  <div class='container'>\n    <div class=\"row\">\n      <div class='col-12 col-md-6 col-xl-3'>\n        <a routerLink='/found'>\n          <div class=\"card mb-5\">\n            <img class=\"card-img-top\" alt=\"\" style='height: 10em;width: 100%;background-image:url(/assets/7.png);background-size:cover;background-position:center;'>\n            <div class=\"card-body\">\n              <p class='lead text-center'>Return Lost Items</p>\n            </div>\n          </div>\n        </a>\n      </div>\n\n      <div class='col-12 col-md-6 col-xl-3'>\n        <a routerLink='/hiw'>\n          <div class=\"card mb-5\">\n            <img class=\"card-img-top\" alt=\"\" style='height: 10em;width: 100%;background-image:url(/assets/8.png);background-size:cover;background-position:center;'>\n            <div class=\"card-body\">\n              <p class=\"lead text-center\">How It Works</p>\n            </div>\n          </div>\n        </a>\n      </div>\n\n      <div class='col-12 col-md-6 col-xl-3'>\n        <a routerLink='/about'>\n          <div class=\"card mb-5\">\n            <img class=\"card-img-top\" alt=\"\" style='height: 10em;width: 100%;background-image:url(/assets/6.png);background-size:cover;background-position:center;'>\n            <div class=\"card-body\">\n              <p class=\"lead text-center\">About Us</p>\n            </div>\n          </div>\n        </a>\n      </div>\n\n      <div class='col-12 col-md-6 col-xl-3'>\n        <a routerLink='/contact'>\n          <div class=\"card mb-5\">\n            <img class=\"card-img-top\" alt=\"\" style='height: 10em;width: 100%;background-image:url(/assets/5.png);background-size:cover;background-position:center;'>\n            <div class=\"card-body\">\n              <p class='lead text-center'>FAQs</p>\n            </div>\n          </div>\n        </a>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n"

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