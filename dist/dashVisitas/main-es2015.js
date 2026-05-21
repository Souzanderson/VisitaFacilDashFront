(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andersondasilva/Malbizer/Agrodados/VisitasDashboard/src/main.ts */"zUnb");


/***/ }),

/***/ "0oYm":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icon/icon.component */ "WaCx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { active: a0 }; };
function MenuComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_div_7_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.go(item_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, item_r1.route == ctx_r0.getroute()))("title", ctx_r0.collapsed ? item_r1.label : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", item_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.label);
} }
class MenuComponent {
    constructor(route) {
        this.route = route;
        this.collapsed = false;
        this.items = [
            {
                id: 1,
                label: 'Início',
                route: '/dashboard',
                icon: '/assets/icons/dash.svg',
                isselected: true,
            },
            {
                id: 2,
                label: 'Agendamento de Visitas',
                route: '/agendamentos',
                icon: '/assets/icons/agendamento.svg',
                isselected: false,
            },
            {
                id: 3,
                label: 'Diário de Visitas',
                route: '/visits',
                icon: '/assets/icons/book.svg',
                isselected: false,
            },
            {
                id: 4,
                label: 'Visitas por Cliente',
                route: '/clientes',
                icon: '/assets/icons/user.svg',
                isselected: false,
            },
            {
                id: 5,
                label: 'Visitas por Vendedor',
                route: '/vendedores',
                icon: '/assets/icons/vendedor.svg',
                isselected: false,
            },
        ];
    }
    ngOnInit() {
        console.log(this.route.url);
    }
    getroute() {
        return this.route.url;
    }
    go(id) {
        for (let item of this.items) {
            item.isselected = item.id == id;
            if (item.id == id) {
                this.route.navigate([item.route]);
            }
        }
    }
    close() {
        this.route.navigate(["/"]);
    }
    toggleCollapse() {
        this.collapsed = !this.collapsed;
        document.body.classList.toggle('menu-collapsed', this.collapsed);
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["menu"]], decls: 16, vars: 7, consts: [["id", "menu"], [1, "sidebar"], [1, "brand"], ["icon", "/assets/images/agrodadoscubew.svg", "height", "36px", "width", "36px"], [1, "brand-name"], [1, "nav-items"], ["class", "nav-item", 3, "ngClass", "title", "click", 4, "ngFor", "ngForOf"], [1, "nav-item", "logout", 3, "title", "click"], [1, "nav-icon"], ["icon", "/assets/icons/close.svg", "height", "20px", "width", "20px"], [1, "nav-label"], [1, "collapse-btn", 3, "title", "click"], [1, "collapse-arrow"], [1, "nav-item", 3, "ngClass", "title", "click"], ["height", "20px", "width", "20px", 3, "icon"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Visitas Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MenuComponent_div_7_Template, 5, 6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_div_click_8_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_13_listener() { return ctx.toggleCollapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u2039");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("collapsed", ctx.collapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.collapsed ? "Sair" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.collapsed ? "Expandir menu" : "Recolher menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("rotated", ctx.collapsed);
    } }, directives: [_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: ["#menu[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: var(--gap);\n  height: 100vh;\n  z-index: 1;\n  background: linear-gradient(180deg, #020024 0%, var(--color-primary) 60%, #034a6e 100%);\n  transition: width 0.25s ease;\n  overflow: hidden;\n}\n#menu.collapsed[_ngcontent-%COMP%] {\n  width: 60px;\n}\n#menu.collapsed[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  display: none;\n}\n#menu.collapsed[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  display: none;\n}\n#menu.collapsed[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 20px 0 18px;\n}\n#menu.collapsed[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 10px 0;\n}\n#menu.collapsed[_ngcontent-%COMP%]   .nav-item.active[_ngcontent-%COMP%] {\n  border-left: 3px solid var(--color-secondary-contrast);\n  padding-left: 0;\n}\n.sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  padding: 0 10px;\n  box-sizing: border-box;\n}\n.brand[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 10px;\n  padding: 20px 8px 18px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.15);\n  margin-bottom: 12px;\n}\n.brand[_ngcontent-%COMP%]   .brand-name[_ngcontent-%COMP%] {\n  color: var(--color-primary-contrast);\n  font-family: Poppins, sans-serif;\n  font-size: 15px;\n  font-weight: bold;\n  letter-spacing: 0.5px;\n  white-space: normal;\n  line-height: 1.3;\n}\n.nav-items[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  flex: 1;\n}\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 10px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.18s ease;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  opacity: 0.75;\n}\n.nav-item[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n  font-family: Poppins, sans-serif;\n  font-size: 12.5px;\n  font-weight: 400;\n  white-space: normal;\n  line-height: 1.3;\n  word-break: break-word;\n}\n.nav-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.nav-item[_ngcontent-%COMP%]:hover   .nav-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.95);\n}\n.nav-item[_ngcontent-%COMP%]:hover   .nav-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.nav-item.active[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.18);\n  border-left: 3px solid var(--color-secondary-contrast);\n  padding-left: 7px;\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  color: var(--color-primary-contrast);\n  font-weight: bold;\n}\n.nav-item.active[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.collapse-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(255, 255, 255, 0.08);\n  border: none;\n  border-radius: 8px;\n  width: 100%;\n  height: 36px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  transition: background 0.18s ease;\n}\n.collapse-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.18);\n}\n.collapse-btn[_ngcontent-%COMP%]   .collapse-arrow[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 24px;\n  line-height: 1;\n  display: inline-block;\n  transition: transform 0.25s ease;\n}\n.collapse-btn[_ngcontent-%COMP%]   .collapse-arrow.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.logout[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  border-top: 1px solid rgba(255, 255, 255, 0.12);\n  padding-top: 12px;\n  margin-top: 4px;\n  border-radius: 0;\n}\n.logout[_ngcontent-%COMP%]:hover {\n  background: rgba(202, 17, 17, 0.25);\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsdUZBQUE7RUFNQSw0QkFBQTtFQUNBLGdCQUFBO0FBSkY7QUFNRTtFQUNFLFdBQUE7QUFKSjtBQU1JO0VBQWMsYUFBQTtBQUhsQjtBQUlJO0VBQWEsYUFBQTtBQURqQjtBQUVJO0VBQVMsdUJBQUE7RUFBeUIsb0JBQUE7QUFFdEM7QUFESTtFQUFZLHVCQUFBO0VBQXlCLGVBQUE7QUFLekM7QUFKSTtFQUFtQixzREFBQTtFQUF3RCxlQUFBO0FBUS9FO0FBSkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBT0Y7QUFKQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtBQU9GO0FBTEU7RUFDRSxvQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBT0o7QUFIQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0FBTUY7QUFIQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFNRjtBQUpFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtBQU1KO0FBSEU7RUFDRSxnQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUtKO0FBRkU7RUFDRSxvQ0FBQTtBQUlKO0FBRkk7RUFDRSxnQ0FBQTtBQUlOO0FBREk7RUFDRSxVQUFBO0FBR047QUFDRTtFQUNFLHFDQUFBO0VBQ0Esc0RBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQ0k7RUFDRSxvQ0FBQTtFQUNBLGlCQUFBO0FBQ047QUFFSTtFQUNFLFVBQUE7QUFBTjtBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUNBQUE7QUFGRjtBQUlFO0VBQ0UscUNBQUE7QUFGSjtBQUtFO0VBQ0UsZ0NBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUFISjtBQUtJO0VBQ0UseUJBQUE7QUFITjtBQVFBO0VBQ0UsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTEY7QUFPRTtFQUNFLG1DQUFBO0VBQ0Esa0JBQUE7QUFMSiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21lbnUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IHZhcigtLWdhcCk7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDE7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcbiAgICAxODBkZWcsXG4gICAgcmdiYSgyLCAwLCAzNiwgMSkgMCUsXG4gICAgdmFyKC0tY29sb3ItcHJpbWFyeSkgNjAlLFxuICAgICMwMzRhNmUgMTAwJVxuICApO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjI1cyBlYXNlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICYuY29sbGFwc2VkIHtcbiAgICB3aWR0aDogNjBweDtcblxuICAgIC5icmFuZC1uYW1lIHsgZGlzcGxheTogbm9uZTsgfVxuICAgIC5uYXYtbGFiZWwgeyBkaXNwbGF5OiBub25lOyB9XG4gICAgLmJyYW5kIHsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHBhZGRpbmc6IDIwcHggMCAxOHB4OyB9XG4gICAgLm5hdi1pdGVtIHsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHBhZGRpbmc6IDEwcHggMDsgfVxuICAgIC5uYXYtaXRlbS5hY3RpdmUgeyBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7IHBhZGRpbmctbGVmdDogMDsgfVxuICB9XG59XG5cbi5zaWRlYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5icmFuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgcGFkZGluZzogMjBweCA4cHggMThweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgLmJyYW5kLW5hbWUge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgfVxufVxuXG4ubmF2LWl0ZW1zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG4gIGZsZXg6IDE7XG59XG5cbi5uYXYtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE4cyBlYXNlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAubmF2LWljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBvcGFjaXR5OiAwLjc1O1xuICB9XG5cbiAgLm5hdi1sYWJlbCB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxMi41cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgfVxuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcblxuICAgIC5uYXYtbGFiZWwge1xuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gICAgfVxuXG4gICAgLm5hdi1pY29uIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG5cbiAgJi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOCk7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICAgIHBhZGRpbmctbGVmdDogN3B4O1xuXG4gICAgLm5hdi1sYWJlbCB7XG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAubmF2LWljb24ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbn1cblxuLmNvbGxhcHNlLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMThzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcbiAgfVxuXG4gIC5jb2xsYXBzZS1hcnJvdyB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZTtcblxuICAgICYucm90YXRlZCB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIH1cbiAgfVxufVxuXG4ubG9nb3V0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyMDIsIDE3LCAxNywgMC4yNSk7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connection.service */ "R8/k");
/* harmony import */ var src_app_services_uteis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/uteis.service */ "4y1v");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/menu/menu.component */ "0oYm");
/* harmony import */ var _components_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/skeleton/skeleton.component */ "eO4b");
/* harmony import */ var _components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/searchbar/searchbar.component */ "1ujl");
/* harmony import */ var _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/datepicker/datepicker.component */ "JZE2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/card/card.component */ "lXt9");
/* harmony import */ var _components_linechart_linechart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/linechart/linechart.component */ "pBvA");
/* harmony import */ var _components_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/barchart/barchart.component */ "HKVK");
/* harmony import */ var _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/icon/icon.component */ "WaCx");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/spinner/spinner.component */ "e5sC");
















const _c0 = ["dti"];
const _c1 = ["dtf"];
const _c2 = ["shc"];
function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "skeleton", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "skeleton", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("count", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("count", 4);
} }
function HomeComponent_div_2_card_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "card", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "linechart", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r3.statistics);
} }
function HomeComponent_div_2_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "barchart", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r4.visitsbyper);
} }
function HomeComponent_div_2_div_23_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "card", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_div_2_div_23_card_1_Template_card_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const vendedor_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3); return ctx_r11.goVendedor(vendedor_r10.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vendedor_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "(" + vendedor_r10.iderp + ") " + vendedor_r10.nmvendedor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Clientes Ativos: ", vendedor_r10.clientes, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Dist\u00E2ncia Percorrida: ", vendedor_r10.kmtotal + " km", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Media di\u00E1ria: ", ctx_r9.getAverage(vendedor_r10.kmtotal), " km ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Clientes Contactados: ", vendedor_r10.clientesvisitados, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Media di\u00E1ria: ", ctx_r9.getAverage(vendedor_r10.clientesvisitados), " cliente(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Contatos: ", vendedor_r10.visitas, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Media di\u00E1ria: ", ctx_r9.getAverage(vendedor_r10.visitas), " contato(s) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Contatos com sucesso: ", vendedor_r10.sucessovisitas, " ");
} }
function HomeComponent_div_2_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_2_div_23_card_1_Template, 28, 9, "card", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.vendedores);
} }
function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_div_2_card_2_Template, 2, 1, "card", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HomeComponent_div_2_card_3_Template, 2, 1, "card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Resumo por Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "searchbar", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onchange", function HomeComponent_div_2_Template_searchbar_onchange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); ctx_r13.term = $event; return ctx_r13.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "datepicker", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "datepicker", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HomeComponent_div_2_Template_input_ngModelChange_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.notvisit = $event; })("change", function HomeComponent_div_2_Template_input_change_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.search(null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Exibir Vendedor sem visitas?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HomeComponent_div_2_Template_div_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r17.searchWs(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, " Pesquisar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, HomeComponent_div_2_div_23_Template, 2, 1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](15);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.statistics.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.statistics.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.notvisit);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r7.value);
} }
function HomeComponent_spinner_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "spinner");
} }
class HomeComponent {
    constructor(conn, util) {
        this.conn = conn;
        this.util = util;
        this.vendedores = [];
        this.notvisit = false;
        this.aux = [];
        this.statistics = [];
        this.visitsbyper = [];
        this.loading = false;
        this.term = '';
        this.days = 1;
    }
    ngOnInit() {
        this.init();
    }
    getDays() {
        let dtini = moment__WEBPACK_IMPORTED_MODULE_1__(this.dti.value, 'DD/MM/YYYY');
        let dtfim = moment__WEBPACK_IMPORTED_MODULE_1__(this.dtf.value, 'DD/MM/YYYY');
        return dtfim.diff(dtini) / (1000 * 60 * 60 * 24);
    }
    goVendedor(id) {
        let dti = moment__WEBPACK_IMPORTED_MODULE_1__(this.dti.value, 'DD/MM/YYYY').format('DD-MM-YYYY');
        let dtf = moment__WEBPACK_IMPORTED_MODULE_1__(this.dtf.value, 'DD/MM/YYYY').format('DD-MM-YYYY');
        this.util.go(`vendedores/${id}/${dti}/${dtf}`);
    }
    getAverage(value) {
        return (Number(value) / (this.days > 0 ? this.days : 1)).toFixed(2);
    }
    kmCalc(item) {
        try {
            return Number(item.kmfechamento) - Number(item.kmabertura);
        }
        catch (error) {
            return 0;
        }
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let dtini = moment__WEBPACK_IMPORTED_MODULE_1__().subtract(30, 'days');
            let dtfim = moment__WEBPACK_IMPORTED_MODULE_1__();
            this.loading = true;
            try {
                this.vendedores = yield this.conn
                    .getVendedores(dtini.format('YYYY/MM/DD'), dtfim.format('YYYY/MM/DD'))
                    .toPromise();
                this.aux = this.vendedores;
                console.log(this.vendedores);
                this.statistics = yield this.conn.getStatistic().toPromise();
                console.log(this.statistics);
                this.formatBarchart();
            }
            catch (error) { }
            this.loading = false;
            setTimeout(() => {
                this.dtf.setValue(dtfim.format('DD/MM/YYYY'));
                this.dti.setValue(dtini.format('DD/MM/YYYY'));
                this.days = this.getDays();
                this.shc.value = this.term;
                this.search();
            }, 300);
        });
    }
    searchWs() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let dtini = moment__WEBPACK_IMPORTED_MODULE_1__(this.dti.value, 'DD/MM/YYYY');
            let dtfim = moment__WEBPACK_IMPORTED_MODULE_1__(this.dtf.value, 'DD/MM/YYYY');
            this.loading = true;
            try {
                this.vendedores = yield this.conn
                    .getVendedores(dtini.format('YYYY/MM/DD'), dtfim.format('YYYY/MM/DD'))
                    .toPromise();
                this.aux = this.vendedores;
                console.log(this.vendedores);
                this.formatBarchart();
            }
            catch (error) { }
            this.loading = false;
            setTimeout(() => {
                this.dtf.setValue(dtfim.format('DD/MM/YYYY'));
                this.dti.setValue(dtini.format('DD/MM/YYYY'));
                this.shc.value = this.term;
                this.days = this.getDays();
                this.search();
            }, 300);
        });
    }
    formatBarchart() {
        let data = {};
        for (let s of this.statistics.reverse()) {
            let d = String(s['dtvisita']).slice(0, 7);
            if (!data[d])
                data[d] = Number(s['visitas']);
            else
                data[d] += Number(s['visitas']);
        }
        let res = [];
        for (let k in data) {
            res.push({
                periodo: moment__WEBPACK_IMPORTED_MODULE_1__(k, 'YYYY/MM').format('MM/YYYY'),
                visitas: data[k],
            });
        }
        this.visitsbyper = res;
    }
    search() {
        if (this.term) {
            this.vendedores = this.aux.filter((item) => {
                return (String(item.nmvendedor)
                    .toUpperCase()
                    .indexOf(String(this.term).toUpperCase()) > -1);
            });
        }
        else {
            this.vendedores = this.aux;
        }
        if (!this.notvisit)
            this.vendedores = this.vendedores.filter((item) => Number(item.visitas) > 0);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_uteis_service__WEBPACK_IMPORTED_MODULE_4__["UteisService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dti = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dtf = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.shc = _t.first);
    } }, decls: 5, vars: 3, consts: [["id", "container"], ["class", "struct", 4, "ngIf"], [4, "ngIf"], [1, "struct"], ["type", "chart", 3, "count"], ["type", "cards", 3, "count"], [1, "charts"], ["height", "50vh", "title", "Visitas Di\u00E1rias", "margin", "20px", 4, "ngIf"], ["height", "50vh", "title", "Visitas Mensais", "margin", "20px", 4, "ngIf"], [1, "search", 2, "display", "flex", "align-items", "center"], [2, "width", "30%", "padding", "4px"], ["placeholder", "Pesquisar vendedor...", 3, "onchange"], ["shc", ""], [2, "width", "20%", "padding", "4px"], ["placeholder", "Data Inicial"], ["dti", ""], ["placeholder", "Data Final"], ["dtf", ""], [1, "checkbox"], ["type", "checkbox", "id", "scales", "name", "scales", 3, "ngModel", "ngModelChange", "change"], ["for", "scales", 1, "noselect"], [2, "width", "15%", "padding", "4px"], [1, "button", 2, "width", "auto", "height", "26px", 3, "click"], ["class", "sellers", "table", "true", 4, "ngIf"], ["height", "50vh", "title", "Visitas Di\u00E1rias", "margin", "20px"], [3, "data"], ["height", "50vh", "title", "Visitas Mensais", "margin", "20px"], ["xlabel", "periodo", "ylabel", "visitas", 3, "data"], ["table", "true", 1, "sellers"], ["margin", "4px", 3, "title", "click", 4, "ngFor", "ngForOf"], ["margin", "4px", 3, "title", "click"], ["table", "true", 1, "seller", 2, "--cs", "1fr"], [1, "details"], [1, "dts"], [1, "vendas", "rdc"], ["icon", "/assets/icons/clientactive.svg", "height", "20px", "width", "20px"], [1, "duo"], ["icon", "/assets/icons/location.svg", "height", "20px", "width", "20px"], [1, "average"], ["icon", "/assets/icons/client2.svg", "height", "20px", "width", "20px"], [1, "visitas", "rdc"], ["icon", "/assets/icons/talk.svg", "height", "20px", "width", "20px"], ["icon", "/assets/icons/talksuccess.svg", "height", "20px", "width", "20px"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 24, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HomeComponent_spinner_4_Template, 1, 0, "spinner", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"], _components_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_7__["SkeletonComponent"], _components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_8__["SearchbarComponent"], _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_9__["DatepickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"], _components_linechart_linechart_component__WEBPACK_IMPORTED_MODULE_12__["LinechartComponent"], _components_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_13__["BarchartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_14__["IconComponent"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_15__["SpinnerComponent"]], styles: ["@media (max-width: 1500px) and (min-width: 1100px) {\n  #container[_ngcontent-%COMP%]   .sellers[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr !important;\n  }\n}\n@media (max-width: 1100px) {\n  .sellers[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr !important;\n  }\n}\n#container[_ngcontent-%COMP%]   .titlegraph[_ngcontent-%COMP%] {\n  padding: 8px;\n  font-size: 14px;\n  text-align: left;\n  font-weight: bold;\n  color: var(--color-text);\n}\n#container[_ngcontent-%COMP%]   .sellers[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  grid-template-columns: 1fr 1fr 1fr;\n}\n#container[_ngcontent-%COMP%]   .sellers[_ngcontent-%COMP%]   card[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n#container[_ngcontent-%COMP%]   .sellers[_ngcontent-%COMP%]   .seller[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n#container[_ngcontent-%COMP%]   .sellers[_ngcontent-%COMP%]   .seller[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: lighter;\n  color: #fff;\n  font-size: 16px;\n  background: var(--color-secondary);\n  padding: 8px;\n  margin: -12px;\n  text-align: center;\n}\n#container[_ngcontent-%COMP%]   .sellers[_ngcontent-%COMP%]   .seller[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .dts[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: bold;\n  color: #7c888e;\n}\n.search[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n.charts[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n.checkbox[_ngcontent-%COMP%] {\n  width: 200px;\n  text-align: center;\n  font-size: 12px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 1px 1px 5px 0px #00000033;\n  font-weight: lighter;\n  height: 40px;\n  margin: 3px;\n  padding-left: 8px;\n}\n.rdc[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-content: space-around;\n  justify-content: flex-start;\n  align-items: center;\n  padding: 4px;\n  font-size: 13px;\n  font-weight: 400;\n}\n.average[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: lighter;\n  margin-left: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background: #70b3ed;\n  margin: 5px;\n  padding: 1px;\n  text-align: center;\n  border-radius: 12px;\n  color: #fff;\n}\n.duo[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 188px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSTtJQUNFLHlDQUFBO0VBQUo7QUFDRjtBQUlBO0VBQ0U7SUFDRSxxQ0FBQTtFQUZGO0FBQ0Y7QUFRRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FBTko7QUFRRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7QUFOSjtBQU9JO0VBQ0UsZUFBQTtBQUxOO0FBU1E7RUFDRSxpQkFBQTtBQVBWO0FBU1E7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBUFY7QUFTUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFQVjtBQWlCQTtFQUNFLGFBQUE7QUFkRjtBQWlCQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQWRGO0FBaUJBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBZEY7QUFpQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFkRjtBQWlCQTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFkRjtBQWdCQTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtBQWJGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KSBhbmQgKG1pbi13aWR0aDogMTEwMHB4KXtcclxuICAjY29udGFpbmVyIHtcclxuICAgIC5zZWxsZXJzIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcbiAgLnNlbGxlcnMge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgLnRpdGxlZ3JhcGgge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xyXG4gIH1cclxuICAuc2VsbGVycyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gICAgY2FyZCB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5zZWxsZXIge1xyXG4gICAgICAuZGV0YWlscyB7XHJcbiAgICAgICAgaWNvbiB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICBtYXJnaW46IC0xMnB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZHRzIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgY29sb3I6ICM3Yzg4OGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG4uc2VhcmNoIHtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG59XHJcblxyXG4uY2hhcnRzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxufVxyXG5cclxuLmNoZWNrYm94IHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDBweCAjMDAwMDAwMzM7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogM3B4O1xyXG4gIHBhZGRpbmctbGVmdDogOHB4O1xyXG59XHJcblxyXG4ucmRjIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmF2ZXJhZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogcmdiKDExMiAxNzkgMjM3KTtcclxuICBtYXJnaW46IDVweDtcclxuICBwYWRkaW5nOiAxcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmR1byB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxODhweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "1VCC":
/*!***********************************************************!*\
  !*** ./src/app/components/progress/progress.component.ts ***!
  \***********************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");


class ProgressComponent {
    constructor() {
        this.width = '125px';
        this.value = 0;
        this.widthinterno = '0px';
    }
    ngOnInit() {
        this.widthinterno = 'calc(' + this.value + '*' + this.width + ')';
    }
    getPercent() {
        return (this.value * 100).toFixed(2) + '%';
    }
}
ProgressComponent.ɵfac = function ProgressComponent_Factory(t) { return new (t || ProgressComponent)(); };
ProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressComponent, selectors: [["progressbar"]], inputs: { width: "width", value: "value" }, decls: 3, vars: 5, consts: [["id", "progress"], ["matTooltipPosition", "above", 1, "total", 3, "matTooltip"], [1, "parcial"]], template: function ProgressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", ctx.getPercent());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.widthinterno);
    } }, directives: [_angular_material_tooltip__WEBPACK_IMPORTED_MODULE_1__["MatTooltip"]], styles: ["#progress[_ngcontent-%COMP%] {\n  background-color: var(--color-secondary-contrast);\n  height: 4px;\n  border-radius: 12px;\n  overflow: hidden;\n}\n#progress[_ngcontent-%COMP%]   .parcial[_ngcontent-%COMP%] {\n  background-color: var(--color-secondary);\n  height: 4px;\n  border-radius: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2dyZXNzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaURBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQUU7RUFDRSx3Q0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUVKIiwiZmlsZSI6InByb2dyZXNzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2dyZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAucGFyY2lhbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "1ujl":
/*!*************************************************************!*\
  !*** ./src/app/components/searchbar/searchbar.component.ts ***!
  \*************************************************************/
/*! exports provided: SearchbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchbarComponent", function() { return SearchbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function SearchbarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchbarComponent_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r1.value = null; return ctx_r1.keyup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SearchbarComponent {
    constructor() {
        this.type = "text";
        this.placeholder = "Digite para pesquisar...";
        this.onchange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    keyup() {
        this.onchange.emit(this.value);
    }
}
SearchbarComponent.ɵfac = function SearchbarComponent_Factory(t) { return new (t || SearchbarComponent)(); };
SearchbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchbarComponent, selectors: [["searchbar"]], inputs: { value: "value", type: "type", placeholder: "placeholder" }, outputs: { onchange: "onchange" }, decls: 4, vars: 4, consts: [["id", "searchbar"], [1, "icon"], [3, "ngModel", "placeholder", "type", "ngModelChange", "keyup"], ["class", "iconclear", 3, "click", 4, "ngIf"], [1, "iconclear", 3, "click"]], template: function SearchbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SearchbarComponent_Template_input_ngModelChange_2_listener($event) { return ctx.value = $event; })("keyup", function SearchbarComponent_Template_input_keyup_2_listener() { return ctx.keyup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SearchbarComponent_div_3_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("placeholder", ctx.placeholder)("type", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["#searchbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  padding-left: 8px;\n  background-color: var(--color-primary-contrast);\n  border-radius: 4px;\n  border: 1px solid #cee0e8;\n  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.2);\n  flex-wrap: nowrap;\n  align-content: space-around;\n  justify-content: space-around;\n  align-items: center;\n  font-family: Poppins, Roboto, \"Courier New\", Courier, monospace;\n}\n#searchbar[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background: url('search.png');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 24px;\n  width: 24px;\n}\n#searchbar[_ngcontent-%COMP%]   .iconclear[_ngcontent-%COMP%] {\n  background: url('clear.svg');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  height: 32px;\n  width: 32px;\n  margin-right: 8px;\n  cursor: pointer;\n}\n#searchbar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: none;\n  padding: 6px;\n  outline: none;\n  background-color: unset;\n  width: 100%;\n  width: -moz-available;\n  \n  width: -webkit-fill-available;\n  \n  width: fill-available;\n  padding-right: 8px;\n  padding-left: 8px;\n  margin: 4px;\n  color: var(--color-primary);\n  font-family: Poppins, Roboto, \"Courier New\", Courier, monospace;\n}\n#searchbar[_ngcontent-%COMP%]:focus-within {\n  box-shadow: 1px 1px 5px 0px #048dafe1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NlYXJjaGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLCtEQUFBO0FBQ0Y7QUFBRTtFQUNFLDZCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFFSjtBQUFFO0VBQ0UsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUVKO0FBQUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUF1Qiw0Q0FBQTtFQUN2Qiw2QkFBQTtFQUErQiw2Q0FBQTtFQUMvQixxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSwrREFBQTtBQUlKO0FBR0E7RUFDRSxxQ0FBQTtBQUFGIiwiZmlsZSI6InNlYXJjaGJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWFyY2hiYXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIwNiAyMjQgMjMyKTtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAwcHggcmdiKDAgMCAwIC8gMjAlKTtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogUG9wcGlucywgUm9ib3RvLCBcIkNvdXJpZXIgTmV3XCIsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICAuaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJzZWFyY2gucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gIH1cclxuICAuaWNvbmNsZWFyIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcImNsZWFyLnN2Z1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBpbnB1dCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiAtbW96LWF2YWlsYWJsZTsgLyogV2ViS2l0LWJhc2VkIGJyb3dzZXJzIHdpbGwgaWdub3JlIHRoaXMuICovXHJcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTsgLyogTW96aWxsYS1iYXNlZCBicm93c2VycyB3aWxsIGlnbm9yZSB0aGlzLiAqL1xyXG4gICAgd2lkdGg6IGZpbGwtYXZhaWxhYmxlO1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBtYXJnaW46IDRweDtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBSb2JvdG8sIFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gIH1cclxuICAvLyAgIGlucHV0OmZvY3VzIHtcclxuICAvLyAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItdGVydGlhcnkpO1xyXG4gIC8vICAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAwcHggdmFyKC0tY29sb3ItdGVydGlhcnkpO1xyXG4gIC8vICAgfVxyXG59XHJcbiNzZWFyY2hiYXI6Zm9jdXMtd2l0aGluIHtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAwcHggIzA0OGRhZmUxO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2Kee":
/*!*********************************************************************!*\
  !*** ./src/app/components/chartdistance/chartdistance.component.ts ***!
  \*********************************************************************/
/*! exports provided: ChartdistanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartdistanceComponent", function() { return ChartdistanceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "cclQ");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "xJfa");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "WlQZ");
/* harmony import */ var _amcharts_amcharts4_plugins_timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts4/plugins/timeline */ "fNwR");
/* harmony import */ var _charttheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charttheme */ "z7QY");







/* Chart code */
// Themes begin
_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Themes end
class ChartdistanceComponent {
    constructor() {
        this.id = 'timelinechart';
        this.data = [];
        this.space = 0.5;
        this.width = "auto";
        this.height = "80%";
        this.padding = "0";
        this.colors = [];
        this.finish = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        let colorSet = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["ColorSet"]();
        setTimeout(() => {
            let labels = [];
            let l = 0;
            for (let i = this.data[0] - 20; i < this.data[this.data.length - 1] + 20; i += this.space) {
                let last = this.data.indexOf(i) == this.data.length - 1;
                let first = this.data.indexOf(i) == 0;
                let legend = String(l);
                if (first)
                    legend = 'A';
                if (last)
                    legend = 'F';
                if (this.data.indexOf(i) > -1) {
                    let color = colorSet.next();
                    this.colors.push({ color: color.hex, pos: i, legend: legend });
                    labels.push({
                        y: 0,
                        x: i,
                        color: color,
                        disabled: false,
                        label: legend,
                    });
                    l++;
                }
                else {
                    labels.push({
                        y: 0,
                        x: i,
                    });
                }
            }
            // console.log(this.colors);
            this.finish.emit(this.colors);
            this.init(labels);
        }, 300);
    }
    init(labels) {
        let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"](this.id, _amcharts_amcharts4_plugins_timeline__WEBPACK_IMPORTED_MODULE_4__["CurveChart"]);
        chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
        let interfaceColors = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["InterfaceColorSet"]();
        // let colorSet = new am4core.ColorSet();
        // colorSet.step = this.space;
        chart.data = labels;
        chart.logo.height = -15000;
        chart.fontSize = 10;
        chart.tooltipContainer.fontSize = 10;
        chart.bulletsContainer.zIndex = 200;
        let yAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
        yAxis.renderer.grid.template.disabled = true;
        yAxis.renderer.baseGrid.disabled = true;
        yAxis.renderer.labels.template.disabled = true;
        yAxis.renderer.innerRadius = -15;
        yAxis.renderer.radius = 15;
        let xAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["ValueAxis"]());
        // dateAxis.renderer.minGridDistance = 70;
        xAxis.renderer.step = this.space;
        xAxis.renderer.points = _charttheme__WEBPACK_IMPORTED_MODULE_5__["points"];
        xAxis.renderer.grid.template.disabled = true;
        xAxis.renderer.line.strokeDasharray = '4,2';
        xAxis.renderer.line.strokeWidth = 1;
        xAxis.renderer.line.stroke = interfaceColors.getFor('background');
        xAxis.renderer.grid.template.disabled = true;
        xAxis.zIndex = 100;
        xAxis.tooltip.background.fillOpacity = 0.2;
        xAxis.tooltip.background.cornerRadius = 5;
        xAxis.tooltip.label.fill = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["InterfaceColorSet"]().getFor('alternativeBackground');
        xAxis.startLocation = -20;
        let labelTemplate = xAxis.renderer.labels.template;
        labelTemplate.disabled = true;
        let series1 = chart.series.push(new _amcharts_amcharts4_plugins_timeline__WEBPACK_IMPORTED_MODULE_4__["CurveStepLineSeries"]());
        series1.strokeWidth = 11;
        series1.dataFields.valueY = 'y';
        series1.dataFields.valueX = 'x';
        series1.propertyFields.stroke = 'color';
        let bullet = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["CircleBullet"]();
        series1.bullets.push(bullet);
        bullet.circle.radius = 10;
        bullet.circle.strokeOpacity = 1;
        bullet.circle.stroke = interfaceColors.getFor('background');
        bullet.circle.strokeWidth = 1;
        bullet.disabled = true;
        bullet.propertyFields.disabled = 'disabled';
        bullet.propertyFields.fill = 'color';
        bullet.locationX = 1;
        let label = bullet.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["Label"]);
        label.fill = interfaceColors.getFor('background');
        label.propertyFields.text = 'label';
        label.strokeOpacity = 0;
        label.zIndex = 50;
        label.horizontalCenter = 'middle';
        label.verticalCenter = 'middle';
        label.fontSize = 12;
        label.fontWeight = '200';
        label.dy = 1;
    }
}
ChartdistanceComponent.ɵfac = function ChartdistanceComponent_Factory(t) { return new (t || ChartdistanceComponent)(); };
ChartdistanceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartdistanceComponent, selectors: [["timelinechart"]], inputs: { id: "id", data: "data", space: "space", width: "width", height: "height", padding: "padding" }, outputs: { finish: "finish" }, decls: 2, vars: 7, consts: [[1, "chartdiv"], ["chartdiv", ""]], template: function ChartdistanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width)("height", ctx.height)("padding", ctx.padding);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.id);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjaGFydGRpc3RhbmNlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "4y1v":
/*!*******************************************!*\
  !*** ./src/app/services/uteis.service.ts ***!
  \*******************************************/
/*! exports provided: UteisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UteisService", function() { return UteisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "EUZL");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








class UteisService {
    constructor(snackBar, dialog, route) {
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.route = route;
    }
    get apiMapsKey() {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].GOOGLE_API_MAPS_KEY;
    }
    alertDanger(message = "", duration = 4000) {
        this.snackBar.open(message, "x", {
            panelClass: ["dangersnack"],
            duration: duration,
        });
    }
    alert(text, backgroundColor = "red", color = "white", time = 3000) {
        let aviso = document.createElement("div");
        aviso.innerHTML = text;
        let estilo = aviso.style;
        estilo.backgroundColor = backgroundColor;
        estilo.color = color;
        estilo.transition = "bottom 0.8s";
        estilo.bottom = "-60px";
        estilo.left = "0";
        estilo.right = "0";
        estilo.margin = "0 auto";
        estilo.position = "fixed";
        estilo.width = "33vw";
        estilo.padding = "12px";
        estilo.textAlign = "center";
        estilo.borderRadius = "5px";
        setTimeout(() => {
            estilo.bottom = "20px";
        }, 100);
        setTimeout(() => {
            estilo.bottom = "-60px";
            setTimeout(() => {
                if (aviso.parentElement)
                    aviso.parentElement.removeChild(aviso);
            }, 800);
        }, time);
        try {
            document.getElementById("modal").appendChild(aviso);
        }
        catch (error) {
            try {
                document.getElementById("container").appendChild(aviso);
            }
            catch (error) { }
        }
    }
    go(route) {
        this.route.navigate(["/" + route]);
    }
    rad(x) {
        return (x * Math.PI) / 180;
    }
    dateInRange(date1, date2, dt, format = "DD/MM/YYYY", include = true) {
        let dt1 = moment__WEBPACK_IMPORTED_MODULE_1__(date1, format);
        let dt2 = moment__WEBPACK_IMPORTED_MODULE_1__(date2, format);
        if (!include)
            return moment__WEBPACK_IMPORTED_MODULE_1__(dt, format).isBetween(dt1, dt2);
        else
            return (moment__WEBPACK_IMPORTED_MODULE_1__(dt, format).isBetween(dt1, dt2) ||
                moment__WEBPACK_IMPORTED_MODULE_1__(dt, format).isSame(dt1) ||
                moment__WEBPACK_IMPORTED_MODULE_1__(dt, format).isSame(dt2));
    }
    getDistanceMaps(p1, p2) {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const res = yield fetch("https://routes.googleapis.com/directions/v2:computeRoutes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Goog-Api-Key": this.apiMapsKey,
                    "X-Goog-FieldMask": "routes.distanceMeters",
                },
                body: JSON.stringify({
                    origin: {
                        location: { latLng: { latitude: p1.lat, longitude: p1.lng } },
                    },
                    destination: {
                        location: { latLng: { latitude: p2.lat, longitude: p2.lng } },
                    },
                    travelMode: "DRIVE",
                }),
            });
            const data = yield res.json();
            return (_c = (_b = (_a = data.routes) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.distanceMeters) !== null && _c !== void 0 ? _c : 0;
        });
    }
    getDistance(p1, p2, divisor = 1) {
        var R = 6378137; // Earth’s mean radius in meter
        var dLat = this.rad(p2.lat - p1.lat);
        var dLong = this.rad(p2.lng - p1.lng);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(this.rad(p1.lat)) *
                Math.cos(this.rad(p2.lat)) *
                Math.sin(dLong / 2) *
                Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var d = R * c;
        return d / divisor; // returns the distance in meter
    }
    modal(component, options) {
        console.log(options);
        const dialogRef = this.dialog.open(component, {
            width: options.width ? options.width : "90vw",
            height: options.height ? options.height : "90vh",
            data: options.data,
        });
        return dialogRef.afterClosed().toPromise();
    }
    toExcel(json, filename, wscols = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(json);
                if (wscols) {
                    worksheet["!cols"] = wscols;
                }
                const workbook = {
                    Sheets: { data: worksheet },
                    SheetNames: ["data"],
                };
                const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](workbook, {
                    bookType: "xlsx",
                    type: "buffer",
                });
                xlsx__WEBPACK_IMPORTED_MODULE_3__["writeFile"](workbook, filename + new Date().getTime() + ".xlsx");
                resolve("");
            });
        });
    }
    maskDate(value) {
        if (value.match(/^\d{2}$/) !== null) {
            value = value + "/";
        }
        else if (value.match(/^\d{2}\/\d{2}$/) !== null) {
            value = value + "/";
        }
        return value;
    }
    maskFone(value) {
        if (value.match(/^\d{1}$/) !== null) {
            value = "(" + value;
        }
        else if (value.match(/^\(\d{2}\d{0}$/) !== null) {
            value = value + ")";
        }
        else if (value.match(/^\(\d{2}\)\d{5}$/) !== null) {
            value = value + "-";
        }
        return value;
    }
    floatingSearch(evt, parent_element, list_elements, selected = [], offsetx = 0, offsety = 0, mask = "text") {
        return new Promise((resolve, reject) => {
            let redutor = evt.x + offsetx < 301 ? -1 : 300;
            let hflutuant = 400;
            let hbox = mask == "number" ? 280 : 316;
            hbox = selected.length > 0 ? hbox - 30 : hbox;
            let options_select = ["Igual a", "Maior que", "Menor que"];
            let auxelements = list_elements;
            let lista_retorno = new Set();
            let flutuant = document.createElement("div");
            flutuant.style.cssText = `
        position: absolute;
        box-shadow: 1px 1px 5px #cecece;
        width: 300px;
        height: ${hflutuant}px;
        top: calc(${evt.y + offsety}px);
        left: calc(${evt.x + parent_element.scrollLeft + offsetx - redutor}px);
        background: #fff;
        overflow: hidden;
        font-size: 12px;
        padding: 4px
        `;
            let select = document.createElement("select");
            if (mask == "number") {
                select.style.cssText = `
          width: -webkit-fill-available;
          margin: 4px;
          padding: 4px;
          `;
                options_select.forEach((item, i) => {
                    let opt = document.createElement("option");
                    opt.value = String(i);
                    opt.innerText = item;
                    select.appendChild(opt);
                });
                flutuant.appendChild(select);
            }
            let search = document.createElement("input");
            search.style.cssText = `
        width: -webkit-fill-available;
        margin: 4px;
        padding: 4px;
        `;
            search.placeholder = "Pesquisa...";
            search.type = mask == "number" ? mask : "text";
            flutuant.appendChild(search);
            let clear = document.createElement("div");
            clear.style.cssText = `
            font-size:12px;
            padding:4px;
            cursor:pointer;
            transition: all 0.5s;
        `;
            clear.onmouseenter = () => {
                clear.style.background = "#cecece";
            };
            clear.onmouseleave = () => {
                clear.style.background = "unset";
            };
            clear.innerHTML = `
            <span style="color:red">(x)</span><span> Limpar Filtros</span>
        `;
            clear.onclick = () => {
                resolve(null);
                flutuant.parentElement.removeChild(flutuant);
                window.removeEventListener("click", evt_listen);
            };
            let div = document.createElement("div");
            div.id = "flutuant_menu";
            div.style.cssText = `
        width: -webkit-fill-available;
        margin: 4px;
        padding: 4px;
        height: ${hbox}px;
        overflow-y: auto;
        overflow-x: hidden;
        border: 1px solid #000;
        `;
            if (selected.length > 0) {
                flutuant.appendChild(clear);
            }
            let checkboxes = [];
            const populateDiv = (lista) => {
                checkboxes = [];
                list_elements = lista;
                div.innerHTML = "";
                for (let l of lista) {
                    let chdiv = document.createElement("div");
                    chdiv.style.cssText = `
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                align-content: center;
                justify-content: flex-start;
                align-items: center;
                padding: 4px;
                cursor: pointer;
                color: #000;
                `;
                    chdiv.onmouseenter = () => {
                        chdiv.style.background = "#cecece";
                    };
                    chdiv.onmouseleave = () => {
                        chdiv.style.background = "unset";
                    };
                    let input = document.createElement("input");
                    input.type = "checkbox";
                    input.name = l;
                    input.onchange = (evt) => {
                        if (input.checked) {
                            lista_retorno.add(l);
                        }
                        else {
                            lista_retorno.delete(l);
                        }
                    };
                    if (selected.indexOf(l) > -1) {
                        input.checked = true;
                        lista_retorno.add(l);
                    }
                    let label = document.createElement("div");
                    label.innerText = String(l) !== "" ? l : "(vazio)";
                    label.style.width = "100%";
                    label.onclick = () => {
                        input.checked = !input.checked;
                        if (input.checked) {
                            lista_retorno.add(l);
                        }
                        else {
                            lista_retorno.delete(l);
                        }
                    };
                    chdiv.appendChild(input);
                    chdiv.appendChild(label);
                    div.appendChild(chdiv);
                    checkboxes.push({ input: input, label: l });
                }
            };
            populateDiv(list_elements);
            search.onkeyup = () => {
                if (mask === "fone") {
                    search.value = this.maskFone(search.value);
                }
                else if (mask === "date") {
                    search.value = this.maskDate(search.value);
                }
                if (mask == "number" && search.value) {
                    const selectedtype = String(select.value);
                    let list = list_elements.filter((item) => {
                        if (selectedtype == "0") {
                            return Number(item) == Number(search.value);
                        }
                        else if (selectedtype == "2") {
                            return Number(item) < Number(search.value);
                        }
                        else if (selectedtype == "1") {
                            return Number(item) > Number(search.value);
                        }
                    });
                    populateDiv(list);
                }
                else if (search.value) {
                    let list = list_elements.filter((item) => String(item)
                        .toUpperCase()
                        .indexOf(String(search.value).toUpperCase()) > -1);
                    populateDiv(list);
                }
                else {
                    populateDiv(auxelements);
                }
            };
            search.onchange = search.onkeyup;
            flutuant.appendChild(div);
            const evt_listen = (e) => {
                if (!flutuant.contains(e.target)) {
                    flutuant.parentElement.removeChild(flutuant);
                    window.removeEventListener("click", evt_listen);
                }
            };
            let btok = document.createElement("button");
            btok.type = "button";
            btok.innerText = "Pesquisar";
            btok.style.cssText = `
        margin: 4px;
        font-size: 12px;
    `;
            btok.onclick = () => {
                resolve(Array.from(lista_retorno));
                flutuant.parentElement.removeChild(flutuant);
                window.removeEventListener("click", evt_listen);
            };
            let btc = document.createElement("button");
            btc.type = "button";
            btc.innerText = "Cancelar";
            btc.style.cssText = `
        margin: 4px;
        font-size: 12px;
        `;
            btc.onclick = () => {
                flutuant.parentElement.removeChild(flutuant);
                window.removeEventListener("click", evt_listen);
            };
            let btinvert = document.createElement("button");
            btinvert.type = "button";
            btinvert.innerText = "Inverter Seleção";
            btinvert.style.cssText = `
        margin: 4px;
        font-size: 12px;
        `;
            btinvert.onclick = () => {
                lista_retorno = new Set();
                for (let c of checkboxes) {
                    c.input.checked = !c.input.checked;
                    if (c.input.checked)
                        lista_retorno.add(c.label);
                }
            };
            let divbt = document.createElement("div");
            divbt.style.cssText = `
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: flex-end;
        align-items: center;
    `;
            divbt.appendChild(btinvert);
            divbt.appendChild(btc);
            divbt.appendChild(btok);
            flutuant.appendChild(divbt);
            parent_element === null || parent_element === void 0 ? void 0 : parent_element.appendChild(flutuant);
            setTimeout(() => {
                window.addEventListener("click", evt_listen);
            }, 300);
        });
    }
}
UteisService.ɵfac = function UteisService_Factory(t) { return new (t || UteisService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
UteisService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: UteisService, factory: UteisService.ɵfac, providedIn: "root" });


/***/ }),

/***/ "5ezT":
/*!**************************************************!*\
  !*** ./src/app/components/themes/theme_graph.ts ***!
  \**************************************************/
/*! exports provided: graph_theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graph_theme", function() { return graph_theme; });
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "cclQ");

const graph_theme = (target) => {
    if (target instanceof _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["ColorSet"]) {
        target.list = [
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#00d4ff"),
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#03344c"),
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#00ce75"),
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#008dce"),
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]("#a02fb7"),
        ];
    }
};


/***/ }),

/***/ "7HkS":
/*!**********************************************************!*\
  !*** ./src/app/pages/vendedores/vendedores.component.ts ***!
  \**********************************************************/
/*! exports provided: VendedoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VendedoresComponent", function() { return VendedoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_details_visitadetail_visitadetail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/details/visitadetail/visitadetail.component */ "hFHy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/connection.service */ "R8/k");
/* harmony import */ var src_app_services_uteis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/uteis.service */ "4y1v");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/menu/menu.component */ "0oYm");
/* harmony import */ var _components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/searchbar/searchbar.component */ "1ujl");
/* harmony import */ var _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/datepicker/datepicker.component */ "JZE2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/skeleton/skeleton.component */ "eO4b");
/* harmony import */ var _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/icon/icon.component */ "WaCx");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/spinner/spinner.component */ "e5sC");
















const _c0 = ["dti"];
const _c1 = ["dtf"];
const _c2 = ["shc"];
function VendedoresComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "searchbar", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onchange", function VendedoresComponent_div_4_Template_searchbar_onchange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); ctx_r9.term = $event; return ctx_r9.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "datepicker", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "datepicker", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function VendedoresComponent_div_4_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.notvisit = $event; })("change", function VendedoresComponent_div_4_Template_input_change_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.search(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Exibir Vendedor sem visitas?");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VendedoresComponent_div_4_Template_div_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.searchWs(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, " Pesquisar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r0.notvisit);
} }
function VendedoresComponent_skeleton_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "skeleton", 21);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cols", 8)("rows", 8);
} }
function VendedoresComponent_div_6_div_18_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r15.kmtotal + " km");
} }
function VendedoresComponent_div_6_div_18_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " 0 km");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VendedoresComponent_div_6_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VendedoresComponent_div_6_div_18_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const item_r15 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r19.open(item_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, VendedoresComponent_div_6_div_18_div_17_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, VendedoresComponent_div_6_div_18_div_18_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("(", item_r15.id, ") ", item_r15.nmvendedor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r15.clientes);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r15.clientesvisitados);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r15.visitas);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r15.sucessovisitas);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](13, 10, item_r15.dtprimeira, "dd/MM/yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](16, 13, item_r15.dtultima, "dd/MM/yyyy HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r15.kmtotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r15.kmtotal);
} }
function VendedoresComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Clientes Ativos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Clientes Contactados");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Contatos");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Contatos com sucesso");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Primeira Visita");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u00DAltima Visita");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Dist\u00E2ncia Percorrida");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, VendedoresComponent_div_6_div_18_Template, 19, 16, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.vendedores);
} }
function VendedoresComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VendedoresComponent_div_7_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r21.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "icon", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate4"](" ", ctx_r3.selected.kmtotal + " km", " | Vendedor: ", ctx_r3.selected.nmvendedor, " | Data Inicial: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 4, ctx_r3.dtini, "dd/MM/yyyy"), " | Data Final: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 7, ctx_r3.dtfim, "dd/MM/YYYY"), " ");
} }
function VendedoresComponent_div_8_div_18_icon_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "icon", 43);
} }
function VendedoresComponent_div_8_div_18_icon_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "icon", 44);
} }
function VendedoresComponent_div_8_div_18_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", item_r24.dsrecomendacao);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r24.dsproblema);
} }
function VendedoresComponent_div_8_div_18_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Sem Problemas!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VendedoresComponent_div_8_div_18_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Demarcado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VendedoresComponent_div_8_div_18_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "N\u00E3o Demarcado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VendedoresComponent_div_8_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VendedoresComponent_div_8_div_18_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const item_r24 = ctx.$implicit; const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r32.openVisit(item_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, VendedoresComponent_div_8_div_18_icon_19_Template, 1, 0, "icon", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, VendedoresComponent_div_8_div_18_icon_20_Template, 1, 0, "icon", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, VendedoresComponent_div_8_div_18_span_24_Template, 2, 2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, VendedoresComponent_div_8_div_18_span_25_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, VendedoresComponent_div_8_div_18_div_32_Template, 3, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, VendedoresComponent_div_8_div_18_div_33_Template, 3, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](36, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("(", item_r24.cdcliente, ") ", item_r24.nmcliente, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r24.nmpropriedade, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r24.dsveiculo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r24.dscultura, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r24.nmvendedor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r24.idmotivo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r24.idmotivo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r24.objetivo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r24.dsproblema);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r24.dsproblema);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r24.imagens, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r24.audios, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r23.isDemarcado(item_r24.demarcacaoprop));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r23.isDemarcado(item_r24.demarcacaoprop));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](36, 17, item_r24.dtvisita, "dd/MM/yyyy"), " ", item_r24.horavisita, "");
} }
function VendedoresComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Objetivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Problemas");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Imagens");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "\u00C1udios");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Demarca\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, VendedoresComponent_div_8_div_18_Template, 37, 20, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.visitas);
} }
function VendedoresComponent_spinner_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "spinner");
} }
class VendedoresComponent {
    constructor(conn, util, route) {
        this.conn = conn;
        this.util = util;
        this.route = route;
        this.loading = false;
        this.vendedores = [];
        this.aux = [];
        this.visitas = [];
        this.term = '';
        this.dtini = moment__WEBPACK_IMPORTED_MODULE_1__().subtract(30, 'days').format('YYYY/MM/DD');
        this.dtfim = moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY/MM/DD');
    }
    ngOnInit() {
        this.init();
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let di = this.route.snapshot.paramMap.get('dtini');
            let df = this.route.snapshot.paramMap.get('dtfim');
            let dtini = moment__WEBPACK_IMPORTED_MODULE_1__().subtract(30, 'days');
            let dtfim = moment__WEBPACK_IMPORTED_MODULE_1__();
            if (di && df) {
                dtini = moment__WEBPACK_IMPORTED_MODULE_1__(di, "DD-MM-YYYY");
                dtfim = moment__WEBPACK_IMPORTED_MODULE_1__(df, "DD-MM-YYYY");
            }
            this.loading = true;
            try {
                this.vendedores = yield this.conn
                    .getVendedores(dtini.format('YYYY/MM/DD'), dtfim.format('YYYY/MM/DD'))
                    .toPromise();
                this.aux = this.vendedores;
                console.log(this.vendedores);
            }
            catch (error) { }
            this.loading = false;
            setTimeout(() => {
                this.dtini = dtini.format("YYYY/MM/DD");
                this.dtfim = dtfim.format("YYYY/MM/DD");
                this.dtf.setValue(dtfim.format('DD/MM/YYYY'));
                this.dti.setValue(dtini.format('DD/MM/YYYY'));
                this.shc.value = this.term;
                this.search();
                this.getParams();
            }, 50);
        });
    }
    getParams() {
        let id = this.route.snapshot.paramMap.get('id');
        console.log(id);
        try {
            let item = this.vendedores.find((item) => item.id == id);
            this.open(item);
        }
        catch (error) { }
    }
    search() {
        if (this.term) {
            this.vendedores = this.aux.filter((item) => {
                return (String(item.nmvendedor)
                    .toUpperCase()
                    .indexOf(String(this.term).toUpperCase()) > -1);
            });
        }
        else {
            this.vendedores = this.aux;
        }
        if (!this.notvisit)
            this.vendedores = this.vendedores.filter((item) => Number(item.visitas) > 0);
    }
    searchWs() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let dtini = moment__WEBPACK_IMPORTED_MODULE_1__(this.dti.value, 'DD/MM/YYYY');
            let dtfim = moment__WEBPACK_IMPORTED_MODULE_1__(this.dtf.value, 'DD/MM/YYYY');
            this.loading = true;
            try {
                this.vendedores = yield this.conn
                    .getVendedores(dtini.format('YYYY/MM/DD'), dtfim.format('YYYY/MM/DD'))
                    .toPromise();
                this.aux = this.vendedores;
                console.log(this.vendedores);
            }
            catch (error) { }
            this.loading = false;
            setTimeout(() => {
                this.dtini = dtini.format('YYYY/MM/DD');
                this.dtfim = dtfim.format('YYYY/MM/DD');
                this.dtf.setValue(dtfim.format('DD/MM/YYYY'));
                this.dti.setValue(dtini.format('DD/MM/YYYY'));
                this.shc.value = this.term;
                this.search();
            }, 300);
        });
    }
    getVendedores() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.vendedores = yield this.conn
                .getVendedores(this.dtini, this.dtfim)
                .toPromise();
            this.aux = this.vendedores;
            console.log(this.vendedores);
        });
    }
    getKM(item) {
        try {
            return Number(item.kmfim) - Number(item.km);
        }
        catch (error) {
            return 0;
        }
    }
    openVisit(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.util.modal(src_app_details_visitadetail_visitadetail_component__WEBPACK_IMPORTED_MODULE_2__["VisitadetailComponent"], { data: item });
        });
    }
    clear() {
        this.visitas = [];
        this.selected = null;
        this.util.go('vendedores');
    }
    isDemarcado(demarcacao) {
        try {
            let res = JSON.parse(demarcacao);
            return 'position' in res;
        }
        catch (error) {
            return false;
        }
    }
    open(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.selected = item;
            this.loading = true;
            console.log(item);
            try {
                this.visitas = yield this.conn
                    .getVisitas(this.dtini, this.dtfim, null, item.idusuario)
                    .toPromise();
                console.log(this.visitas);
            }
            catch (error) { }
            this.loading = false;
        });
    }
    kmCalc(item) {
        try {
            return Number(item.kmfechamento) - Number(item.kmabertura);
        }
        catch (error) {
            return 0;
        }
    }
    instant() { }
    checkDate(date) {
        let mnow = moment__WEBPACK_IMPORTED_MODULE_1__().get('months');
        let mdate = moment__WEBPACK_IMPORTED_MODULE_1__(date, 'YYYY/MM/DD').get('months');
        if (mnow - mdate <= 1)
            return '#51ef51';
        else if (mnow - mdate < 3)
            return '#f2ff6b';
        else
            return '#ff6959';
    }
    getPercent(a, b) {
        if (Number(b) > 0)
            return Number(Number(a) / Number(b));
        else
            return 0;
    }
}
VendedoresComponent.ɵfac = function VendedoresComponent_Factory(t) { return new (t || VendedoresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_4__["ConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_uteis_service__WEBPACK_IMPORTED_MODULE_5__["UteisService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"])); };
VendedoresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: VendedoresComponent, selectors: [["app-vendedores"]], viewQuery: function VendedoresComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.dti = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.dtf = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.shc = _t.first);
    } }, decls: 11, vars: 6, consts: [["id", "container"], [1, "struct"], ["class", "search", "style", "display: flex; align-items: center", 4, "ngIf"], ["type", "table", 3, "cols", "rows", 4, "ngIf"], ["class", "table tablestl", "style", "--cs: 320px repeat(7, 1fr)", 4, "ngIf"], [4, "ngIf"], ["class", "table", "style", "--cs: 2fr 1fr repeat(6, 140px)", 4, "ngIf"], [1, "search", 2, "display", "flex", "align-items", "center"], [2, "width", "30%", "padding", "4px"], ["placeholder", "Pesquisar vendedor...", 3, "onchange"], ["shc", ""], [2, "width", "20%", "padding", "4px"], ["placeholder", "Data Inicial"], ["dti", ""], ["placeholder", "Data Final"], ["dtf", ""], [1, "checkbox"], ["type", "checkbox", "id", "scales", "name", "scales", 3, "ngModel", "ngModelChange", "change"], ["for", "scales", 1, "noselect"], [2, "width", "15%", "padding", "4px"], [1, "button", 2, "width", "auto", "height", "26px", 3, "click"], ["type", "table", 3, "cols", "rows"], [1, "table", "tablestl", 2, "--cs", "320px repeat(7, 1fr)"], ["table", "true", 1, "toptable"], [1, "label"], [1, "label", "jc"], ["class", "bodytable", "table", "true", 3, "click", 4, "ngFor", "ngForOf"], ["table", "true", 1, "bodytable", 3, "click"], ["class", "label jc", 4, "ngIf"], [1, "chip", 3, "click"], ["height", "20px", "width", "20px", "icon", "/assets/icons/back.svg"], [1, "table", 2, "--cs", "2fr 1fr repeat(6, 140px)"], [1, "title"], [1, "sub"], ["height", "20px", "width", "20px", "icon", "/assets/icons/house.png"], ["height", "20px", "width", "20px", "icon", "/assets/icons/car.png"], ["height", "20px", "width", "20px", "icon", "/assets/icons/leaf.png"], ["height", "32px", "width", "32px", "icon", "/assets/icons/success.svg", 4, "ngIf"], ["height", "32px", "width", "32px", "icon", "/assets/icons/fail.svg", 4, "ngIf"], ["height", "32px", "width", "32px", "icon", "/assets/icons/bug.png"], ["style", "color: var(--color-red)", "matTooltipPosition", "above", 3, "matTooltip", 4, "ngIf"], ["height", "32px", "width", "32px", "icon", "/assets/icons/image.svg"], ["height", "32px", "width", "32px", "icon", "/assets/icons/audio.svg"], ["height", "32px", "width", "32px", "icon", "/assets/icons/success.svg"], ["height", "32px", "width", "32px", "icon", "/assets/icons/fail.svg"], ["matTooltipPosition", "above", 2, "color", "var(--color-red)", 3, "matTooltip"], ["height", "32px", "width", "32px", "icon", "/assets/icons/locg.svg"], ["height", "32px", "width", "32px", "icon", "/assets/icons/loc.svg"]], template: function VendedoresComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Visitas por Vendedores");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, VendedoresComponent_div_4_Template, 17, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, VendedoresComponent_skeleton_5_Template, 1, 2, "skeleton", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, VendedoresComponent_div_6_Template, 19, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, VendedoresComponent_div_7_Template, 6, 10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, VendedoresComponent_div_8_Template, 19, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, VendedoresComponent_spinner_10_Template, 1, 0, "spinner", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading && !ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.visitas.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.visitas.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_9__["SearchbarComponent"], _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_10__["DatepickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _components_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_12__["SkeletonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_13__["IconComponent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_15__["SpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]], styles: [".dtultima[_ngcontent-%COMP%] {\n  padding: 4px;\n  border-radius: 6px;\n  background-color: #0ae70a;\n}\n\n.checkbox[_ngcontent-%COMP%] {\n  width: 200px;\n  text-align: center;\n  font-size: 12px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n  border-radius: 4px;\n  background: #fff;\n  box-shadow: 1px 1px 5px 0px #00000033;\n  font-weight: lighter;\n  height: 40px;\n  margin: 3px;\n  padding-left: 8px;\n}\n\n.chip[_ngcontent-%COMP%] {\n  background: var(--color-red);\n  padding: 4px;\n  font-size: 12px;\n  color: #fff;\n  font-weight: lighter;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 30px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-left: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  cursor: pointer;\n}\n\n.chip[_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n  padding-right: 12px;\n}\n\n.chip[_ngcontent-%COMP%]:hover {\n  background: var(--color-red-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ZlbmRlZG9yZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQUU7RUFDRSxtQkFBQTtBQUVKOztBQUNBO0VBQ0Usa0NBQUE7QUFFRiIsImZpbGUiOiJ2ZW5kZWRvcmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmR0dWx0aW1hIHtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMCwgMjMxLCAxMCk7XHJcbn1cclxuXHJcbi5jaGVja2JveCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAwcHggIzAwMDAwMDMzO1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW46IDNweDtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG5cclxuLmNoaXAge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXJlZCk7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMTRweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGljb257XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gIH1cclxufVxyXG4uY2hpcDpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1yZWQtbGlnaHQpO1xyXG59Il19 */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    URL_SERVER_PY: "https://wsvisitas.malbizer.com.br/",
    GOOGLE_API_MAPS_KEY: "AIzaSyBkAZLUXirldCuw83GGdTQw1qQU7g_IOxs",
    GOOGLE_MAP_ID: "9ee8f7764b320e5f95c2e899",
    // URL_SERVER_PY: "http://localhost:5000/",
    user_test: "5",
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

/***/ "BPMd":
/*!******************************************************!*\
  !*** ./src/app/pages/clientes/clientes.component.ts ***!
  \******************************************************/
/*! exports provided: ClientesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientesComponent", function() { return ClientesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connection.service */ "R8/k");
/* harmony import */ var src_app_services_uteis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/uteis.service */ "4y1v");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/searchbar/searchbar.component */ "1ujl");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/datepicker/datepicker.component */ "JZE2");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/menu/menu.component */ "0oYm");
/* harmony import */ var _components_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/skeleton/skeleton.component */ "eO4b");
/* harmony import */ var _components_progress_progress_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/progress/progress.component */ "1VCC");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/spinner/spinner.component */ "e5sC");














const _c0 = ["dti"];
const _c1 = ["dtf"];
function ClientesComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const c_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", c_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", c_r6.label, " ");
} }
function ClientesComponent_skeleton_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "skeleton", 17);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cols", 4)("rows", 10);
} }
const _c2 = function (a0) { return { background: a0 }; };
function ClientesComponent_div_17_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClientesComponent_div_17_div_10_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const item_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r9.open(item_r8.idcliente); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "progressbar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("(", item_r8.cdcliente, ") ", item_r8.nmcliente, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("(", item_r8.idvendedor, ") ", item_r8.vendedor, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c2, ctx_r7.checkDate(item_r8.dtultima)));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](13, 8, item_r8.dtultima, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r7.getPer(item_r8) * 100, " %");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r7.getPer(item_r8));
} }
function ClientesComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClientesComponent_div_17_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.orderBy("nmcliente"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClientesComponent_div_17_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.orderBy("vendedor"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Representante");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ClientesComponent_div_17_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r14.orderBy("dtultima", "date"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " \u00DAltima Visita ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Visitas Bem-sucedidas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ClientesComponent_div_17_div_10_Template, 19, 13, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.list);
} }
function ClientesComponent_spinner_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "spinner");
} }
class ClientesComponent {
    constructor(conn, util, route) {
        this.conn = conn;
        this.util = util;
        this.route = route;
        this.loading = false;
        this.list = [];
        this.aux = [];
        this.ordered = {};
        this.criterios = [
            { id: 'nmcliente', label: 'Cliente' },
            { id: 'vendedor', label: 'Vendedor' },
        ];
        this.term = '';
        this.criter = 'nmcliente';
    }
    ngOnInit() {
        this.getData();
        this.filtertimer = setInterval(() => {
            this.instant();
        }, 100);
    }
    ngOnDestroy() {
        console.log("Limpou intervalo do instant!");
        clearInterval(this.filtertimer);
    }
    filterDate() {
        try {
            if (this.dti.value.length == 10 && this.dtf.value.length == 10) {
                this.list = this.list.filter((item) => {
                    return this.util.dateInRange(this.dti.value, this.dtf.value, moment__WEBPACK_IMPORTED_MODULE_1__(item.dtultima, 'YYYY/MM/DD').format('DD/MM/YYYY'));
                });
            }
        }
        catch (error) {
            console.log('wait date...');
        }
    }
    getPer(item) {
        return Number(item.success) / Number(item.visitas);
    }
    orderBy(column, tp = null) {
        this.ordered[column] = this.ordered[column] == 1 ? -1 : 1;
        this.list = this.list.sort((a, b) => {
            let ri = a[column];
            let rx = b[column];
            if (tp == 'number') {
                ri = tp ? Number(a[column]) : a[column];
                rx = tp ? Number(b[column]) : b[column];
            }
            else if (tp == 'date') {
                ri = tp ? moment__WEBPACK_IMPORTED_MODULE_1__(a[column], 'YYYY/MM/DD').valueOf() : a[column];
                rx = tp ? moment__WEBPACK_IMPORTED_MODULE_1__(b[column], 'YYYY/MM/DD').valueOf() : b[column];
            }
            if (ri > rx)
                return -1 * this.ordered[column];
            else if (ri < rx)
                return 1 * this.ordered[column];
            else
                return 0;
        });
    }
    open(idcliente) {
        this.route.navigate(['/visitacliente', idcliente]);
    }
    checkDate(date) {
        let mnow = moment__WEBPACK_IMPORTED_MODULE_1__().get('months');
        let mdate = moment__WEBPACK_IMPORTED_MODULE_1__(date, 'YYYY/MM/DD').get('months');
        if (mnow - mdate <= 1)
            return '#51ef51';
        else if (mnow - mdate < 3)
            return '#f2ff6b';
        else
            return '#ff6959';
    }
    instant() {
        if (this.term) {
            this.list = this.aux.filter((item) => {
                return (String(item[this.criter])
                    .toUpperCase()
                    .indexOf(String(this.term).toUpperCase()) > -1);
            });
        }
        else {
            this.list = this.aux;
        }
        try {
            if (this.dti.value.length == 10 && this.dtf.value.length == 10)
                this.list = this.list.filter((item) => {
                    try {
                        let dt = moment__WEBPACK_IMPORTED_MODULE_1__(item.dtultima, 'YYYY/MM/DD').format('DD/MM/YYYY');
                        return this.util.dateInRange(this.dti.value, this.dtf.value, dt);
                    }
                    catch (_) {
                        return true;
                    }
                });
        }
        catch (e) {
        }
    }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            try {
                this.list = yield this.conn.getVisitasByClient().toPromise();
                this.aux = this.list;
                console.log(this.list);
                this.orderBy('dtultima', 'date');
            }
            catch (error) { }
            this.loading = false;
            setTimeout(() => {
                this.dti.value = moment__WEBPACK_IMPORTED_MODULE_1__().subtract(30, 'days').format("DD/MM/YYYY");
                this.dtf.value = moment__WEBPACK_IMPORTED_MODULE_1__().format("DD/MM/YYYY");
            }, 300);
        });
    }
}
ClientesComponent.ɵfac = function ClientesComponent_Factory(t) { return new (t || ClientesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_uteis_service__WEBPACK_IMPORTED_MODULE_4__["UteisService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ClientesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ClientesComponent, selectors: [["app-clientes"]], viewQuery: function ClientesComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dti = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dtf = _t.first);
    } }, decls: 20, vars: 5, consts: [["id", "container"], [1, "struct"], [1, "filtros"], [2, "width", "33%", "padding", "4px"], [3, "onchange"], [1, "select", 2, "width", "20%"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [2, "width", "15%", "padding", "4px"], ["placeholder", "Data Inicial"], ["dti", ""], ["placeholder", "Data Final"], ["dtf", ""], ["type", "table", 3, "cols", "rows", 4, "ngIf"], ["class", "table", "style", "--cs: 1fr 1fr 250px 250px", 4, "ngIf"], [4, "ngIf"], [3, "value"], ["type", "table", 3, "cols", "rows"], [1, "table", 2, "--cs", "1fr 1fr 250px 250px"], ["table", "true", 1, "toptable"], [1, "label", 3, "click"], [1, "label", "jc", 3, "click"], [1, "label", "jc"], ["class", "bodytable", "table", "true", 3, "click", 4, "ngFor", "ngForOf"], ["table", "true", 1, "bodytable", 3, "click"], [1, "label"], [1, "title"], [1, "title", "dtultima", 3, "ngStyle"], [2, "margin-right", "12px"]], template: function ClientesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Visitas por Clientes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "searchbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onchange", function ClientesComponent_Template_searchbar_onchange_6_listener($event) { ctx.term = $event; return ctx.instant(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ClientesComponent_Template_select_ngModelChange_8_listener($event) { return ctx.criter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ClientesComponent_option_9_Template, 2, 2, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "datepicker", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "datepicker", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ClientesComponent_skeleton_16_Template, 1, 2, "skeleton", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ClientesComponent_div_17_Template, 11, 1, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ClientesComponent_spinner_19_Template, 1, 0, "spinner", 15);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.criter);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.criterios);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_6__["SearchbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_9__["DatepickerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_10__["MenuComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_z"], _components_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_11__["SkeletonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _components_progress_progress_component__WEBPACK_IMPORTED_MODULE_12__["ProgressComponent"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__["SpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: [".dtultima[_ngcontent-%COMP%] {\n  padding: 4px;\n  border-radius: 6px;\n  background-color: #0ae70a;\n}\n\n.filtros[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-content: space-around;\n  justify-content: flex-start;\n  align-items: center;\n  margin-left: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6ImNsaWVudGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmR0dWx0aW1hIHtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMCwgMjMxLCAxMCk7XHJcbn1cclxuXHJcbi5maWx0cm9zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMTJweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/connection.service */ "R8/k");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_uteis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/uteis.service */ "4y1v");
/* harmony import */ var _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/icon/icon.component */ "WaCx");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/spinner/spinner.component */ "e5sC");









function LoginComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Entrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Entrando");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_spinner_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "spinner", 15);
} }
class LoginComponent {
    constructor(conn, route, util) {
        this.conn = conn;
        this.route = route;
        this.util = util;
        this.user = '';
        this.pass = '';
        this.loading = false;
    }
    ngOnInit() {
        this.conn.user = null;
    }
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            try {
                yield this.conn.login(this.user, this.pass);
                if (this.conn.user) {
                    if (this.conn.user.idsistema) {
                        this.route.navigate(['/dashboard']);
                    }
                    else {
                        this.util.alertDanger('Erro ao logar!');
                    }
                }
                else {
                    this.util.alertDanger('Erro ao logar!');
                }
            }
            catch (error) { }
            this.loading = false;
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_2__["ConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_uteis_service__WEBPACK_IMPORTED_MODULE_4__["UteisService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 24, vars: 9, consts: [["id", "login"], [1, "login"], [1, "formlogin"], ["icon", "/assets/images/agrodadoscube.svg", "height", "280px", "width", "280px"], [1, "inputlogin"], ["icon", "/assets/icons/user_login.svg", "height", "20px", "width", "20px"], ["placeholder", "Usu\u00E1rio", 3, "ngModel", "disabled", "ngModelChange"], ["icon", "/assets/icons/pass_login.svg", "height", "20px", "width", "20px"], ["placeholder", "Senha", "type", "password", 3, "ngModel", "disabled", "ngModelChange", "keyup.enter"], [1, "button", "btlg", 2, "height", "28px", "width", "100%", 3, "click"], [4, "ngIf"], ["class", "loading-dots", 4, "ngIf"], [1, "version"], ["message", "Entrando...", 4, "ngIf"], [1, "loading-dots"], ["message", "Entrando..."]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.user = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_15_listener($event) { return ctx.pass = $event; })("keyup.enter", function LoginComponent_Template_input_keyup_enter_15_listener() { return !ctx.loading && ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_18_listener() { return !ctx.loading && ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LoginComponent_span_19_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, LoginComponent_span_20_Template, 2, 0, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Vers\u00E3o: 1.2.3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, LoginComponent_spinner_23_Template, 1, 0, "spinner", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.user)("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.pass)("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("btlg-loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_8__["SpinnerComponent"]], styles: ["#login[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  z-index: 50;\n  background: url(\"/assets/images/back.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-content: space-around;\n  justify-content: space-around;\n  align-items: center;\n}\n#login[_ngcontent-%COMP%]   .login[_ngcontent-%COMP%] {\n  background-color: rgba(202, 234, 249, 0.1);\n  backdrop-filter: blur(5px);\n  border-radius: 15px;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-content: space-around;\n  justify-content: center;\n  align-items: center;\n  padding: 28px;\n}\n#login[_ngcontent-%COMP%]   .formlogin[_ngcontent-%COMP%] {\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-content: space-around;\n  justify-content: center;\n  align-items: center;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 25px;\n  color: white;\n  text-align: center;\n  line-height: 35px;\n}\n.inputlogin[_ngcontent-%COMP%] {\n  outline: none;\n  background-color: unset;\n  border: unset;\n  width: 100%;\n  width: -webkit-fill-available;\n  width: -moz-available;\n  width: fill-available;\n  font-family: Poppins;\n  color: var(--color-primary);\n  background-color: var(--color-primary-contrast);\n  resize: none;\n  box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  overflow: hidden;\n  margin: -4px;\n}\n.inputlogin[_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n  margin-left: 4px;\n  margin-right: 4px;\n  padding-right: 4px;\n  border-right: 0.5pt solid #cecece;\n}\n.inputlogin[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill, .inputlogin[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill:hover, .inputlogin[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill:focus, .inputlogin[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-webkit-autofill:active {\n  -webkit-box-shadow: 0 0 0 30px white inset !important;\n}\n.inputlogin[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  outline: none;\n  background-color: unset;\n  border: unset;\n  width: 100%;\n  width: -webkit-fill-available;\n  width: -moz-available;\n  width: fill-available;\n  font-family: Poppins;\n  color: var(--color-primary);\n  background-color: var(--color-primary-contrast);\n  padding: 12px;\n  resize: none;\n}\n.inputlogin[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btlg-loading[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  cursor: not-allowed !important;\n  pointer-events: none;\n}\n.loading-dots[_ngcontent-%COMP%]::after {\n  content: \"\";\n  animation: dots 1.2s steps(3, end) infinite;\n}\n@keyframes dots {\n  0% {\n    content: \"\";\n  }\n  33% {\n    content: \".\";\n  }\n  66% {\n    content: \"..\";\n  }\n  100% {\n    content: \"...\";\n  }\n}\n.version[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 12px;\n  right: 12px;\n  background-color: var(--color-primary);\n  padding: 8px;\n  font-size: 12px;\n  color: var(--color-primary-contrast);\n  border-radius: 4px;\n  box-shadow: 2px 2px 5px #504f4f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDBDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUFFO0VBQ0UsMENBQUE7RUFFQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFFSjtBQUFFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRUo7QUFFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGO0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFBQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQ0FBQTtFQUNBLFlBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUFFO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUFFSjtBQUFFOzs7O0VBSUUscURBQUE7QUFFSjtBQUFFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQUEscUJBQUE7RUFDQSxvQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0NBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQUk7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFFTjtBQUdBO0VBQ0UsWUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUFBRjtBQUdBO0VBQ0UsV0FBQTtFQUNBLDJDQUFBO0FBQUY7QUFHQTtFQUNFO0lBQU8sV0FBQTtFQUNQO0VBQUE7SUFBTyxZQUFBO0VBR1A7RUFGQTtJQUFPLGFBQUE7RUFLUDtFQUpBO0lBQU8sY0FBQTtFQU9QO0FBQ0Y7QUFMQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFPRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNsb2dpbiB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDUwO1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzL2JhY2suanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5sb2dpbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyIDIzNCAyNDkgLyAxMCUpO1xyXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjhweDtcclxuICB9XHJcbiAgLmZvcm1sb2dpbntcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG59XHJcblxyXG4uaW5wdXRsb2dpbiB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcclxuICBib3JkZXI6IHVuc2V0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gIHdpZHRoOiBmaWxsLWF2YWlsYWJsZTtcclxuICBmb250LWZhbWlseTogUG9wcGlucztcclxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDBweCByZ2IoMCAwIDAgLyAyMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG1hcmdpbjogLTRweDtcclxuICBpY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDRweDtcclxuICAgIGJvcmRlci1yaWdodDogMC41cHQgc29saWQgI2NlY2VjZTtcclxuICB9XHJcbiAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbCxcclxuICBpbnB1dDotd2Via2l0LWF1dG9maWxsOmhvdmVyLFxyXG4gIGlucHV0Oi13ZWJraXQtYXV0b2ZpbGw6Zm9jdXMsXHJcbiAgaW5wdXQ6LXdlYmtpdC1hdXRvZmlsbDphY3RpdmUge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMCAzMHB4IHdoaXRlIGluc2V0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGlucHV0IHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcclxuICAgIGJvcmRlcjogdW5zZXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gICAgd2lkdGg6IGZpbGwtYXZhaWxhYmxlO1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcblxyXG4gICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5idGxnLWxvYWRpbmcge1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5sb2FkaW5nLWRvdHM6OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBhbmltYXRpb246IGRvdHMgMS4ycyBzdGVwcygzLCBlbmQpIGluZmluaXRlO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGRvdHMge1xyXG4gIDAlICAgeyBjb250ZW50OiAnJzsgfVxyXG4gIDMzJSAgeyBjb250ZW50OiAnLic7IH1cclxuICA2NiUgIHsgY29udGVudDogJy4uJzsgfVxyXG4gIDEwMCUgeyBjb250ZW50OiAnLi4uJzsgfVxyXG59XHJcblxyXG4udmVyc2lvbntcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAxMnB4O1xyXG4gIHJpZ2h0OiAxMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAycHggMnB4IDVweCAjNTA0ZjRmO1xyXG59Il19 */"] });


/***/ }),

/***/ "HKVK":
/*!***********************************************************!*\
  !*** ./src/app/components/barchart/barchart.component.ts ***!
  \***********************************************************/
/*! exports provided: BarchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarchartComponent", function() { return BarchartComponent; });
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "cclQ");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "xJfa");
/* harmony import */ var _amcharts_amcharts4_themes_frozen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/themes/frozen */ "C1vI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["useTheme"](_amcharts_amcharts4_themes_frozen__WEBPACK_IMPORTED_MODULE_2__["default"]);
class BarchartComponent {
    constructor() {
        this.data = [];
        this.id = 'barchart';
        this.xlabel = '';
        this.ylabel = '';
    }
    ngOnDestroy() {
        this.chart.dispose();
    }
    ngOnInit() {
        setTimeout(() => {
            this.createChart();
        }, 30);
    }
    createChart() {
        this.chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["create"](this.id, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["XYChart"]);
        this.chart.logo.height = -15000;
        // Add data
        this.chart.data = this.data;
        // Create axes
        let categoryAxis = this.chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["CategoryAxis"]());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.dataFields.category = this.xlabel;
        categoryAxis.renderer.minGridDistance = 60;
        categoryAxis.renderer.inversed = true;
        categoryAxis.renderer.grid.template.disabled = true;
        categoryAxis.renderer.labels.template.fill = '#7c888e';
        categoryAxis.renderer.labels.template.fontSize = 12;
        categoryAxis.renderer.grid.template.strokeWidth = 0;
        categoryAxis.renderer.grid.template.color = 0;
        let valueAxis = this.chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["ValueAxis"]());
        valueAxis.min = 0;
        valueAxis.extraMax = 0.1;
        valueAxis.renderer.labels.template.fill = '#7c888e';
        valueAxis.renderer.labels.template.fontSize = 12;
        valueAxis.renderer.grid.template.strokeWidth = 0.5;
        valueAxis.renderer.grid.template.color = 0;
        // Create series
        this.createSeries();
        if (this.title) {
            let title = this.chart.titles.create();
            title.text = this.title;
            title.fontSize = 18;
            title.fill = "#03344c";
            title.marginTop = 12;
            title.marginBottom = 12;
        }
    }
    createSeries() {
        let series = this.chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["ColumnSeries"]());
        series.dataFields.categoryX = this.xlabel;
        series.dataFields.valueY = this.ylabel;
        series.tooltipText = '{valueY.value}';
        series.columns.template.strokeOpacity = 0;
        series.columns.template.column.cornerRadiusTopRight = 10;
        series.columns.template.column.cornerRadiusTopLeft = 10;
        //series.interpolationDuration = 1500;
        //series.interpolationEasing = am4core.ease.linear;
        let labelBullet = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["LabelBullet"]());
        labelBullet.label.verticalCenter = 'bottom';
        labelBullet.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]('#01a3c4');
        labelBullet.label.fontSize = 12;
        labelBullet.label.dy = -10;
        labelBullet.label.text = "{values.valueY.workingValue.formatNumber('#.')}";
    }
}
BarchartComponent.ɵfac = function BarchartComponent_Factory(t) { return new (t || BarchartComponent)(); };
BarchartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BarchartComponent, selectors: [["barchart"]], inputs: { data: "data", id: "id", xlabel: "xlabel", ylabel: "ylabel", title: "title" }, decls: 2, vars: 1, consts: [[1, "chartdiv"], ["chartdiv", ""]], template: function BarchartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", ctx.id);
    } }, styles: [".chartdiv[_ngcontent-%COMP%] {\n  width: auto;\n  height: 98%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2JhcmNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJiYXJjaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFydGRpdntcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA5OCU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Hkk2":
/*!***************************************************************!*\
  !*** ./src/app/components/inlinespin/inlinespin.component.ts ***!
  \***************************************************************/
/*! exports provided: InlinespinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlinespinComponent", function() { return InlinespinComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class InlinespinComponent {
    constructor() {
        this.size = "56px";
    }
    ngOnInit() {
    }
}
InlinespinComponent.ɵfac = function InlinespinComponent_Factory(t) { return new (t || InlinespinComponent)(); };
InlinespinComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InlinespinComponent, selectors: [["inlinespin"]], inputs: { size: "size" }, decls: 2, vars: 4, consts: [["id", "ilinespin"], [1, "inlinespin"]], template: function InlinespinComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.size)("height", ctx.size);
    } }, styles: ["#ilinespin[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#ilinespin[_ngcontent-%COMP%]   .inlinespin[_ngcontent-%COMP%] {\n  background: url(\"/assets/images/logoicon.svg\");\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  animation: revoltz 1.2s infinite;\n  margin: 12px;\n  margin-left: auto;\n  margin-right: auto;\n}\n@keyframes revoltz {\n  0% {\n    transform: rotateY(0deg);\n  }\n  100% {\n    transform: rotateY(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2lubGluZXNwaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0o7QUFBRTtFQUNFLDhDQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUVKO0FBRUE7RUFDRTtJQUNFLHdCQUFBO0VBQ0Y7RUFDQTtJQUNFLDBCQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJpbmxpbmVzcGluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2lsaW5lc3BpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAuaW5saW5lc3BpbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9sb2dvaWNvbi5zdmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYW5pbWF0aW9uOiByZXZvbHR6IDEuMnMgaW5maW5pdGU7XHJcbiAgICBtYXJnaW46IDEycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcmV2b2x0eiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgzNjBkZWcpO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "JZE2":
/*!***************************************************************!*\
  !*** ./src/app/components/datepicker/datepicker.component.ts ***!
  \***************************************************************/
/*! exports provided: DatepickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatepickerComponent", function() { return DatepickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["shdropsh"];
function DatepickerComponent_div_5_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", w_r6, " ");
} }
const _c1 = function (a0) { return { hoje: a0 }; };
function DatepickerComponent_div_5_div_8_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_div_5_div_8_div_2_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const day_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.select(day_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, day_r7 == ctx_r8.diaatual && ctx_r8.mesatual == ctx_r8.meshoje));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", day_r7, " ");
} }
function DatepickerComponent_div_5_div_8_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
function DatepickerComponent_div_5_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatepickerComponent_div_5_div_8_div_2_div_1_Template, 2, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatepickerComponent_div_5_div_8_div_2_div_2_Template, 1, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const day_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", day_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !day_r7);
} }
function DatepickerComponent_div_5_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatepickerComponent_div_5_div_8_div_1_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatepickerComponent_div_5_div_8_div_2_Template, 3, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.semana);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.days);
} }
function DatepickerComponent_div_5_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_div_5_div_9_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const mes_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.changeMonth(mes_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mes_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mes_r15.mes, " ");
} }
function DatepickerComponent_div_5_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatepickerComponent_div_5_div_9_div_1_Template, 3, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.meses);
} }
function DatepickerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_div_5_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.previousMonth(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "<");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_div_5_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.selectmonth = !ctx_r20.selectmonth; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_div_5_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.nextMonth(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ">");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DatepickerComponent_div_5_div_8_Template, 3, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DatepickerComponent_div_5_div_9_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r1.width);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx_r1.topback)("color", ctx_r1.topcolor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r1.meses[ctx_r1.mesatual - 1].mes, " | ", ctx_r1.anoatual, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.selectmonth);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectmonth);
} }
class DatepickerComponent {
    constructor(eRef) {
        this.eRef = eRef;
        this.keyvalue = 'value';
        this.keylabel = 'label';
        this.show = false;
        this.days = [];
        this.meses = [
            { mes: 'janeiro', id: 1 },
            { mes: 'fevereiro', id: 2 },
            { mes: 'março', id: 3 },
            { mes: 'abril', id: 4 },
            { mes: 'maio', id: 5 },
            { mes: 'junho', id: 6 },
            { mes: 'julho', id: 7 },
            { mes: 'agosto', id: 8 },
            { mes: 'setembro', id: 9 },
            { mes: 'outubro', id: 10 },
            { mes: 'novembro', id: 11 },
            { mes: 'dezembro', id: 12 },
        ];
        this.semana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        this.meshoje = new Date().getMonth() + 1;
        this.mesatual = new Date().getMonth() + 1;
        this.diaatual = new Date().getDate();
        this.anoatual = new Date().getFullYear();
        this.selectmonth = false;
        this.placeholder = 'dd/mm/aaaa';
        this.color = '#161414fd';
        this.topback = 'var(--color-secondary)';
        this.topcolor = '#ffffff';
        this.width = 'inherit';
        this.margin = '0';
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.calcDays();
    }
    ngOnInit() {
        try {
            if (this.format) {
                if (this.format == 'ymd') {
                    let d = this.value.split('-');
                    this.value = d[2] + '/' + d[1] + '/' + d[0];
                }
            }
        }
        catch (e) { }
    }
    focus(evt) {
        this.show = true;
        this.mesatual = new Date().getMonth() + 1;
        this.diaatual = new Date().getDate();
        this.anoatual = new Date().getFullYear();
        this.selectmonth = false;
    }
    setFocus() {
        this.shdropsh.nativeElement.focus();
        setTimeout(() => {
            this.focus(null);
        }, 200);
    }
    select(day) {
        this.day = String(day).padStart(2, '0');
        this.month = String(this.mesatual).padStart(2, '0');
        this.value = `${this.day}/${this.month}/${this.anoatual}`;
        this.event.emit(this.value);
        this.show = false;
    }
    setValue(value) {
        this.value = value;
    }
    nextMonth() {
        if (!this.selectmonth) {
            if (this.mesatual < 12) {
                this.mesatual++;
            }
            else {
                this.mesatual = 1;
                this.anoatual++;
            }
        }
        else {
            this.anoatual++;
        }
        this.calcDays();
    }
    previousMonth() {
        if (!this.selectmonth) {
            if (this.mesatual > 1) {
                this.mesatual--;
            }
            else {
                this.mesatual = 12;
                this.anoatual--;
            }
        }
        else {
            this.anoatual--;
        }
        this.calcDays();
    }
    calcDays() {
        var d = new Date(this.anoatual, this.mesatual, 0);
        var first = new Date(this.anoatual, this.mesatual - 1, 1);
        // console.log(first);
        // console.log(first.getDay());
        this.days = [];
        for (let i = 0; i < first.getDay(); i++) {
            this.days.push('');
        }
        for (let i = 1; i <= d.getDate(); i++) {
            this.days.push(i);
        }
    }
    changeMonth(mes) {
        this.mesatual = mes.id;
        setTimeout(() => {
            this.selectmonth = !this.selectmonth;
        }, 50);
    }
    regex(evt) {
        this.value = this.value.replace(/[^0-9/]/g, '');
        if (evt.key != 'Backspace') {
            if (this.value) {
                this.value = this.value
                    .split('')
                    .filter((str) => str != '/')
                    .join('');
                if (this.value.length >= 2) {
                    this.value =
                        this.value.substring(0, 2) +
                            '/' +
                            this.value.substring(2, this.value.length);
                }
                if (this.value.length >= 5) {
                    this.value =
                        this.value.substring(0, 5) +
                            '/' +
                            this.value.substring(5, this.value.length);
                }
                if (this.value.length > 10) {
                    this.value = this.value.substring(0, 10);
                }
                if (this.value.length >= 5) {
                    this.mesatual = Number(this.value.substring(3, 5));
                    this.calcDays();
                }
                if (this.value.length == 10) {
                    this.anoatual = Number(this.value.substring(6, this.value.length));
                    this.calcDays();
                    this.event.emit(this.value);
                }
            }
        }
    }
    onChange(evt) {
        if (evt.key == 'Tab') {
            this.show = false;
            if (this.value) {
                this.event.emit(this.value);
            }
        }
    }
    lostFocus(evt) {
        this.show = this.eRef.nativeElement.contains(evt.target);
        if (!this.eRef.nativeElement.contains(evt.target)) {
            if (this.value) {
                this.event.emit(this.value);
            }
        }
    }
}
DatepickerComponent.ɵfac = function DatepickerComponent_Factory(t) { return new (t || DatepickerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DatepickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatepickerComponent, selectors: [["datepicker"]], viewQuery: function DatepickerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.shdropsh = _t.first);
    } }, hostBindings: function DatepickerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_click_HostBindingHandler($event) { return ctx.lostFocus($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { value: "value", format: "format", keyvalue: "keyvalue", keylabel: "keylabel", placeholder: "placeholder", color: "color", topback: "topback", topcolor: "topcolor", width: "width", margin: "margin", auto: "auto" }, outputs: { event: "event" }, decls: 6, vars: 9, consts: [[1, "datepicker"], [1, "shinput"], ["size", "10", "autocomplete", "off", 3, "ngModel", "placeholder", "ngModelChange", "keydown", "keyup", "focus"], ["shdropsh", ""], [1, "shsearch", 3, "click"], ["class", "dropdatepk", 3, "width", 4, "ngIf"], [1, "dropdatepk"], [1, "topdt"], [3, "click"], ["class", "days", 4, "ngIf"], ["class", "months", 4, "ngIf"], [1, "days"], ["class", "semana", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], [1, "semana"], ["class", "day", 3, "ngClass", "click", 4, "ngIf"], [4, "ngIf"], [1, "day", 3, "ngClass", "click"], [1, "months"], [1, "month", 3, "click"]], template: function DatepickerComponent_Template(rf, ctx) { if (rf & 1) {
        const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatepickerComponent_Template_input_ngModelChange_2_listener($event) { return ctx.value = $event; })("keydown", function DatepickerComponent_Template_input_keydown_2_listener($event) { return ctx.onChange($event); })("keyup", function DatepickerComponent_Template_input_keyup_2_listener($event) { return ctx.regex($event); })("focus", function DatepickerComponent_Template_input_focus_2_listener($event) { return ctx.focus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatepickerComponent_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.focus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DatepickerComponent_div_5_Template, 10, 10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--pcolor", ctx.color)("--w", ctx.width)("margin", ctx.margin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("placeholder", ctx.placeholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".datepicker[_ngcontent-%COMP%] {\n  font-family: Poppins, Roboto, \"Courier New\", Courier, monospace;\n  max-width: var(--w, inherit);\n  min-width: 172px;\n  background: #ffffff;\n}\n.datepicker[_ngcontent-%COMP%]   .shinput[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 30px;\n  padding: 10px 4px 10px 8px;\n  color: var(--pcolor);\n  \n  border-radius: 4px;\n  \n  box-shadow: 1px 1px 5px 0px #00000033;\n}\n.datepicker[_ngcontent-%COMP%]   .shinput[_ngcontent-%COMP%]   .shsearch[_ngcontent-%COMP%] {\n  background-image: url('calendar.svg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-left: 1px solid var(--pcolor);\n  cursor: pointer;\n}\n.datepicker[_ngcontent-%COMP%]   .shinput[_ngcontent-%COMP%]   .clsearch[_ngcontent-%COMP%] {\n  background-image: url('assets-close.svg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-left: 1px solid var(--pcolor);\n  cursor: pointer;\n}\n.datepicker[_ngcontent-%COMP%]   .shinput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  outline: none;\n  background-color: unset;\n  border: unset;\n  width: 100%;\n  width: -moz-available;\n  \n  width: -webkit-fill-available;\n  \n  width: fill-available;\n  padding-right: 8px;\n  padding-left: 8px;\n  margin-right: 8px;\n  margin-left: 8px;\n  font-family: Poppins, Roboto, \"Courier New\", Courier, monospace;\n  color: var(--pcolor);\n}\n.datepicker[_ngcontent-%COMP%]   .shinput[_ngcontent-%COMP%]:focus-within {\n  box-shadow: 1px 1px 5px 0px #048dafe1;\n}\n.dropdatepk[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 99999;\n  top: var(--fposy);\n  left: var(--fposx);\n  transition: opacity 0.4s linear;\n  margin-top: 8px;\n  border: 1px solid #cccccc;\n  border-radius: 4px;\n  overflow: auto;\n  background-color: #ffffff;\n  min-width: 300px;\n  height: -moz-fit-content;\n  height: fit-content;\n  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);\n  font-size: 12px;\n}\n.dropdatepk[_ngcontent-%COMP%]   .topdt[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 30px 1fr 30px;\n  padding: 4px;\n  text-align: center;\n  font-weight: bold;\n  cursor: pointer;\n}\n.dropdatepk[_ngcontent-%COMP%]   .semana[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4px;\n  background-color: #bcd4da;\n  border: 2px solid #ffffff;\n  font-size: 11px;\n  font-weight: bold;\n  border-radius: 4px;\n}\n.dropdatepk[_ngcontent-%COMP%]   .months[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n.dropdatepk[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 21px 8px 21px 8px;\n  cursor: pointer;\n}\n.dropdatepk[_ngcontent-%COMP%]   .month[_ngcontent-%COMP%]:hover {\n  background-color: #bcd4da;\n}\n.dropdatepk[_ngcontent-%COMP%]   .mesatual[_ngcontent-%COMP%] {\n  background-color: #bcd4da;\n  font-weight: bold;\n}\n.dropdatepk[_ngcontent-%COMP%]   .days[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n}\n.dropdatepk[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4px;\n  cursor: pointer;\n  border-radius: 4px;\n  background-color: #eeeeee;\n  border: 2px solid #ffffff;\n  font-size: 11px;\n}\n.dropdatepk[_ngcontent-%COMP%]   .day[_ngcontent-%COMP%]:hover {\n  background-color: #bcd4da;\n}\n.dropdatepk[_ngcontent-%COMP%]   .hoje[_ngcontent-%COMP%] {\n  background-color: #bcd4da;\n  font-weight: bold;\n}\n.dropdatepk[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  padding: 8px;\n  z-index: 99999;\n}\n.dropdatepk[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: #bcd4da;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px #bcd4da;\n  border-radius: 10px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--pcolor);\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RhdGVwaWNrZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrREFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGtEQUFBO0VBQ0EscUNBQUE7QUFFSjtBQURJO0VBQ0UscUNBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7QUFHTjtBQURJO0VBQ0UseUNBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7QUFHTjtBQURJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUF1Qiw0Q0FBQTtFQUN2Qiw2QkFBQTtFQUErQiw2Q0FBQTtFQUMvQixxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0RBQUE7RUFDQSxvQkFBQTtBQUtOO0FBRkU7RUFDRSxxQ0FBQTtBQUlKO0FBREE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZUFBQTtBQUlGO0FBSEU7RUFDRSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFLSjtBQUhFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBS0o7QUFIRTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtBQUtKO0FBSEU7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQUtKO0FBSEU7RUFDRSx5QkFBQTtBQUtKO0FBSEU7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBS0o7QUFIRTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtBQUtKO0FBSEU7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUtKO0FBSEU7RUFDRSx5QkFBQTtBQUtKO0FBSEU7RUFDRSx5QkFBQTtFQUNBLGlCQUFBO0FBS0o7QUFIRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBS0o7QUFIRTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtBQUtKO0FBREEsVUFBQTtBQUNBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFJRjtBQURBLFVBQUE7QUFDQTtFQUNFLGlDQUFBO0VBQ0EsbUJBQUE7QUFJRjtBQURBLFdBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFJRiIsImZpbGUiOiJkYXRlcGlja2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhdGVwaWNrZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBSb2JvdG8sIFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gIG1heC13aWR0aDogdmFyKC0tdywgaW5oZXJpdCk7XHJcbiAgbWluLXdpZHRoOiAxNzJweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIC5zaGlucHV0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCA0cHggMTBweCA4cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tcGNvbG9yKTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkICMxNjE0MTQwZiAhaW1wb3J0YW50OyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgLyogYm94LXNoYWRvdzogMnB4IDJweCAycHggMXB4IHJnYigwIDAgMCAvIDIwJSk7ICovXHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweCAwcHggIzAwMDAwMDMzO1xyXG4gICAgLnNoc2VhcmNoIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vYXNzZXRzL2NhbGVuZGFyLnN2Zyk7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLXBjb2xvcik7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5jbHNlYXJjaCB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9jbG9zZS5zdmcpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1wY29sb3IpO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xyXG4gICAgICBib3JkZXI6IHVuc2V0O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgd2lkdGg6IC1tb3otYXZhaWxhYmxlOyAvKiBXZWJLaXQtYmFzZWQgYnJvd3NlcnMgd2lsbCBpZ25vcmUgdGhpcy4gKi9cclxuICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7IC8qIE1vemlsbGEtYmFzZWQgYnJvd3NlcnMgd2lsbCBpZ25vcmUgdGhpcy4gKi9cclxuICAgICAgd2lkdGg6IGZpbGwtYXZhaWxhYmxlO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFBvcHBpbnMsIFJvYm90bywgXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1wY29sb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2hpbnB1dDpmb2N1cy13aXRoaW4ge1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMHB4ICMwNDhkYWZlMTtcclxuICB9XHJcbn1cclxuLmRyb3BkYXRlcGsge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiA5OTk5OTtcclxuICB0b3A6IHZhcigtLWZwb3N5KTtcclxuICBsZWZ0OiB2YXIoLS1mcG9zeCk7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzIGxpbmVhcjtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjY2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgLnRvcGR0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMWZyIDMwcHg7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnNlbWFuYSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNkNGRhO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuICAubW9udGhzIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIH1cclxuICAubW9udGgge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMjFweCA4cHggMjFweCA4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5tb250aDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNkNGRhO1xyXG4gIH1cclxuICAubWVzYXR1YWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JjZDRkYTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAuZGF5cyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcclxuICB9XHJcbiAgLmRheSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICB9XHJcbiAgLmRheTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNkNGRhO1xyXG4gIH1cclxuICAuaG9qZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNkNGRhO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIC5pdGVtIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIHotaW5kZXg6IDk5OTk5O1xyXG4gIH1cclxuICAuaXRlbTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmNkNGRhO1xyXG4gIH1cclxufVxyXG5cclxuLyogd2lkdGggKi9cclxuOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxuICBoZWlnaHQ6IDhweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCAjYmNkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wY29sb3IpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "R8/k":
/*!************************************************!*\
  !*** ./src/app/services/connection.service.ts ***!
  \************************************************/
/*! exports provided: ConnectionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionService", function() { return ConnectionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ConnectionService {
    constructor(http) {
        this.http = http;
        this.URL_PY = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL_SERVER_PY;
        // public user: any = null;
        this.user = {
            hascode: '',
            idsistema: src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].user_test,
            iderp: '',
            iderpvendedor: '',
            isativo: '',
            master: '',
        };
    }
    login(user, pass) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let body = {};
            body['origem'] = 'mobile';
            body['usuario'] = {};
            body['usuario']['dsLogin'] = user;
            body['usuario']['dsSenha'] = pass;
            this.user = yield this.http
                .post(this.URL_PY + 'login', body)
                .toPromise();
            console.log(this.user);
        });
    }
    getAllVendedores() {
        return this.http.get(this.URL_PY +
            `vendedor?hash=${this.user.hascode}`);
    }
    getClientes(iderpvendedor) {
        return this.http.get(this.URL_PY +
            `cliente?hash=${this.user.hascode}&iderpvendedor=${iderpvendedor}`);
    }
    getClientePropriedade(idcliente) {
        return this.http.get(this.URL_PY +
            `cliente/propriedade?hash=${this.user.hascode}&idcliente=${idcliente}`);
    }
    sendAgendamento(agendamento) {
        return this.http.post(this.URL_PY + `visitas/agenda?hash=${this.user.hascode}`, agendamento);
    }
    getVendedores(dtini = null, dtfim = null, idvendedor = null) {
        if (dtini && dtfim && idvendedor) {
            return this.http.get(this.URL_PY +
                'vendedor/details?idsistema=' +
                this.user.idsistema +
                '&hash=' +
                this.user.hascode +
                '&dtini=' +
                dtini +
                '&dtfim=' +
                dtfim +
                '&idvendedor=' +
                idvendedor);
        }
        else if (dtini && dtfim) {
            return this.http.get(this.URL_PY +
                'vendedor/details?idsistema=' +
                this.user.idsistema +
                '&hash=' +
                this.user.hascode +
                '&dtini=' +
                dtini +
                '&dtfim=' +
                dtfim);
        }
        else {
            return this.http.get(this.URL_PY +
                'vendedor/details?idsistema=' +
                this.user.idsistema +
                '&hash=' +
                this.user.hascode);
        }
    }
    getStatistic() {
        return this.http.get(this.URL_PY +
            'visitas/statistics?idsistema=' +
            this.user.idsistema +
            '&hash=' +
            this.user.hascode);
    }
    getByClient(idcliente, dtini, dtfim) {
        let body = {
            idsistema: this.user.idsistema,
            idcliente: idcliente,
            dtinicio: dtini,
            dtfim: dtfim,
        };
        return this.http.post(this.URL_PY + 'visitas/doc?hash=' + this.user.hascode, body);
    }
    getObjetivos() {
        return this.http.get(this.URL_PY +
            'visitas/objetivos?idsistema=' +
            this.user.idsistema +
            '&hash=' +
            this.user.hascode);
    }
    getEventos() {
        return this.http.get(this.URL_PY +
            'eventos?idsistema=' +
            this.user.idsistema +
            '&hash=' +
            this.user.hascode);
    }
    getCliente(idcliente) {
        return this.http.get(this.URL_PY +
            'cliente/byid?idsistema=' +
            this.user.idsistema +
            '&hash=' +
            this.user.hascode +
            '&idcliente=' +
            idcliente);
    }
    getContato() {
        return this.http.get(this.URL_PY +
            'visitas/contato?idsistema=' +
            this.user.idsistema +
            '&hash=' +
            this.user.hascode);
    }
    getVisitasByClient() {
        return this.http.get(`${this.URL_PY}visitas/byclient?idsistema=${this.user.idsistema}&hash=${this.user.hascode}`);
    }
    getVisitas(dtini, dtfim, hashgrupo = null, idvendedor = null) {
        let body = {
            data: {
                idSistema: this.user.idsistema,
                dtinicio: dtini,
                dtfim: dtfim,
                hashgrupo: hashgrupo,
                idvendedor: idvendedor
            },
        };
        return this.http.post(this.URL_PY + 'visitas/bydata?hash=' + this.user.hascode, body);
    }
    getGrupoVisitas(dtini, dtfim) {
        return this.http.get(this.URL_PY +
            `visitagrupos?hash=${this.user.hascode}&idsistema=${this.user.idsistema}&dtini=${dtini}&dtfim=${dtfim}`);
    }
    getImagensVisitas(idvisita) {
        return this.http.get(this.URL_PY +
            `visitas/visitaimagem?hash=${this.user.hascode}&idsistema=${this.user.idsistema}&idvisita=${idvisita}`);
    }
    getAudiosVisitas(idvisita) {
        return this.http.get(this.URL_PY +
            `visitas/visitaaudios?hash=${this.user.hascode}&idsistema=${this.user.idsistema}&idvisita=${idvisita}`);
    }
    getAgendamentos(dtini, dtfim) {
        return this.http.get(this.URL_PY +
            `visitas/agenda?hash=${this.user.hascode}&dtini=${dtini}&dtfim=${dtfim}`);
    }
}
ConnectionService.ɵfac = function ConnectionService_Factory(t) { return new (t || ConnectionService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ConnectionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ConnectionService, factory: ConnectionService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-ps": "TJgH",
	"./ar-ps.js": "TJgH",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku-kmr": "dVgr",
	"./ku-kmr.js": "dVgr",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_connection_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/connection.service */ "R8/k");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor(conn, nav) {
        this.conn = conn;
        this.nav = nav;
        this.title = 'dashVisitas';
        if (!window.location.pathname.startsWith('/relatorio')) {
            this.nav.navigate(["/"]);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_connection_service__WEBPACK_IMPORTED_MODULE_1__["ConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "T73m":
/*!**************************************************!*\
  !*** ./src/app/pages/visits/visits.component.ts ***!
  \**************************************************/
/*! exports provided: VisitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitsComponent", function() { return VisitsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_details_visitadetail_visitadetail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/details/visitadetail/visitadetail.component */ "hFHy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/connection.service */ "R8/k");
/* harmony import */ var src_app_services_uteis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/uteis.service */ "4y1v");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/menu/menu.component */ "0oYm");
/* harmony import */ var _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/datepicker/datepicker.component */ "JZE2");
/* harmony import */ var _components_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/skeleton/skeleton.component */ "eO4b");
/* harmony import */ var _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/icon/icon.component */ "WaCx");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/card/card.component */ "lXt9");
/* harmony import */ var _components_chartdistance_chartdistance_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/chartdistance/chartdistance.component */ "2Kee");
/* harmony import */ var _components_mapsgoogle_mapsgoogle_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/mapsgoogle/mapsgoogle.component */ "ZcpQ");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/spinner/spinner.component */ "e5sC");
















const _c0 = ["dti"];
const _c1 = ["dtf"];
const _c2 = ["table"];
function VisitsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "datepicker", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "datepicker", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VisitsComponent_div_4_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.pesquisar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Pesquisar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VisitsComponent_skeleton_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "skeleton", 14);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cols", 6)("rows", 8);
} }
function VisitsComponent_div_7_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" (", item_r12.iderpvendedor, ") ", item_r12.nmvendedor, " ");
} }
function VisitsComponent_div_7_div_27_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Vendedor n\u00E3o identificado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VisitsComponent_div_7_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VisitsComponent_div_7_div_27_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17); const item_r12 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r16.open(item_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, VisitsComponent_div_7_div_27_div_1_Template, 2, 2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, VisitsComponent_div_7_div_27_div_4_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r12.iderpvendedor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r12.dsveiculo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r12.iderpvendedor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 7, item_r12.dtgrupo, "dd/MM/YYYY HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 10, item_r12.dtfechamento, "dd/MM/YYYY HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r12.kmtotal);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r12.qtdvisitas);
} }
const _c3 = function (a0) { return { color: a0 }; };
function VisitsComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VisitsComponent_div_7_Template_icon_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.floatMenu("nmvendedor", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Ve\u00EDculo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VisitsComponent_div_7_Template_icon_click_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.floatMenu("dsveiculo", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Data Abertura");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VisitsComponent_div_7_Template_icon_click_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r21.floatMenu("dtgrupo", $event, "date"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Data Fechamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VisitsComponent_div_7_Template_icon_click_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.floatMenu("dtfechamento", $event, "date"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Dist\u00E2ncia (km)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VisitsComponent_div_7_Template_icon_click_22_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r23.floatMenu("kmtotal", $event, "number"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Visitas");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VisitsComponent_div_7_Template_icon_click_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r24.floatMenu("qtdvisitas", $event, "number"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, VisitsComponent_div_7_div_27_Template, 15, 13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c3, ctx_r2.isFiltro("nmvendedor") ? "orange" : "white"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c3, ctx_r2.isFiltro("dsveiculo") ? "orange" : "white"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c3, ctx_r2.isFiltro("dtgrupo") ? "orange" : "white"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c3, ctx_r2.isFiltro("dtfechamento") ? "orange" : "white"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](15, _c3, ctx_r2.isFiltro("kmtotal") ? "orange" : "white"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c3, ctx_r2.isFiltro("qtdvisitas") ? "orange" : "white"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.groups);
} }
const _c4 = function (a0) { return { background: a0 }; };
function VisitsComponent_div_8_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const l_r28 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c4, l_r28.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", l_r28.legend, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r27.kmByPercent(l_r28.pos));
} }
function VisitsComponent_div_8_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, VisitsComponent_div_8_div_10_div_1_Template, 5, 5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r25.legends);
} }
function VisitsComponent_div_8_mapscomp_12_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mapscomp", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("getdistance", function VisitsComponent_div_8_mapscomp_12_Template_mapscomp_getdistance_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r29.realdistance = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("typemap", ctx_r26.roadmap)("center", ctx_r26.center)("marks", ctx_r26.marks)("colors", ctx_r26.colors)("zoom", 10);
} }
function VisitsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VisitsComponent_div_8_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r31.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "card", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "timelinechart", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("finish", function VisitsComponent_div_8_Template_timelinechart_finish_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r33.createLegend($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, VisitsComponent_div_8_div_10_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "card", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, VisitsComponent_div_8_mapscomp_12_Template, 1, 5, "mapscomp", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate6"](" ", ctx_r3.selected.dsveiculo, " | Dist\u00E2ncia Informada: ", ctx_r3.getKM(ctx_r3.selected), " km | Dist\u00E2ncia Estimada: ", ctx_r3.realdistance, " km | Vendedor: ", ctx_r3.selected.nmvendedor, " | Abertura: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 9, ctx_r3.selected.dtgrupo, "dd/MM/YYYY HH:mm"), " | Fechamento: ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 12, ctx_r3.selected.dtfechamento, "dd/MM/YYYY HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("data", ctx_r3.getDistances());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.legends);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.showmap);
} }
function VisitsComponent_div_9_div_22_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "icon", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r35.dsevento, " ");
} }
function VisitsComponent_div_9_div_22_icon_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "icon", 57);
} }
function VisitsComponent_div_9_div_22_icon_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "icon", 58);
} }
function VisitsComponent_div_9_div_22_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", item_r35.dsrecomendacao);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r35.dsproblema);
} }
function VisitsComponent_div_9_div_22_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Sem Problemas!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VisitsComponent_div_9_div_22_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "icon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Demarcado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VisitsComponent_div_9_div_22_div_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "N\u00E3o Demarcado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function VisitsComponent_div_9_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VisitsComponent_div_9_div_22_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r47); const item_r35 = ctx.$implicit; const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r46.openVisit(item_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "icon", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "icon", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, VisitsComponent_div_9_div_22_div_17_Template, 3, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, VisitsComponent_div_9_div_22_icon_23_Template, 1, 0, "icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, VisitsComponent_div_9_div_22_icon_24_Template, 1, 0, "icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "icon", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, VisitsComponent_div_9_div_22_span_28_Template, 2, 2, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, VisitsComponent_div_9_div_22_span_29_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, VisitsComponent_div_9_div_22_div_36_Template, 3, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, VisitsComponent_div_9_div_22_div_37_Template, 3, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](40, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    const i_r36 = ctx.index;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", i_r36 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("(", item_r35.cdcliente, ") ", item_r35.nmcliente, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r35.nmpropriedade, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r35.dsveiculo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r35.dscultura, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r35.dsevento);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r35.nmvendedor);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r35.idmotivo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r35.idmotivo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r35.objetivo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r35.dsproblema);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !item_r35.dsproblema);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r35.imagens, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r35.audios, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r34.isDemarcado(item_r35.demarcacaoprop));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r34.isDemarcado(item_r35.demarcacaoprop));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](40, 19, item_r35.dtvisita, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r35.horavisita);
} }
function VisitsComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "C\u00F3d.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Detalhes");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Objetivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Problemas");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Imagens");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "\u00C1udios");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Demarca\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, VisitsComponent_div_9_div_22_Template, 43, 22, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.visitas);
} }
function VisitsComponent_spinner_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "spinner");
} }
class VisitsComponent {
    constructor(conn, util) {
        this.conn = conn;
        this.util = util;
        this.dtini = moment__WEBPACK_IMPORTED_MODULE_1__().subtract(30, 'days').format('YYYY/MM/DD');
        this.dtfim = moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY/MM/DD');
        this.loading = false;
        this.showmap = false;
        this.visitas = [];
        this.marks = [];
        this.colors = [];
        this.groups = [];
        this.aux = [];
        this.filterselects = {};
        this.realdistance = 0;
        this.criterios = [
            { id: 'nmvendedor', label: 'Vendedor' },
            { id: 'nmcliente', label: 'Cliente' },
            { id: 'objetivo', label: 'Objetivo' },
            { id: 'dscultura', label: 'Cultura' },
        ];
        this.idx = 1;
        this.filters = [{ idx: 1, search: '', criter: 'nmvendedor' }];
    }
    ngOnInit() {
        this.dtini = moment__WEBPACK_IMPORTED_MODULE_1__().subtract(30, 'days').format('YYYY/MM/DD');
        this.dtfim = moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY/MM/DD');
        setTimeout(() => {
            this.init();
        }, 30);
    }
    addFilter() {
        if (this.filters.length < this.criterios.length) {
            this.idx++;
            this.filters.push({ idx: this.idx, search: '', criter: '' });
        }
    }
    rmFilter(idx) {
        console.log(idx);
        this.filters = this.filters.filter((item) => item.idx != idx);
    }
    search() {
        console.log(this.filters);
        this.visitas = this.aux.filter((item) => {
            let flag = [];
            for (let f of this.filters) {
                flag.push(String(item[f['criter']])
                    .toUpperCase()
                    .indexOf(String(f['search']).toUpperCase()) > -1);
            }
            console.log(flag.every((el) => el));
            return flag.every((el) => el);
        });
    }
    getDistances() {
        let values = [];
        if (this.visitas.length > 0) {
            let dados = [];
            let visitas = [];
            visitas.push({
                lat: Number(this.selected.lat),
                lng: Number(this.selected.lng),
                label: 'A',
            });
            let l = 1;
            for (let v of this.visitas) {
                visitas.push({
                    lat: Number(v.latitudeoriginal),
                    lng: Number(v.longitudeoriginal),
                    label: String(l++),
                });
            }
            visitas.push({
                lat: Number(this.selected.latfechamento),
                lng: Number(this.selected.lngfechamento),
                label: 'F',
            });
            this.marks = visitas;
            this.center = this.marks[0];
            for (let i = 1; i < visitas.length; i++) {
                let v = this.util.getDistance(visitas[i - 1], visitas[i]);
                let ant = 0;
                if (dados.length > 0) {
                    ant = dados[dados.length - 1];
                }
                dados.push(ant + v);
            }
            values.push(0);
            for (let d of dados) {
                values.push(Math.ceil((d * 100) / dados[dados.length - 1]));
            }
        }
        return values;
    }
    getKM(item) {
        try {
            return Number(item.kmfim) - Number(item.km);
        }
        catch (error) {
            return 0;
        }
    }
    clear() {
        this.visitas = [];
        this.selected = null;
    }
    open(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.selected = item;
            this.loading = true;
            console.log(this.selected);
            try {
                this.visitas = yield this.conn
                    .getVisitas(this.dtini, this.dtfim, item.hascode)
                    .toPromise();
                console.log(this.visitas);
                console.log(this.getDistances());
            }
            catch (error) { }
            this.loading = false;
        });
    }
    getVisitas() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.groups = yield this.conn
                .getGrupoVisitas(this.dtini, this.dtfim)
                .toPromise();
            console.log(this.groups);
            this.groups = this.groups.map((item) => {
                item['kmtotal'] = this.getKM(item);
                return item;
            });
            this.aux = this.groups;
        });
    }
    createLegend(evt) {
        console.log(evt);
        this.legends = evt;
        for (let l of this.legends) {
            this.colors.push(l.color);
        }
        this.showmap = true;
    }
    kmByPercent(percent) {
        try {
            return (((Number(percent) / 100) * this.getKM(this.selected)).toFixed(1) + ' km');
        }
        catch (error) {
            return '0 km';
        }
    }
    pesquisar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dtini = moment__WEBPACK_IMPORTED_MODULE_1__(this.dti.value, 'DD/MM/YYYY').format('YYYY/MM/DD');
            this.dtfim = moment__WEBPACK_IMPORTED_MODULE_1__(this.dtf.value, 'DD/MM/YYYY').format('YYYY/MM/DD');
            this.loading = true;
            try {
                yield this.getVisitas();
                // this.search();
            }
            catch (error) { }
            this.loading = false;
            setTimeout(() => {
                this.dti.setValue(moment__WEBPACK_IMPORTED_MODULE_1__(this.dtini, 'YYYY/MM/DD').format('DD/MM/YYYY'));
                this.dtf.setValue(moment__WEBPACK_IMPORTED_MODULE_1__(this.dtfim, 'YYYY/MM/DD').format('DD/MM/YYYY'));
            }, 300);
        });
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            try {
                yield this.getVisitas();
                console.log(this.visitas);
            }
            catch (error) { }
            this.loading = false;
            setTimeout(() => {
                this.dti.setValue(moment__WEBPACK_IMPORTED_MODULE_1__().subtract(30, 'days').format('DD/MM/YYYY'));
                this.dtf.setValue(moment__WEBPACK_IMPORTED_MODULE_1__().format('DD/MM/YYYY'));
            }, 300);
        });
    }
    isDemarcado(demarcacao) {
        try {
            let res = JSON.parse(demarcacao);
            return 'position' in res;
        }
        catch (error) {
            return false;
        }
    }
    openVisit(item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.util.modal(src_app_details_visitadetail_visitadetail_component__WEBPACK_IMPORTED_MODULE_2__["VisitadetailComponent"], { data: item });
        });
    }
    isFiltro(key) {
        return key in this.filterselects;
    }
    filter() {
        this.groups = this.aux.filter((item) => {
            let cond = [];
            for (let key in this.filterselects) {
                if (key == "dtfechamento" || key == "dtgrupo") {
                    const dt = moment__WEBPACK_IMPORTED_MODULE_1__(item[key]).format('DD/MM/YYYY');
                    cond.push(this.filterselects[key].indexOf(dt) > -1);
                }
                else
                    cond.push(this.filterselects[key].indexOf(item[key]) > -1);
            }
            return cond.every((el) => el);
        });
    }
    floatMenu(key, evt, mask = null) {
        console.log(evt);
        let items = [];
        if (mask == 'date') {
            items = Array.from(new Set(this.groups.map((item) => moment__WEBPACK_IMPORTED_MODULE_1__(item[key]).format('DD/MM/YYYY'))));
        }
        else {
            items = Array.from(new Set(this.groups.map((item) => item[key])));
        }
        this.util
            .floatingSearch(evt, this.table.nativeElement, items, this.filterselects[key], -60, 0, mask)
            .then((res) => {
            if (res && res.length > 0) {
                this.filterselects[key] = res;
            }
            else
                delete this.filterselects[key];
            this.filter();
        });
    }
}
VisitsComponent.ɵfac = function VisitsComponent_Factory(t) { return new (t || VisitsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_4__["ConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_uteis_service__WEBPACK_IMPORTED_MODULE_5__["UteisService"])); };
VisitsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: VisitsComponent, selectors: [["app-visits"]], viewQuery: function VisitsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.dti = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.dtf = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 12, vars: 6, consts: [["id", "container"], [1, "struct"], ["class", "search", 4, "ngIf"], ["type", "table", 3, "cols", "rows", 4, "ngIf"], ["class", "table tablestl", "style", "--cs: repeat(5, 1fr) 150px", 4, "ngIf"], [4, "ngIf"], ["class", "table", "style", "--cs: 50px 2fr 1fr repeat(7, 140px)", 4, "ngIf"], [1, "search"], [2, "width", "20%", "padding", "4px"], ["placeholder", "Data Inicial"], ["dti", ""], ["placeholder", "Data Final"], ["dtf", ""], [1, "button", 2, "width", "20%", 3, "click"], ["type", "table", 3, "cols", "rows"], [1, "table", "tablestl", 2, "--cs", "repeat(5, 1fr) 150px"], ["table", ""], ["table", "true", 1, "toptable"], [1, "label", "labeltablefilter"], [3, "ngStyle"], ["width", "12px", "height", "12px", "icon", "/assets/icons/down.svg", 3, "click"], [1, "c", 3, "ngStyle"], ["class", "bodytable", "table", "true", 3, "click", 4, "ngFor", "ngForOf"], ["table", "true", 1, "bodytable", 3, "click"], ["class", "label", 4, "ngIf"], [1, "label"], ["class", "label jc", 4, "ngIf"], [1, "label", "jc"], [1, "chip", 3, "click"], ["height", "20px", "width", "20px", "icon", "/assets/icons/back.svg"], ["table", "true", 2, "--cs", "1fr 1fr"], ["iscollapse", "true", "height", "80vh", "margin", "8px", "title", "Dist\u00E2ncia Estimada Entre Visitas (Geolocaliza\u00E7\u00E3o)"], ["height", "70%", 3, "data", "finish"], ["class", "chartlegend", 4, "ngIf"], ["iscollapse", "true", "margin", "8px", "height", "80vh", "title", "Rota Estimada Entre Visitas (Trajeto)"], ["width", "100%", "height", "95%", 3, "typemap", "center", "marks", "colors", "zoom", "getdistance", 4, "ngIf"], [1, "chartlegend"], ["class", "itemlegend", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "itemlegend", 3, "ngStyle"], [1, "lg"], [1, "pos"], ["width", "100%", "height", "95%", 3, "typemap", "center", "marks", "colors", "zoom", "getdistance"], [1, "table", 2, "--cs", "50px 2fr 1fr repeat(7, 140px)"], [1, "minichip"], [1, "title"], [1, "sub"], ["height", "20px", "width", "20px", "icon", "/assets/icons/house.png"], ["height", "20px", "width", "20px", "icon", "/assets/icons/car.png"], ["height", "20px", "width", "20px", "icon", "/assets/icons/leaf.png"], ["class", "sub", 4, "ngIf"], ["height", "32px", "width", "32px", "icon", "/assets/icons/success.svg", 4, "ngIf"], ["height", "32px", "width", "32px", "icon", "/assets/icons/fail.svg", 4, "ngIf"], ["height", "32px", "width", "32px", "icon", "/assets/icons/bug.png"], ["style", "color: var(--color-red)", "matTooltipPosition", "above", 3, "matTooltip", 4, "ngIf"], ["height", "32px", "width", "32px", "icon", "/assets/icons/image.svg"], ["height", "32px", "width", "32px", "icon", "/assets/icons/audio.svg"], ["height", "20px", "width", "20px", "icon", "/assets/icons/calendar.svg"], ["height", "32px", "width", "32px", "icon", "/assets/icons/success.svg"], ["height", "32px", "width", "32px", "icon", "/assets/icons/fail.svg"], ["matTooltipPosition", "above", 2, "color", "var(--color-red)", 3, "matTooltip"], ["height", "32px", "width", "32px", "icon", "/assets/icons/locg.svg"], ["height", "32px", "width", "32px", "icon", "/assets/icons/loc.svg"]], template: function VisitsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Di\u00E1rio de Visitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, VisitsComponent_div_4_Template, 9, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, VisitsComponent_skeleton_6_Template, 1, 2, "skeleton", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, VisitsComponent_div_7_Template, 28, 19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, VisitsComponent_div_8_Template, 14, 15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, VisitsComponent_div_9_Template, 23, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, VisitsComponent_spinner_11_Template, 1, 0, "spinner", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.visitas.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading && ctx.visitas.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.visitas.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.visitas.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.visitas.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"], _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_8__["DatepickerComponent"], _components_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_9__["SkeletonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_11__["CardComponent"], _components_chartdistance_chartdistance_component__WEBPACK_IMPORTED_MODULE_12__["ChartdistanceComponent"], _components_mapsgoogle_mapsgoogle_component__WEBPACK_IMPORTED_MODULE_13__["MapsgoogleComponent"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__["MatTooltip"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_15__["SpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".search[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  flex-direction: row;\n  align-content: space-around;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.chartlegend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-content: space-around;\n  justify-content: center;\n  align-items: center;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0 auto;\n  color: #fff;\n  font-size: 12px;\n}\n\n.chartlegend[_ngcontent-%COMP%]   .itemlegend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  justify-content: space-evenly;\n  align-items: center;\n  border-radius: 8px;\n  height: 32px;\n  margin: 10px;\n  flex-wrap: nowrap;\n}\n\n.chartlegend[_ngcontent-%COMP%]   .itemlegend[_ngcontent-%COMP%]   .lg[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-content: space-around;\n  justify-content: space-around;\n  align-items: center;\n  margin-left: 20px;\n}\n\n.chartlegend[_ngcontent-%COMP%]   .itemlegend[_ngcontent-%COMP%]   .pos[_ngcontent-%COMP%] {\n  width: 64px;\n  margin-left: 12px;\n}\n\n.add[_ngcontent-%COMP%] {\n  width: 120px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center;\n  align-content: space-around;\n  flex-wrap: nowrap;\n  cursor: pointer;\n  margin-left: 20px;\n}\n\n.add[_ngcontent-%COMP%]   icon[_ngcontent-%COMP%]:active {\n  transform: scale(0.9);\n}\n\n.chip[_ngcontent-%COMP%] {\n  background: var(--color-red);\n  padding: 4px;\n  font-size: 12px;\n  color: #fff;\n  font-weight: lighter;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 30px;\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-left: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  cursor: pointer;\n}\n\n.chip[_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n  padding-right: 12px;\n}\n\n.chip[_ngcontent-%COMP%]:hover {\n  background: var(--color-red-light);\n}\n\n.button[_ngcontent-%COMP%] {\n  height: 29px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Zpc2l0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBREk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBR047O0FBREk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7QUFHTjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUFFO0VBQ0UscUJBQUE7QUFFSjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFBRTtFQUNFLG1CQUFBO0FBRUo7O0FBQ0E7RUFDRSxrQ0FBQTtBQUVGOztBQUNBO0VBQ0UsWUFBQTtBQUVGIiwiZmlsZSI6InZpc2l0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaGFydGxlZ2VuZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogLXdlYmtpdC1maXQtY29udGVudDtcclxuICB3aWR0aDogLW1vei1maXQtY29udGVudDtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIC5pdGVtbGVnZW5kIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICAubGcge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgICAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAucG9zIHtcclxuICAgICAgd2lkdGg6IDY0cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFkZCB7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGljb246YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICB9XHJcbn1cclxuXHJcbi5jaGlwIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1yZWQpO1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBpY29uIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEycHg7XHJcbiAgfVxyXG59XHJcbi5jaGlwOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1yZWQtbGlnaHQpO1xyXG59XHJcblxyXG4uYnV0dG9ue1xyXG4gIGhlaWdodDogMjlweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "V+xH":
/*!**********************************************************************!*\
  !*** ./src/app/registers/addagendamento/addagendamento.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddagendamentoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddagendamentoComponent", function() { return AddagendamentoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/connection.service */ "R8/k");
/* harmony import */ var src_app_services_uteis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/uteis.service */ "4y1v");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_dropsearch_dropsearch_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/dropsearch/dropsearch.component */ "pwE2");
/* harmony import */ var _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/datepicker/datepicker.component */ "JZE2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_inlinespin_inlinespin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/inlinespin/inlinespin.component */ "Hkk2");













const _c0 = ["dropvendedor"];
const _c1 = ["dropcliente"];
const _c2 = ["droppropriedade"];
const _c3 = ["dtagendamento"];
function AddagendamentoComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Vendedor:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "dropsearch", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("event", function AddagendamentoComponent_div_7_Template_dropsearch_event_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.getClientes($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddagendamentoComponent_inlinespin_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "inlinespin");
} }
function AddagendamentoComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Enviar Agendamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function AddagendamentoComponent_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Carregando...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c4 = function (a0) { return { btloading: a0 }; };
class AddagendamentoComponent {
    constructor(dialogRef, data, conn, util) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.conn = conn;
        this.util = util;
        this.vendedores = [];
        this.clientes = [];
        this.propriedades = [];
        this.agendamento = {};
    }
    ngOnInit() {
        console.log(this.data);
    }
    ngAfterViewInit() {
        this.getVendedores();
    }
    getVendedores() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            try {
                this.vendedores = yield this.conn.getAllVendedores().toPromise();
                console.log(this.vendedores);
            }
            catch (error) { }
            this.loading = false;
            setTimeout(() => {
                this.dropvendedor.values = this.vendedores;
            }, 300);
        });
    }
    getClientes(iderpvendedor) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.droppropriedade.value = null;
                this.dropcliente.value = null;
            }
            catch (error) { }
            this.loading = true;
            try {
                console.log(iderpvendedor);
                this.agendamento.iderpvendedor = null;
                this.agendamento.iderpvendedor = iderpvendedor;
                this.agendamento.cdpropriedade = null;
                this.agendamento.idcliente = null;
                this.clientes = yield this.conn.getClientes(iderpvendedor).toPromise();
                console.log(this.clientes);
            }
            catch (error) { }
            this.loading = false;
            setTimeout(() => {
                this.dropcliente.value = null;
                this.dropcliente.values = this.clientes;
            }, 300);
        });
    }
    getPropriedades(idcliente) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.droppropriedade.value = null;
            }
            catch (error) { }
            this.loading = true;
            try {
                console.log(idcliente);
                this.agendamento.idcliente = idcliente;
                this.agendamento.cdpropriedade = null;
                this.propriedades = yield this.conn
                    .getClientePropriedade(idcliente)
                    .toPromise();
                console.log(this.propriedades);
            }
            catch (error) { }
            this.loading = false;
            setTimeout(() => {
                this.droppropriedade.values = this.propriedades;
            }, 300);
        });
    }
    setPropriedade(iderp) {
        this.agendamento.cdpropriedade = iderp;
    }
    sendAgendamento() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.agendamento.data = null;
            this.loading = true;
            try {
                try {
                    if (moment__WEBPACK_IMPORTED_MODULE_2__(this.dtagendamento.value, 'DD/MM/YYYY').isValid() &&
                        this.dtagendamento.value.length == 10) {
                        console.log(this.dtagendamento.value);
                        console.log(this.dtagendamento.value.length);
                        this.agendamento.data = this.dtagendamento.value;
                    }
                }
                catch (error) { }
                if (!this.agendamento.data) {
                    this.util.alert('Data é campo obrigatório!');
                    this.dtagendamento.setFocus();
                }
                else if (!this.agendamento.iderpvendedor) {
                    this.util.alert('Vendedor é campo obrigatório!');
                    this.dropvendedor.setFocus();
                }
                else if (!this.agendamento.idcliente) {
                    this.util.alert('Cliente é campo obrigatório!');
                    this.dropcliente.setFocus();
                }
                else if (!this.agendamento.cdpropriedade) {
                    this.util.alert('Propriedade é campo obrigatório!');
                    this.droppropriedade.setFocus();
                }
                else {
                    this.clientes.forEach((item) => {
                        if (item.id == this.agendamento.idcliente) {
                            this.agendamento.cdcliente = item.iderp;
                            this.agendamento.dscliente = item.nmcliente;
                        }
                    });
                    this.propriedades.forEach((item) => {
                        if (item.iderp == this.agendamento.cdpropriedade) {
                            this.agendamento.dspropriedade = item.nmendereco;
                        }
                    });
                    this.agendamento.cduser = this.conn.user.id;
                    this.agendamento.idsistema = this.conn.user.idsistema;
                    this.agendamento.isrealizada = '0';
                    let res = yield this.conn.sendAgendamento(this.agendamento).toPromise();
                    console.log(res);
                    this.dialogRef.close();
                }
            }
            catch (e) {
                this.util.alert('Erro ao enviar agendamento!');
            }
            this.loading = false;
        });
    }
}
AddagendamentoComponent.ɵfac = function AddagendamentoComponent_Factory(t) { return new (t || AddagendamentoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_4__["ConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_uteis_service__WEBPACK_IMPORTED_MODULE_5__["UteisService"])); };
AddagendamentoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AddagendamentoComponent, selectors: [["app-addagendamento"]], viewQuery: function AddagendamentoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c3, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.dropvendedor = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.dropcliente = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.droppropriedade = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.dtagendamento = _t.first);
    } }, decls: 32, vars: 10, consts: [["id", "modal"], [1, "header"], [1, "text"], ["aria-hidden", "false", "aria-label", "Clique para fechar", "mat-dialog-close", ""], [1, "form"], [4, "ngIf"], ["width", "500px", "placeholder", "Selecionar Cliente...", "keyvalue", "id", "keylabel", "nmcliente", "color", "var(--color-primary)", 3, "disabled", "event"], ["dropcliente", ""], ["width", "500px", "placeholder", "Selecionar Propriedade...", "keyvalue", "iderp", "keylabel", "nmendereco", "color", "var(--color-primary)", 3, "disabled", "event"], ["droppropriedade", ""], [2, "width", "500px"], ["placeholder", "Data de Agendamento"], ["dtagendamento", ""], [1, "span"], ["rows", "4", 3, "ngModel", "ngModelChange"], [1, "button", 3, "ngClass", "click"], ["width", "500px", "placeholder", "Selecionar Vendedor...", "keyvalue", "iderp", "keylabel", "nmvendedor", "color", "var(--color-primary)", 3, "event"], ["dropvendedor", ""]], template: function AddagendamentoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Adicionar Agendamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AddagendamentoComponent_div_7_Template, 5, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Cliente:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "dropsearch", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("event", function AddagendamentoComponent_Template_dropsearch_event_11_listener($event) { return ctx.getPropriedades($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Propriedade:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "dropsearch", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("event", function AddagendamentoComponent_Template_dropsearch_event_16_listener($event) { return ctx.setPropriedade($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Data de Agendamento:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "datepicker", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Observa\u00E7\u00F5es:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function AddagendamentoComponent_Template_textarea_ngModelChange_26_listener($event) { return ctx.agendamento.observacoes = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, AddagendamentoComponent_inlinespin_28_Template, 1, 0, "inlinespin", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddagendamentoComponent_Template_div_click_29_listener() { return ctx.sendAgendamento(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, AddagendamentoComponent_span_30_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, AddagendamentoComponent_span_31_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.vendedores.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.clientes.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.propriedades.length == 0 && ctx.clientes.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.agendamento.observacoes);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c4, ctx.loading));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _components_dropsearch_dropsearch_component__WEBPACK_IMPORTED_MODULE_8__["DropsearchComponent"], _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_9__["DatepickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _components_inlinespin_inlinespin_component__WEBPACK_IMPORTED_MODULE_11__["InlinespinComponent"]], styles: ["#modal[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.form[_ngcontent-%COMP%] {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-content: space-around;\n  align-items: stretch;\n  justify-content: flex-start;\n}\n\n.form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 12px;\n  margin: 0 auto;\n  width: 500px;\n}\n\n.form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  width: 584px;\n  height: 40px;\n  pointer-events: all;\n}\n\n.button[_ngcontent-%COMP%]:active {\n  transform: scale(1) !important;\n}\n\n.btloading[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: #797979;\n}\n\n.span[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  resize: none;\n  outline: none;\n  background-color: var(--color-primary-contrast);\n  border: unset;\n  color: var(--color-primary);\n  width: 481px;\n  padding: 12px;\n  box-shadow: 1px 1px 5px #00000033;\n  border-radius: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FkZGFnZW5kYW1lbnRvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtBQUVGOztBQURFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FBR0o7O0FBREk7RUFDRSxrQkFBQTtBQUdOOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLCtDQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoiYWRkYWdlbmRhbWVudG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbW9kYWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZm9ybSB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBkaXYge1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgd2lkdGg6IDU4NHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG59XHJcblxyXG4uYnV0dG9uOmFjdGl2ZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRsb2FkaW5nIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjNzk3OTc5O1xyXG59XHJcblxyXG4uc3BhbntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxudGV4dGFyZWEge1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xyXG4gIGJvcmRlcjogdW5zZXQ7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gIHdpZHRoOiA0ODFweDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4ICMwMDAwMDAzMztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "V3xA":
/*!********************************************************!*\
  !*** ./src/app/pages/relatorio/relatorio.component.ts ***!
  \********************************************************/
/*! exports provided: RelatorioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RelatorioComponent", function() { return RelatorioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_mapsgoogle_mapsgoogle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/mapsgoogle/mapsgoogle.component */ "ZcpQ");







function RelatorioComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Carregando relat\u00F3rio...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RelatorioComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Link inv\u00E1lido ou expirado. Solicite um novo link ao seu representante.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RelatorioComponent_ng_container_3_div_52_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](v_r6.nmpropriedade);
} }
function RelatorioComponent_ng_container_3_div_52_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Cultura");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](v_r6.dscultura);
} }
function RelatorioComponent_ng_container_3_div_52_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](v_r6.dsevento);
} }
function RelatorioComponent_ng_container_3_div_52_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Objetivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](v_r6.objetivo);
} }
function RelatorioComponent_ng_container_3_div_52_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Problema");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](v_r6.dsproblema);
} }
function RelatorioComponent_ng_container_3_div_52_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Recomenda\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](v_r6.dsrecomendacao);
} }
function RelatorioComponent_ng_container_3_div_52_div_17_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Localiza\u00E7\u00E3o da Propriedade");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "mapscomp", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const i_r7 = ctx_r24.index;
    const v_r6 = ctx_r24.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "rel-prop-" + i_r7)("zoom", 15)("location", ctx_r22.propLocation(v_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r22.staticMapUrl(v_r6.enderecocompleto.latitude, v_r6.enderecocompleto.longitude, 15), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function RelatorioComponent_ng_container_3_div_52_div_17_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Posi\u00E7\u00E3o de Abertura da Visita");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "mapscomp", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    const i_r7 = ctx_r25.index;
    const v_r6 = ctx_r25.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "rel-visit-" + i_r7)("zoom", 15)("location", ctx_r23.visitLocation(v_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r23.staticMapUrl(v_r6.latitudeoriginal, v_r6.longitudeoriginal, 15), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function RelatorioComponent_ng_container_3_div_52_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Localiza\u00E7\u00E3o");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RelatorioComponent_ng_container_3_div_52_div_17_div_4_Template, 6, 4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, RelatorioComponent_ng_container_3_div_52_div_17_div_5_Template, 6, 4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.hasPropLocation(v_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r14.hasVisitLocation(v_r6));
} }
function RelatorioComponent_ng_container_3_div_52_div_18_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RelatorioComponent_ng_container_3_div_52_div_18_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r32); const j_r29 = ctx.index; const v_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r30.openLightbox(v_r6.imagens, j_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\uF50D Ver");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r28.linkimg, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function RelatorioComponent_ng_container_3_div_52_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RelatorioComponent_ng_container_3_div_52_div_18_div_4_Template, 4, 1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Imagens (", v_r6.imagens.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", v_r6.imagens);
} }
function RelatorioComponent_ng_container_3_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RelatorioComponent_ng_container_3_div_52_span_9_Template, 2, 1, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, RelatorioComponent_ng_container_3_div_52_div_12_Template, 5, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, RelatorioComponent_ng_container_3_div_52_div_13_Template, 5, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, RelatorioComponent_ng_container_3_div_52_div_14_Template, 5, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, RelatorioComponent_ng_container_3_div_52_div_15_Template, 5, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, RelatorioComponent_ng_container_3_div_52_div_16_Template, 5, 1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, RelatorioComponent_ng_container_3_div_52_div_17_Template, 6, 2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, RelatorioComponent_ng_container_3_div_52_div_18_Template, 5, 2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("rel-visit-success", !v_r6.idmotivo)("rel-visit-fail", v_r6.idmotivo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Visita #", i_r7 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](v_r6.idmotivo ? "Malsucedida" : "Bem-sucedida");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](8, 16, v_r6.dtvisita, "dd/MM/yyyy"), " ", v_r6.horavisita, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", v_r6.nmpropriedade);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", v_r6.dscultura);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", v_r6.dsevento);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", v_r6.objetivo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", v_r6.dsproblema);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", v_r6.dsrecomendacao);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.hasPropLocation(v_r6) || ctx_r4.hasVisitLocation(v_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", v_r6.imagens && v_r6.imagens.length > 0);
} }
function RelatorioComponent_ng_container_3_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Nenhuma visita encontrada no per\u00EDodo informado. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RelatorioComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Agrodados Visitas Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RelatorioComponent_ng_container_3_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r34.print(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Imprimir / Salvar PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Relat\u00F3rio de Visitas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Representante");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Per\u00EDodo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "\u00DAltima Visita");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](35, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Total de Visitas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Bem-sucedidas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "Malsucedidas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, RelatorioComponent_ng_container_3_div_52_Template, 19, 19, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, RelatorioComponent_ng_container_3_div_53_Template, 2, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](56, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](57, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.cliente.nmcliente);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.cliente.vendedor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](28, 12, ctx_r2.dtini, "dd/MM/yyyy", "UTC"), " \u2014 ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](29, 16, ctx_r2.dtfim, "dd/MM/yyyy", "UTC"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](35, 20, ctx_r2.cliente.dtultima, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.visitas.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.successCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.failCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.visitas);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.visitas.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" Relat\u00F3rio gerado pelo Agrodados Visitas Dashboard \u2014 ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](56, 23, ctx_r2.dtini, "dd/MM/yyyy", "UTC"), " a ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind3"](57, 27, ctx_r2.dtfim, "dd/MM/yyyy", "UTC"), " ");
} }
function RelatorioComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RelatorioComponent_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r36.closeLightbox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RelatorioComponent_div_4_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RelatorioComponent_div_4_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r39.prevImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u276E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RelatorioComponent_div_4_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r40.rotateLightbox(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u21B6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RelatorioComponent_div_4_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r41.rotateLightbox(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u21B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RelatorioComponent_div_4_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r42.flipLightbox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u2194");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RelatorioComponent_div_4_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r43.nextImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u276F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RelatorioComponent_div_4_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r44.closeLightbox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("transform", ctx_r3.getLightboxTransform());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r3.lightbox.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.lightbox.idx === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r3.lightbox.idx === ctx_r3.lightbox.imgs.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r3.lightbox.idx + 1, " / ", ctx_r3.lightbox.imgs.length, "");
} }
class RelatorioComponent {
    constructor(route, http) {
        this.route = route;
        this.http = http;
        this.loading = true;
        this.error = false;
        this.cliente = null;
        this.visitas = [];
        this.lightbox = null;
    }
    onKeyDown(e) {
        if (!this.lightbox)
            return;
        if (e.key === 'Escape')
            this.closeLightbox();
        if (e.key === 'ArrowLeft')
            this.prevImage();
        if (e.key === 'ArrowRight')
            this.nextImage();
        if (e.key === 'r')
            this.rotateLightbox(1);
    }
    ngOnInit() {
        this.route.params.forEach((p) => (this.idcliente = p['idcliente']));
        this.route.queryParams.forEach((q) => {
            this.dtini = q['dtini'];
            this.dtfim = q['dtfim'];
            this.token = q['token'];
            this.sys = q['sys'];
        });
        if (this.token && this.sys) {
            this.load();
        }
        else {
            this.error = true;
            this.loading = false;
        }
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].URL_SERVER_PY;
            try {
                this.cliente = yield this.http
                    .get(`${url}cliente/byid?idsistema=${this.sys}&hash=${this.token}&idcliente=${this.idcliente}`)
                    .toPromise();
                this.visitas = (yield this.http
                    .post(`${url}visitas/doc?hash=${this.token}`, {
                    idsistema: this.sys,
                    idcliente: this.idcliente,
                    dtinicio: this.dtini,
                    dtfim: this.dtfim,
                })
                    .toPromise());
                for (const v of this.visitas) {
                    if (v.enderecocompleto) {
                        try {
                            v.enderecocompleto = JSON.parse(v.enderecocompleto);
                        }
                        catch (_) { }
                    }
                    if (v.imagens) {
                        try {
                            v.imagens = JSON.parse(v.imagens);
                        }
                        catch (_) { }
                    }
                    if (v.demarcacaoprop) {
                        try {
                            v.demarcacaoprop = JSON.parse(v.demarcacaoprop);
                        }
                        catch (_) { }
                    }
                }
            }
            catch (_) {
                this.error = true;
            }
            this.loading = false;
        });
    }
    get successCount() { return this.visitas.filter((v) => !v.idmotivo).length; }
    get failCount() { return this.visitas.filter((v) => v.idmotivo).length; }
    hasPropLocation(v) {
        return v.enderecocompleto && v.enderecocompleto.latitude && v.enderecocompleto.longitude;
    }
    hasVisitLocation(v) {
        return !!(v.latitudeoriginal && v.longitudeoriginal);
    }
    propLocation(v) {
        return { lat: Number(v.enderecocompleto.latitude), lng: Number(v.enderecocompleto.longitude) };
    }
    visitLocation(v) {
        return { lat: Number(v.latitudeoriginal), lng: Number(v.longitudeoriginal) };
    }
    staticMapUrl(lat, lng, zoom = 15) {
        const key = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].GOOGLE_API_MAPS_KEY;
        return `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=600x300&maptype=hybrid&markers=color:red%7C${lat},${lng}&key=${key}`;
    }
    print() { window.print(); }
    // Lightbox
    openLightbox(imgs, idx) {
        this.lightbox = { img: imgs[idx].linkimg, rotation: 0, flipped: false, imgs, idx };
    }
    closeLightbox() { this.lightbox = null; }
    rotateLightbox(dir) {
        this.lightbox.rotation = (this.lightbox.rotation + dir * 90 + 360) % 360;
    }
    flipLightbox() { this.lightbox.flipped = !this.lightbox.flipped; }
    prevImage() {
        if (this.lightbox && this.lightbox.idx > 0) {
            this.lightbox.idx--;
            this.lightbox.img = this.lightbox.imgs[this.lightbox.idx].linkimg;
            this.lightbox.rotation = 0;
            this.lightbox.flipped = false;
        }
    }
    nextImage() {
        if (this.lightbox && this.lightbox.idx < this.lightbox.imgs.length - 1) {
            this.lightbox.idx++;
            this.lightbox.img = this.lightbox.imgs[this.lightbox.idx].linkimg;
            this.lightbox.rotation = 0;
            this.lightbox.flipped = false;
        }
    }
    getLightboxTransform() {
        if (!this.lightbox)
            return '';
        return `rotate(${this.lightbox.rotation}deg) scaleX(${this.lightbox.flipped ? -1 : 1})`;
    }
}
RelatorioComponent.ɵfac = function RelatorioComponent_Factory(t) { return new (t || RelatorioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
RelatorioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RelatorioComponent, selectors: [["app-relatorio"]], hostBindings: function RelatorioComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function RelatorioComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
    } }, decls: 5, vars: 4, consts: [["id", "relatorio"], ["class", "rel-loading", 4, "ngIf"], ["class", "rel-error", 4, "ngIf"], [4, "ngIf"], ["class", "rel-lightbox-overlay", 3, "click", 4, "ngIf"], [1, "rel-loading"], [1, "rel-spinner"], [1, "rel-error"], [1, "rel-header", "noprint"], [1, "rel-logo"], ["src", "/assets/images/agrodadoscubew.svg", "height", "40px"], [1, "rel-print-btn", 3, "click"], [1, "rel-body"], [1, "rel-title"], [1, "rel-client-card"], [1, "rel-client-row"], [1, "rel-client-field"], [1, "rel-field-label"], [1, "rel-field-value"], [1, "rel-stats"], [1, "rel-stat"], [1, "stat-value"], [1, "stat-label"], [1, "rel-stat", "success"], [1, "rel-stat", "fail"], ["class", "rel-visit", 4, "ngFor", "ngForOf"], ["class", "rel-empty", 4, "ngIf"], [1, "rel-footer"], [1, "rel-visit"], [1, "rel-visit-header"], [1, "rel-visit-num"], [1, "rel-visit-badge"], [1, "rel-visit-date"], ["class", "rel-visit-prop", 4, "ngIf"], [1, "rel-visit-body"], [1, "rel-field-row"], ["class", "rel-field", 4, "ngIf"], ["class", "rel-maps", 4, "ngIf"], ["class", "rel-images", 4, "ngIf"], [1, "rel-visit-prop"], [1, "rel-field"], [1, "rel-field-value", "problem"], [1, "rel-maps"], [1, "rel-maps-label"], [1, "rel-maps-grid"], ["class", "rel-map-card", 4, "ngIf"], [1, "rel-map-card"], [1, "rel-map-title"], [1, "rel-map-interactive", "noprint"], ["width", "100%", "height", "220px", "icon", "/assets/icons/homemarker.png", 3, "id", "zoom", "location"], ["alt", "Mapa da propriedade", 1, "rel-map-static", "printonly", 3, "src"], ["width", "100%", "height", "220px", "icon", "/assets/icons/carmarker.svg", 3, "id", "zoom", "location"], ["alt", "Mapa de abertura da visita", 1, "rel-map-static", "printonly", 3, "src"], [1, "rel-images"], [1, "rel-images-label"], [1, "rel-images-grid"], ["class", "rel-img-wrap", 3, "click", 4, "ngFor", "ngForOf"], [1, "rel-img-wrap", 3, "click"], [3, "src"], [1, "rel-img-overlay", "noprint"], [1, "rel-empty"], [1, "rel-lightbox-overlay", 3, "click"], [1, "rel-lightbox-content", 3, "click"], [1, "rel-lightbox-controls"], ["title", "Anterior", 3, "disabled", "click"], ["title", "Girar esquerda", 3, "click"], ["title", "Girar direita", 3, "click"], ["title", "Espelhar", 3, "click"], ["title", "Pr\u00F3xima", 3, "disabled", "click"], ["title", "Fechar", 1, "btn-close", 3, "click"], [1, "rel-lightbox-counter"]], template: function RelatorioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RelatorioComponent_div_1_Template, 4, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RelatorioComponent_div_2_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RelatorioComponent_ng_container_3_Template, 58, 31, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RelatorioComponent_div_4_Template, 18, 7, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.error && !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading && !ctx.error && ctx.cliente);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.lightbox);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _components_mapsgoogle_mapsgoogle_component__WEBPACK_IMPORTED_MODULE_6__["MapsgoogleComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: ["@charset \"UTF-8\";\n#relatorio[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f4f6f9;\n  font-family: Poppins, sans-serif;\n}\n.rel-header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  background: var(--color-primary);\n  padding: 10px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  z-index: 100;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n}\n.rel-header[_ngcontent-%COMP%]   .rel-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: white;\n  font-size: 14px;\n  font-weight: 600;\n}\n.rel-print-btn[_ngcontent-%COMP%] {\n  background: var(--color-secondary-contrast);\n  color: var(--color-primary);\n  border: none;\n  border-radius: 6px;\n  padding: 8px 16px;\n  font-family: Poppins, sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.rel-print-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n.rel-body[_ngcontent-%COMP%] {\n  \n  margin: 0 auto;\n  padding: 80px 24px 48px;\n  height: calc(100vh - 146px);\n  overflow: auto;\n}\n.rel-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: var(--color-primary);\n  margin-bottom: 20px;\n  border-bottom: 2px solid var(--color-secondary);\n  padding-bottom: 8px;\n}\n.rel-client-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius);\n  padding: 20px;\n  margin-bottom: 24px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.rel-client-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  margin-bottom: 16px;\n}\n.rel-client-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 180px;\n}\n.rel-field-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-grey);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 4px;\n}\n.rel-field-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--color-text);\n}\n.rel-field-value.problem[_ngcontent-%COMP%] {\n  color: var(--color-red);\n}\n.rel-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  border-top: 1px solid #eee;\n  padding-top: 16px;\n}\n.rel-stat[_ngcontent-%COMP%] {\n  flex: 1 1 120px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 12px;\n  border-radius: var(--radius);\n  background: var(--color-odd);\n}\n.rel-stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--color-primary);\n}\n.rel-stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--color-grey);\n  text-align: center;\n}\n.rel-stat.success[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: var(--color-tertiary);\n}\n.rel-stat.fail[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  color: var(--color-red);\n}\n.rel-visit[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: var(--radius);\n  margin-bottom: 16px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n  page-break-inside: avoid;\n}\n.rel-visit-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 16px;\n  background: var(--color-primary);\n  color: white;\n  flex-wrap: wrap;\n}\n.rel-visit-header.rel-visit-success[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--color-tertiary);\n}\n.rel-visit-header.rel-visit-fail[_ngcontent-%COMP%] {\n  border-left: 4px solid var(--color-red);\n}\n.rel-visit-num[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 14px;\n  color: var(--color-secondary-contrast);\n}\n.rel-visit-badge[_ngcontent-%COMP%] {\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.2);\n}\n.rel-visit-date[_ngcontent-%COMP%], .rel-visit-prop[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(255, 255, 255, 0.8);\n}\n.rel-visit-date[_ngcontent-%COMP%]::before, .rel-visit-prop[_ngcontent-%COMP%]::before {\n  content: \"\u00B7 \";\n}\n.rel-visit-body[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.rel-field-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-bottom: 12px;\n}\n.rel-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 180px;\n}\n.rel-maps[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.rel-maps-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-grey);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n}\n.rel-maps-grid[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.rel-map-card[_ngcontent-%COMP%] {\n  flex: 1 1 280px;\n  border: 1px solid #eee;\n  border-radius: var(--radius);\n  overflow: hidden;\n}\n.rel-map-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-primary);\n  padding: 6px 10px;\n  background: var(--color-odd);\n  border-bottom: 1px solid #eee;\n}\n.rel-map-static[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 220px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  display: none;\n}\n.printonly[_ngcontent-%COMP%] {\n  display: none;\n}\n.rel-img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.rel-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 135px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n  border: 1px solid #eee;\n  display: block;\n}\n.rel-img-wrap[_ngcontent-%COMP%]   .rel-img-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-family: Poppins, sans-serif;\n  opacity: 0;\n  transition: opacity 0.2s;\n  border-radius: 4px;\n}\n.rel-img-wrap[_ngcontent-%COMP%]:hover   .rel-img-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.rel-lightbox-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.92);\n  z-index: 2000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.rel-lightbox-content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  max-width: 90vw;\n  max-height: 90vh;\n}\n.rel-lightbox-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 85vw;\n  max-height: 78vh;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 4px;\n  transition: transform 0.25s ease;\n}\n.rel-lightbox-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.rel-lightbox-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: white;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  font-size: 18px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s;\n}\n.rel-lightbox-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(255, 255, 255, 0.3);\n}\n.rel-lightbox-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: default;\n}\n.rel-lightbox-controls[_ngcontent-%COMP%]   button.btn-close[_ngcontent-%COMP%] {\n  background: rgba(202, 17, 17, 0.6);\n}\n.rel-lightbox-controls[_ngcontent-%COMP%]   button.btn-close[_ngcontent-%COMP%]:hover {\n  background: rgba(202, 17, 17, 0.9);\n}\n.rel-lightbox-counter[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 13px;\n  font-family: Poppins, sans-serif;\n}\n.rel-images-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--color-grey);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 8px;\n}\n.rel-images-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.rel-images-grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 135px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 4px;\n  border: 1px solid #eee;\n}\n.rel-loading[_ngcontent-%COMP%], .rel-error[_ngcontent-%COMP%], .rel-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 60vh;\n  color: var(--color-grey);\n  font-size: 15px;\n  gap: 16px;\n}\n.rel-spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #ddd;\n  border-top-color: var(--color-secondary);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.rel-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--color-grey);\n  font-size: 12px;\n  padding: 24px 0;\n  border-top: 1px solid #eee;\n  margin-top: 24px;\n}\n@media print {\n  .noprint[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .printonly[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n\n  .rel-map-static[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 220px;\n    -o-object-fit: cover;\n       object-fit: cover;\n  }\n\n  .rel-body[_ngcontent-%COMP%] {\n    padding-top: 24px;\n    height: auto;\n    overflow: visible;\n  }\n\n  #relatorio[_ngcontent-%COMP%] {\n    background: white;\n  }\n\n  .rel-visit[_ngcontent-%COMP%] {\n    page-break-inside: avoid;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3JlbGF0b3Jpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFFRjtBQUVBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtFQUNBLHNCQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFHQTtFQUNFLDJDQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBQUY7QUFDRTtFQUNFLGFBQUE7QUFDSjtBQUlBO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUFERjtBQUlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUtBO0VBQ0UsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlDQUFBO0FBRkY7QUFLQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBRkY7QUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFGRjtBQUtBO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBRkY7QUFLQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBRkY7QUFJRTtFQUNFLHVCQUFBO0FBRko7QUFNQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7QUFIRjtBQU1BO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7QUFIRjtBQUtFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFISjtBQUtFO0VBQ0UsZUFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUFISjtBQU1FO0VBQ0UsNEJBQUE7QUFKSjtBQU1FO0VBQ0UsdUJBQUE7QUFKSjtBQVNBO0VBQ0UsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBTkY7QUFTQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFORjtBQVFFO0VBQ0UsNENBQUE7QUFOSjtBQVFFO0VBQ0UsdUNBQUE7QUFOSjtBQVVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUFQRjtBQVVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FBUEY7QUFVQTs7RUFFRSxlQUFBO0VBQ0EsK0JBQUE7QUFQRjtBQVNFOztFQUNFLGFBQUE7QUFOSjtBQVVBO0VBQ0UsYUFBQTtBQVBGO0FBVUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQVBGO0FBVUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBUEY7QUFXQTtFQUNFLG1CQUFBO0FBUkY7QUFXQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBUkY7QUFXQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtBQVJGO0FBV0E7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBUkY7QUFXQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBUkY7QUFXQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtFQUNBLGFBQUE7QUFSRjtBQVdBO0VBQWEsYUFBQTtBQVBiO0FBVUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUFQRjtBQVNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFQSjtBQVVFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtBQVJKO0FBV0U7RUFBMkIsVUFBQTtBQVI3QjtBQVlBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVRGO0FBWUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVRGO0FBV0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtBQVRKO0FBYUE7RUFDRSxhQUFBO0VBQ0EsUUFBQTtBQVZGO0FBWUU7RUFDRSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBQVZKO0FBWUk7RUFBeUIsb0NBQUE7QUFUN0I7QUFVSTtFQUFhLFlBQUE7RUFBYyxlQUFBO0FBTi9CO0FBT0k7RUFBYyxrQ0FBQTtBQUpsQjtBQUltRDtFQUFVLGtDQUFBO0FBRDdEO0FBS0E7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQUZGO0FBTUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQUhGO0FBTUE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7QUFIRjtBQUtFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUhKO0FBUUE7OztFQUdFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFMRjtBQVFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQUxGO0FBUUE7RUFDRTtJQUNFLHlCQUFBO0VBTEY7QUFDRjtBQVFBO0VBQ0Usa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQU5GO0FBU0E7RUFDRTtJQUFXLHdCQUFBO0VBTFg7O0VBTUE7SUFBYSx5QkFBQTtFQUZiOztFQUlBO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0Esb0JBQUE7T0FBQSxpQkFBQTtFQURGOztFQUlBO0lBQ0UsaUJBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7RUFERjs7RUFJQTtJQUFhLGlCQUFBO0VBQWI7O0VBRUE7SUFBYSx3QkFBQTtFQUViO0FBQ0YiLCJmaWxlIjoicmVsYXRvcmlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JlbGF0b3JpbyB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiAjZjRmNmY5O1xuICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcbn1cblxuLy8gSGVhZGVyIGZpeG8gKG7Do28gaW1wcmltZSlcbi5yZWwtaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgcGFkZGluZzogMTBweCAyNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHotaW5kZXg6IDEwMDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAucmVsLWxvZ28ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG5cbi5yZWwtcHJpbnQtYnRuIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cztcbiAgJjpob3ZlciB7XG4gICAgb3BhY2l0eTogMC44NTtcbiAgfVxufVxuXG4vLyBDb250ZcO6ZG9cbi5yZWwtYm9keSB7XG4gIC8qIG1heC13aWR0aDogOTAwcHg7ICovXG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA4MHB4IDI0cHggNDhweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTQ2cHgpO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnJlbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cblxuLy8gQ2FyZCBkbyBjbGllbnRlXG4ucmVsLWNsaWVudC1jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG4ucmVsLWNsaWVudC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnJlbC1jbGllbnQtZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxIDEgMTgwcHg7XG59XG5cbi5yZWwtZmllbGQtbGFiZWwge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5yZWwtZmllbGQtdmFsdWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcblxuICAmLnByb2JsZW0ge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1yZWQpO1xuICB9XG59XG5cbi5yZWwtc3RhdHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE2cHg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xufVxuXG4ucmVsLXN0YXQge1xuICBmbGV4OiAxIDEgMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW9kZCk7XG5cbiAgLnN0YXQtdmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgfVxuICAuc3RhdC1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAmLnN1Y2Nlc3MgLnN0YXQtdmFsdWUge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7XG4gIH1cbiAgJi5mYWlsIC5zdGF0LXZhbHVlIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcmVkKTtcbiAgfVxufVxuXG4vLyBWaXNpdGFcbi5yZWwtdmlzaXQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNyk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcbn1cblxuLnJlbC12aXNpdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZmxleC13cmFwOiB3cmFwO1xuXG4gICYucmVsLXZpc2l0LXN1Y2Nlc3Mge1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tY29sb3ItdGVydGlhcnkpO1xuICB9XG4gICYucmVsLXZpc2l0LWZhaWwge1xuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tY29sb3ItcmVkKTtcbiAgfVxufVxuXG4ucmVsLXZpc2l0LW51bSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG59XG5cbi5yZWwtdmlzaXQtYmFkZ2Uge1xuICBwYWRkaW5nOiAycHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cblxuLnJlbC12aXNpdC1kYXRlLFxuLnJlbC12aXNpdC1wcm9wIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCLCtyBcIjtcbiAgfVxufVxuXG4ucmVsLXZpc2l0LWJvZHkge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4ucmVsLWZpZWxkLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4ucmVsLWZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMSAxIDE4MHB4O1xufVxuXG4vLyBNYXBhc1xuLnJlbC1tYXBzIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnJlbC1tYXBzLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG4ucmVsLW1hcHMtZ3JpZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTJweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucmVsLW1hcC1jYXJkIHtcbiAgZmxleDogMSAxIDI4MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ucmVsLW1hcC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itb2RkKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG59XG5cbi5yZWwtbWFwLXN0YXRpYyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIyMHB4O1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnByaW50b25seSB7IGRpc3BsYXk6IG5vbmU7IH1cblxuLy8gSW1hZ2VucyBjbGljw6F2ZWlzXG4ucmVsLWltZy13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgaGVpZ2h0OiAxMzVweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5yZWwtaW1nLW92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBpbnNldDogMDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNDUpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuXG4gICY6aG92ZXIgLnJlbC1pbWctb3ZlcmxheSB7IG9wYWNpdHk6IDE7IH1cbn1cblxuLy8gTGlnaHRib3hcbi5yZWwtbGlnaHRib3gtb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC45Mik7XG4gIHotaW5kZXg6IDIwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucmVsLWxpZ2h0Ym94LWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbiAgbWF4LXdpZHRoOiA5MHZ3O1xuICBtYXgtaGVpZ2h0OiA5MHZoO1xuXG4gIGltZyB7XG4gICAgbWF4LXdpZHRoOiA4NXZ3O1xuICAgIG1heC1oZWlnaHQ6IDc4dmg7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2U7XG4gIH1cbn1cblxuLnJlbC1saWdodGJveC1jb250cm9scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuXG4gIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjE1KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cztcblxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7IH1cbiAgICAmOmRpc2FibGVkIHsgb3BhY2l0eTogMC4zOyBjdXJzb3I6IGRlZmF1bHQ7IH1cbiAgICAmLmJ0bi1jbG9zZSB7IGJhY2tncm91bmQ6IHJnYmEoMjAyLDE3LDE3LDAuNik7ICY6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDIwMiwxNywxNywwLjkpOyB9IH1cbiAgfVxufVxuXG4ucmVsLWxpZ2h0Ym94LWNvdW50ZXIge1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xufVxuXG4vLyBJbWFnZW5zXG4ucmVsLWltYWdlcy1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXkpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLnJlbC1pbWFnZXMtZ3JpZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA4cHg7XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgaGVpZ2h0OiAxMzVweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgfVxufVxuXG4vLyBFc3RhZG9zXG4ucmVsLWxvYWRpbmcsXG4ucmVsLWVycm9yLFxuLnJlbC1lbXB0eSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA2MHZoO1xuICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleSk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZ2FwOiAxNnB4O1xufVxuXG4ucmVsLXNwaW5uZXIge1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjZGRkO1xuICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogc3BpbiAwLjhzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuLnJlbC1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5KTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAyNHB4IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG5AbWVkaWEgcHJpbnQge1xuICAubm9wcmludCB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAucHJpbnRvbmx5IHsgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxuXG4gIC5yZWwtbWFwLXN0YXRpYyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyMjBweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxuXG4gIC5yZWwtYm9keSB7XG4gICAgcGFkZGluZy10b3A6IDI0cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5cbiAgI3JlbGF0b3JpbyB7IGJhY2tncm91bmQ6IHdoaXRlOyB9XG5cbiAgLnJlbC12aXNpdCB7IHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDsgfVxufVxuIl19 */"] });


/***/ }),

/***/ "WaCx":
/*!***************************************************!*\
  !*** ./src/app/components/icon/icon.component.ts ***!
  \***************************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class IconComponent {
    constructor() {
        this.height = "50px";
        this.width = "50px";
        this.icon = "";
        this.margin = "4px";
    }
    ngOnInit() {
    }
}
IconComponent.ɵfac = function IconComponent_Factory(t) { return new (t || IconComponent)(); };
IconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IconComponent, selectors: [["icon"]], inputs: { height: "height", width: "width", icon: "icon", margin: "margin" }, decls: 2, vars: 8, consts: [["id", "icon"], [1, "icon"]], template: function IconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", "url(" + ctx.icon + ")")("width", ctx.width)("height", ctx.height)("margin", ctx.margin);
    } }, styles: ["#icon[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  background-repeat: no-repeat !important;\n  background-size: contain !important;\n  background-position: center !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ljb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx1Q0FBQTtFQUNBLG1DQUFBO0VBQ0Esc0NBQUE7QUFBUiIsImZpbGUiOiJpY29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ljb257XHJcbiAgICAuaWNvbntcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "XVyU":
/*!*********************************************!*\
  !*** ./src/app/components/themes/locate.ts ***!
  \*********************************************/
/*! exports provided: locale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locale", function() { return locale; });
/**
 * amCharts 4 locale
 *
 * Locale: pt_BR
 * Language: Brazilian Portuguese
 *
 * Follow instructions in [on this page](https://www.amcharts.com/docs/v4/tutorials/creating-translations/) to make corrections or add new translations.
 */
const locale = {
    // Number formatting options.
    //
    // Please check with the local standards which separator is accepted to be
    // used for separating decimals, and which for thousands.
    _decimalSeparator: ',',
    _thousandSeparator: '.',
    // Default date formats for various periods.
    //
    // This should reflect official or de facto formatting universally accepted
    // in the country translation is being made for
    // Available format codes here:
    // https://www.amcharts.com/docs/v4/concepts/formatters/formatting-date-time/#Format_codes
    //
    // This will be used when formatting date/time for particular granularity,
    // e.g. "_date_hour" will be shown whenever we need to show time as hours.
    _date_millisecond: 'mm:ss SSS',
    _date_second: 'HH:mm:ss',
    _date_minute: 'HH:mm',
    _date_hour: 'HH:mm',
    _date_day: 'dd MMM',
    _date_week: 'ww',
    _date_month: 'MMM',
    _date_year: 'yyyy',
    // Default duration formats for various base units.
    //
    // This will be used by DurationFormatter to format numeric values into
    // duration.
    //
    // Available codes here:
    // https://www.amcharts.com/docs/v4/concepts/formatters/formatting-duration/#Available_Codes
    _duration_millisecond: 'SSS',
    _duration_second: 'ss',
    _duration_minute: 'mm',
    _duration_hour: 'hh',
    _duration_day: 'dd',
    _duration_week: 'ww',
    _duration_month: 'MM',
    _duration_year: 'yyyy',
    // Era translations
    _era_ad: 'DC',
    _era_bc: 'AC',
    // Day part, used in 12-hour formats, e.g. 5 P.M.
    // Please note that these come in 3 variants:
    // * one letter (e.g. "A")
    // * two letters (e.g. "AM")
    // * two letters with dots (e.g. "A.M.")
    //
    // All three need to to be translated even if they are all the same. Some
    // users might use one, some the other.
    A: '',
    P: '',
    AM: '',
    PM: '',
    'A.M.': '',
    'P.M.': '',
    // Date-related stuff.
    //
    // When translating months, if there's a difference, use the form which is
    // best for a full date, e.g. as you would use it in "2018 January 1".
    //
    // Note that May is listed twice. This is because in English May is the same
    // in both long and short forms, while in other languages it may not be the
    // case. Translate "May" to full word, while "May(short)" to shortened
    // version.
    January: 'Janeiro',
    February: 'Fevereiro',
    March: 'Março',
    April: 'Abril',
    May: 'Maio',
    June: 'Junho',
    July: 'Julho',
    August: 'Agosto',
    September: 'Setembro',
    October: 'Outubro',
    November: 'Novembro',
    December: 'Dezembro',
    Jan: 'Jan',
    Feb: 'Fev',
    Mar: 'Mar',
    Apr: 'Abr',
    'May(short)': 'Mai',
    Jun: 'Jun',
    Jul: 'Jul',
    Aug: 'Ago',
    Sep: 'Set',
    Oct: 'Out',
    Nov: 'Nov',
    Dec: 'Dez',
    // Weekdays.
    Sunday: 'Domingo',
    Monday: 'Segunda-feira',
    Tuesday: 'Terça-feira',
    Wednesday: 'Quarta-feira',
    Thursday: 'Quinta-feira',
    Friday: 'Sexta-feira',
    Saturday: 'Sábado',
    Sun: 'Dom',
    Mon: 'Seg',
    Tue: 'Ter',
    Wed: 'Qua',
    Thu: 'Qui',
    Fri: 'Sex',
    Sat: 'Sáb',
    // Date ordinal function.
    //
    // This is used when adding number ordinal when formatting days in dates.
    //
    // E.g. "January 1st", "February 2nd".
    //
    // The function accepts day number, and returns a string to be added to the
    // day, like in default English translation, if we pass in 2, we will receive
    // "nd" back.
    _dateOrd: function (day) {
        return 'º';
    },
    // Various chart controls.
    // Shown as a tooltip on zoom out button.
    'Zoom Out': 'Reduzir Zoom',
    // Timeline buttons
    Play: 'Play',
    Stop: 'Parar',
    // Chart's Legend screen reader title.
    Legend: 'Legenda',
    // Legend's item screen reader indicator.
    'Click, tap or press ENTER to toggle': 'Clique, toque ou pressione ENTER para alternar',
    // Shown when the chart is busy loading something.
    Loading: 'Carregando',
    // Shown as the first button in the breadcrumb navigation, e.g.:
    // Home > First level > ...
    Home: 'Início',
    // Chart types.
    // Those are used as default screen reader titles for the main chart element
    // unless developer has set some more descriptive title.
    Chart: 'Gráfico',
    'Serial chart': 'Gráfico Serial',
    'X/Y chart': 'Gráfico XY',
    'Pie chart': 'Gráfico de Pizza',
    'Gauge chart': 'Gráfico Indicador',
    'Radar chart': 'Gráfico de Radar',
    'Sankey diagram': 'Diagrama Sankey',
    'Chord diagram': 'Diagram Chord',
    'Flow diagram': 'Diagrama Flow',
    'TreeMap chart': 'Gráfico de Mapa de Árvore',
    // Series types.
    // Used to name series by type for screen readers if they do not have their
    // name set.
    Series: 'Séries',
    'Candlestick Series': 'Séries do Candlestick',
    'Column Series': 'Séries de Colunas',
    'Line Series': 'Séries de Linhas',
    'Pie Slice Series': 'Séries de Fatias de Pizza',
    'X/Y Series': 'Séries de XY',
    // Map-related stuff.
    Map: 'Mapa',
    'Press ENTER to zoom in': 'Pressione ENTER para aumentar o zoom',
    'Press ENTER to zoom out': 'Pressione ENTER para diminuir o zoom',
    'Use arrow keys to zoom in and out': 'Use as setas para diminuir ou aumentar o zoom',
    'Use plus and minus keys on your keyboard to zoom in and out': 'Use as teclas mais ou menos no seu teclado para diminuir ou aumentar o zoom',
    // Export-related stuff.
    // These prompts are used in Export menu labels.
    //
    // "Export" is the top-level menu item.
    //
    // "Image", "Data", "Print" as second-level indicating type of export
    // operation.
    //
    // Leave actual format untranslated, unless you absolutely know that they
    // would convey more meaning in some other way.
    Export: 'Exportar',
    Image: 'Imagem',
    Data: 'Dados',
    Print: 'Imprimir',
    'Click, tap or press ENTER to open': 'Clique, toque ou pressione ENTER para abrir',
    'Click, tap or press ENTER to print.': 'Clique, toque ou pressione ENTER para imprimir',
    'Click, tap or press ENTER to export as %1.': 'Clique, toque ou pressione ENTER para exportar como %1.',
    'To save the image, right-click this link and choose "Save picture as..."': 'Para salvar a imagem, clique no link com o botão da direira e escolha "Salvar imagem como..."',
    'To save the image, right-click thumbnail on the left and choose "Save picture as..."': 'Para salvar, clique na imagem à esquerda com o botão direito e escolha "Salvar imagem como..."',
    '(Press ESC to close this message)': '(Pressione ESC para fechar esta mensagem)',
    'Image Export Complete': 'A exportação da imagem foi completada',
    'Export operation took longer than expected. Something might have gone wrong.': 'A exportação da imagem demorou mais do que o experado. Algo deve ter dado errado.',
    'Saved from': 'Salvo de',
    PNG: '',
    JPG: '',
    GIF: '',
    SVG: '',
    PDF: '',
    JSON: '',
    CSV: '',
    XLSX: '',
    // Scrollbar-related stuff.
    //
    // Scrollbar is a control which can zoom and pan the axes on the chart.
    //
    // Each scrollbar has two grips: left or right (for horizontal scrollbar) or
    // upper and lower (for vertical one).
    //
    // Prompts change in relation to whether Scrollbar is vertical or horizontal.
    //
    // The final section is used to indicate the current range of selection.
    'Use TAB to select grip buttons or left and right arrows to change selection': 'Use TAB para selecionar os botões ou setas para a direita ou esquerda para mudar a seleção',
    'Use left and right arrows to move selection': 'Use as setas para a esquerda ou direita para mover a seleção',
    'Use left and right arrows to move left selection': 'Use as setas para a esquerda ou direita para mover a seleção da esquerda',
    'Use left and right arrows to move right selection': 'Use as setas para a esquerda ou direita para mover a seleção da direita',
    'Use TAB select grip buttons or up and down arrows to change selection': 'Use TAB para selecionar os botões ou setas para cima ou para baixo para mudar a seleção',
    'Use up and down arrows to move selection': 'Use as setas para cima ou para baixo para mover a seleção',
    'Use up and down arrows to move lower selection': 'Use as setas para cima ou para baixo para mover a seleção de baixo',
    'Use up and down arrows to move upper selection': 'Use as setas para cima ou para baixo para mover a seleção de cima',
    'From %1 to %2': 'De %1 até %2',
    'From %1': 'De %1',
    'To %1': 'Até %1',
    // Data loader-related.
    'No parser available for file: %1': 'Não há um interpretador para este arquivo: %1',
    'Error parsing file: %1': 'Erro analizando o arquivo: %1',
    'Unable to load file: %1': 'O arquivo não pôde ser carregado: %1',
    'Invalid date': 'Data inválida',
};


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/menu/menu.component */ "0oYm");
/* harmony import */ var _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/icon/icon.component */ "WaCx");
/* harmony import */ var _components_linechart_linechart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/linechart/linechart.component */ "pBvA");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/card/card.component */ "lXt9");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/searchbar/searchbar.component */ "1ujl");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _pages_visits_visits_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/visits/visits.component */ "T73m");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "e5sC");
/* harmony import */ var _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/datepicker/datepicker.component */ "JZE2");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _components_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/barchart/barchart.component */ "HKVK");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _pages_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/clientes/clientes.component */ "BPMd");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _components_progress_progress_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/progress/progress.component */ "1VCC");
/* harmony import */ var _pages_vendedores_vendedores_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/vendedores/vendedores.component */ "7HkS");
/* harmony import */ var _details_visitascliente_visitascliente_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./details/visitascliente/visitascliente.component */ "aaPi");
/* harmony import */ var _components_piechart_piechart_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/piechart/piechart.component */ "fCm4");
/* harmony import */ var _components_mapsgoogle_mapsgoogle_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/mapsgoogle/mapsgoogle.component */ "ZcpQ");
/* harmony import */ var _components_dropsearch_dropsearch_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/dropsearch/dropsearch.component */ "pwE2");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _details_visitadetail_visitadetail_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./details/visitadetail/visitadetail.component */ "hFHy");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _components_inlinespin_inlinespin_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/inlinespin/inlinespin.component */ "Hkk2");
/* harmony import */ var _components_chartdistance_chartdistance_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/chartdistance/chartdistance.component */ "2Kee");
/* harmony import */ var _pipes_fixed_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pipes/fixed.pipe */ "nRiE");
/* harmony import */ var _pages_agendamentos_agendamentos_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/agendamentos/agendamentos.component */ "v9TP");
/* harmony import */ var _registers_addagendamento_addagendamento_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./registers/addagendamento/addagendamento.component */ "V+xH");
/* harmony import */ var _components_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/skeleton/skeleton.component */ "eO4b");
/* harmony import */ var _pages_relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/relatorio/relatorio.component */ "V3xA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/core */ "fXoL");







































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_38__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_5__["MenuComponent"],
        _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"],
        _components_linechart_linechart_component__WEBPACK_IMPORTED_MODULE_7__["LinechartComponent"],
        _components_card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
        _components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_10__["SearchbarComponent"],
        _pages_visits_visits_component__WEBPACK_IMPORTED_MODULE_12__["VisitsComponent"],
        _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__["SpinnerComponent"],
        _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_14__["DatepickerComponent"],
        _components_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_17__["BarchartComponent"],
        _pages_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
        _pages_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_20__["ClientesComponent"],
        _components_progress_progress_component__WEBPACK_IMPORTED_MODULE_22__["ProgressComponent"],
        _pages_vendedores_vendedores_component__WEBPACK_IMPORTED_MODULE_23__["VendedoresComponent"],
        _details_visitascliente_visitascliente_component__WEBPACK_IMPORTED_MODULE_24__["VisitasclienteComponent"],
        _components_piechart_piechart_component__WEBPACK_IMPORTED_MODULE_25__["PiechartComponent"],
        _components_mapsgoogle_mapsgoogle_component__WEBPACK_IMPORTED_MODULE_26__["MapsgoogleComponent"],
        _components_dropsearch_dropsearch_component__WEBPACK_IMPORTED_MODULE_27__["DropsearchComponent"],
        _details_visitadetail_visitadetail_component__WEBPACK_IMPORTED_MODULE_29__["VisitadetailComponent"],
        _components_inlinespin_inlinespin_component__WEBPACK_IMPORTED_MODULE_31__["InlinespinComponent"],
        _components_chartdistance_chartdistance_component__WEBPACK_IMPORTED_MODULE_32__["ChartdistanceComponent"],
        _pipes_fixed_pipe__WEBPACK_IMPORTED_MODULE_33__["FixedPipe"],
        _pages_agendamentos_agendamentos_component__WEBPACK_IMPORTED_MODULE_34__["AgendamentosComponent"],
        _registers_addagendamento_addagendamento_component__WEBPACK_IMPORTED_MODULE_35__["AddagendamentoComponent"],
        _components_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_36__["SkeletonComponent"],
        _pages_relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_37__["RelatorioComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_28__["MatDialogModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_21__["MatProgressBarModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_19__["MatSnackBarModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_30__["MatIconModule"]] }); })();


/***/ }),

/***/ "ZcpQ":
/*!***************************************************************!*\
  !*** ./src/app/components/mapsgoogle/mapsgoogle.component.ts ***!
  \***************************************************************/
/*! exports provided: MapsgoogleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsgoogleComponent", function() { return MapsgoogleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @googlemaps/js-api-loader */ "rSCx");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "AytR");





const loader = new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_2__["Loader"]({
    apiKey: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].GOOGLE_API_MAPS_KEY,
    version: "weekly",
    libraries: ["geometry", "marker"],
});
class MapsgoogleComponent {
    constructor() {
        this.markers = [];
        this.marks = [];
        this.colors = [];
        this.labels = [];
        this.width = "inherit";
        this.height = "inherit";
        this.id = "map";
        this.zoom = 8;
        this.typemap = "hybrid";
        this.getdistance = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.totaldistance = 0;
    }
    ngOnInit() {
        setTimeout(() => {
            this.init();
        }, 100);
    }
    getColor(i) {
        try {
            return this.colors[i];
        }
        catch (error) {
            return "#ff0000";
        }
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield loader.load();
            if (this.location) {
                this.map = new google.maps.Map(document.getElementById(this.id), {
                    center: this.location,
                    zoom: this.zoom,
                    mapId: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].GOOGLE_MAP_ID,
                    controlSize: 24,
                    mapTypeId: this.typemap,
                    scrollwheel: false,
                });
                this.setMarker(this.location);
                this.setDemarcacao();
            }
            if (this.center) {
                console.log(this.center);
                this.map = new google.maps.Map(document.getElementById(this.id), {
                    center: this.center,
                    zoom: this.zoom,
                    mapId: src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].GOOGLE_MAP_ID,
                    // disableDefaultUI: true,
                    controlSize: 24,
                    mapTypeId: this.typemap,
                    scrollwheel: false,
                });
                if (this.marks ? this.marks.length > 0 : false) {
                    for (let j = 0; j < this.marks.length; j++) {
                        this.setMarker(this.marks[j]);
                        if (j > 0) {
                            this.routeService(this.marks[j - 1], this.marks[j], this.getColor(j - 1));
                        }
                    }
                }
            }
        });
    }
    routeService(loc1, loc2, color = "#FF0000") {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const res = yield fetch("https://routes.googleapis.com/directions/v2:computeRoutes", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Goog-Api-Key": src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].GOOGLE_API_MAPS_KEY,
                        "X-Goog-FieldMask": "routes.distanceMeters,routes.polyline.encodedPolyline",
                    },
                    body: JSON.stringify({
                        origin: {
                            location: { latLng: { latitude: loc1.lat, longitude: loc1.lng } },
                        },
                        destination: {
                            location: { latLng: { latitude: loc2.lat, longitude: loc2.lng } },
                        },
                        travelMode: "DRIVE",
                    }),
                });
                const data = yield res.json();
                const route = (_a = data.routes) === null || _a === void 0 ? void 0 : _a[0];
                if (!route)
                    return;
                this.totaldistance += route.distanceMeters;
                this.getdistance.emit((this.totaldistance / 1000).toFixed(2));
                const path = google.maps.geometry.encoding.decodePath(route.polyline.encodedPolyline);
                new google.maps.Polyline({
                    path,
                    strokeColor: color,
                    strokeOpacity: 1,
                    strokeWeight: 4,
                    map: this.map,
                });
            }
            catch (error) {
                console.log("Routes request failed:", error);
            }
        });
    }
    setMarker(location) {
        let content;
        if (this.icon) {
            const img = document.createElement("img");
            img.src = this.icon;
            img.style.width = "50px";
            img.style.height = "50px";
            content = img;
        }
        if (location.label) {
            const div = document.createElement("div");
            div.textContent = location.label;
            content = div;
        }
        const marker = new google.maps.marker.AdvancedMarkerElement(Object.assign({ position: location, map: this.map }, (content && { content })));
        this.markers.push(marker);
    }
    setDemarcacao() {
        if (this.demarcacao) {
            const bermudaTriangle = new google.maps.Polygon({
                paths: this.demarcacao,
                strokeColor: "#FF0000",
                strokeOpacity: 0.8,
                strokeWeight: 2,
                fillColor: "#FF0000",
                fillOpacity: 0.35,
            });
            bermudaTriangle.setMap(this.map);
        }
    }
}
MapsgoogleComponent.ɵfac = function MapsgoogleComponent_Factory(t) { return new (t || MapsgoogleComponent)(); };
MapsgoogleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MapsgoogleComponent, selectors: [["mapscomp"]], inputs: { location: "location", center: "center", demarcacao: "demarcacao", markers: "markers", marks: "marks", colors: "colors", labels: "labels", width: "width", height: "height", icon: "icon", id: "id", zoom: "zoom", typemap: "typemap" }, outputs: { getdistance: "getdistance" }, decls: 2, vars: 9, template: function MapsgoogleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.height)("width", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.height)("width", ctx.width);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXBzZ29vZ2xlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "aaPi":
/*!********************************************************************!*\
  !*** ./src/app/details/visitascliente/visitascliente.component.ts ***!
  \********************************************************************/
/*! exports provided: VisitasclienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitasclienteComponent", function() { return VisitasclienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/connection.service */ "R8/k");
/* harmony import */ var src_app_services_uteis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/uteis.service */ "4y1v");
/* harmony import */ var _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/datepicker/datepicker.component */ "JZE2");
/* harmony import */ var _components_dropsearch_dropsearch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/dropsearch/dropsearch.component */ "pwE2");
/* harmony import */ var _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/icon/icon.component */ "WaCx");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/searchbar/searchbar.component */ "1ujl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/menu/menu.component */ "0oYm");
/* harmony import */ var _components_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/skeleton/skeleton.component */ "eO4b");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/card/card.component */ "lXt9");
/* harmony import */ var _components_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/barchart/barchart.component */ "HKVK");
/* harmony import */ var _components_piechart_piechart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/piechart/piechart.component */ "fCm4");
/* harmony import */ var _components_mapsgoogle_mapsgoogle_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/mapsgoogle/mapsgoogle.component */ "ZcpQ");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/spinner/spinner.component */ "e5sC");



















const _c0 = ["dti"];
const _c1 = ["dtf"];
const _c2 = ["dropevento"];
function VisitasclienteComponent_skeleton_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "skeleton", 29);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("count", 4);
} }
function VisitasclienteComponent_skeleton_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "skeleton", 30);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("cols", 4)("rows", 8);
} }
function VisitasclienteComponent_div_38_div_20_card_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "card", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "barchart", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r11.statistics);
} }
function VisitasclienteComponent_div_38_div_20_card_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "card", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "piechart", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r12.statisticsformas)("id", "formacontatochart");
} }
function VisitasclienteComponent_div_38_div_20_card_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "card", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "piechart", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("data", ctx_r13.sectors);
} }
function VisitasclienteComponent_div_38_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "card", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Representante");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Visitas Recebidas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Pedidos F\u00E1cil App");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "\u00DAltima Visita");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, VisitasclienteComponent_div_38_div_20_card_29_Template, 2, 1, "card", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, VisitasclienteComponent_div_38_div_20_card_30_Template, 2, 2, "card", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, VisitasclienteComponent_div_38_div_20_card_31_Template, 2, 1, "card", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.cliente.nmcliente);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.cliente.vendedor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.visitas.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.cliente.pedidos);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](26, 8, ctx_r9.cliente.dtultima, "dd/MM/YYYY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.statistics.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.statistics.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.statistics.length > 0);
} }
function VisitasclienteComponent_div_38_div_22_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r14.nmvendedor);
} }
function VisitasclienteComponent_div_38_div_22_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r14.nmpropriedade);
} }
function VisitasclienteComponent_div_38_div_22_audio_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "audio", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "source", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", item_r14.audios[0].linkaudio, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function VisitasclienteComponent_div_38_div_22_card_96_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "card", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisitasclienteComponent_div_38_div_22_card_96_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const i_r15 = ctx_r28.index; const item_r14 = ctx_r28.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r27.openMapModal({ id: "mapprop" + i_r15, location: ctx_r27.getPropLocation(item_r14.enderecocompleto.latitude, item_r14.enderecocompleto.longitude), zoom: 15, title: "Localiza\u00E7\u00E3o da Propriedade" }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u2750 Expandir");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mapscomp", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r15 = ctx_r30.index;
    const item_r14 = ctx_r30.$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "mapprop" + i_r15)("zoom", 15)("location", ctx_r19.getPropLocation(item_r14.enderecocompleto.latitude, item_r14.enderecocompleto.longitude));
} }
function VisitasclienteComponent_div_38_div_22_card_97_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "card", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisitasclienteComponent_div_38_div_22_card_97_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const i_r15 = ctx_r32.index; const item_r14 = ctx_r32.$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r31.openMapModal({ id: "mapvisita" + i_r15, location: ctx_r31.getPropLocation(item_r14.latitudeoriginal, item_r14.longitudeoriginal), zoom: 15, title: "Posi\u00E7\u00E3o de Abertura da Visita" }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u2750 Expandir");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mapscomp", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r15 = ctx_r34.index;
    const item_r14 = ctx_r34.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("zoom", 15)("id", "mapvisita" + i_r15)("location", ctx_r20.getPropLocation(item_r14.latitudeoriginal, item_r14.longitudeoriginal));
} }
function VisitasclienteComponent_div_38_div_22_card_98_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "card", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisitasclienteComponent_div_38_div_22_card_98_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const i_r15 = ctx_r36.index; const item_r14 = ctx_r36.$implicit; const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r35.openMapModal({ id: "demarcacao" + i_r15, location: item_r14.demarcacaoprop.position, demarcacao: item_r14.demarcacaoprop.locations, zoom: 15, title: "Demarca\u00E7\u00E3o da Visita" }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u2750 Expandir");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "mapscomp", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    const i_r15 = ctx_r38.index;
    const item_r14 = ctx_r38.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("zoom", 15)("id", "demarcacao" + i_r15)("location", item_r14.demarcacaoprop.position)("demarcacao", item_r14.demarcacaoprop.locations);
} }
function VisitasclienteComponent_div_38_div_22_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "IMAGENS");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function VisitasclienteComponent_div_38_div_22_div_100_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisitasclienteComponent_div_38_div_22_div_100_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r44); const j_r41 = ctx.index; const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2).$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r42.openLightbox(item_r14.imagens, j_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\uF50D Ver");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r40.linkimg, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function VisitasclienteComponent_div_38_div_22_div_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VisitasclienteComponent_div_38_div_22_div_100_div_1_Template, 4, 1, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", item_r14.imagens);
} }
function VisitasclienteComponent_div_38_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, VisitasclienteComponent_div_38_div_22_span_10_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, VisitasclienteComponent_div_38_div_22_span_11_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "DETALHES");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "icon", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " Data Visita ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "icon", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Cultura ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](37, "icon", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, " Evento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "icon", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, " Problema/Recomenda\u00E7\u00E3o ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](50, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "icon", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, " Dist\u00E2ncia (Prop. / Visita) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](63, "icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, " Endere\u00E7o Completo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "icon", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72, " Localiza\u00E7\u00E3o Propriedade ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](80, " Localiza\u00E7\u00E3o Visita (Abertura) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](87, "icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, " \u00C1udios ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](91, VisitasclienteComponent_div_38_div_22_audio_91_Template, 2, 1, "audio", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](94, "LOCALIZA\u00C7\u00C3O");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](96, VisitasclienteComponent_div_38_div_22_card_96_Template, 4, 3, "card", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](97, VisitasclienteComponent_div_38_div_22_card_97_Template, 4, 3, "card", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](98, VisitasclienteComponent_div_38_div_22_card_98_Template, 4, 4, "card", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](99, VisitasclienteComponent_div_38_div_22_div_99_Template, 3, 0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](100, VisitasclienteComponent_div_38_div_22_div_100_Template, 2, 1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Visita #", i_r15 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("success", !item_r14.idmotivo)("fail", item_r14.idmotivo);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r14.idmotivo ? "Malsucedida" : "Bem-sucedida", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 30, item_r14.dtvisita, "dd/MM/yyyy"), " ", item_r14.horavisita, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r14.nmvendedor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r14.nmpropriedade);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](25, 33, item_r14.dtvisita, "dd/MM/YYYY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r14.dscultura);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r14.dsevento);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r14.dsproblema, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r14.dsrecomendacao, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r10.getDist(item_r14));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate4"](" ", item_r14.enderecocompleto.endereco, ", ", item_r14.enderecocompleto.numero, " - ", item_r14.enderecocompleto.bairro, " | CEP ", item_r14.enderecocompleto.cep, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" latitude: ", item_r14.enderecocompleto.latitude, " | longitude: ", item_r14.enderecocompleto.longitude, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" latitude: ", item_r14.latitudeoriginal, " | longitude: ", item_r14.longitudeoriginal, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r14.audios ? item_r14.audios.length > 0 : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r14.enderecocompleto ? item_r14.enderecocompleto.latitude && item_r14.enderecocompleto.longitude : false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r14.latitudeoriginal && item_r14.longitudeoriginal);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r14.demarcacaoprop);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r14.imagens);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r14.imagens);
} }
function VisitasclienteComponent_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "\u00DAltima Visita");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, VisitasclienteComponent_div_38_div_20_Template, 32, 11, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, VisitasclienteComponent_div_38_div_22_Template, 101, 36, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.cliente.nmcliente);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.cliente.vendedor);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](19, 5, ctx_r5.cliente.dtultima, "dd/MM/YYYY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r5.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r5.visitas);
} }
function VisitasclienteComponent_spinner_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "spinner");
} }
function VisitasclienteComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisitasclienteComponent_div_41_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r46.closeLightbox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisitasclienteComponent_div_41_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisitasclienteComponent_div_41_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r47); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r49.prevImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u276E");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "button", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisitasclienteComponent_div_41_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r47); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r50.rotateLightbox(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\u21B6");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisitasclienteComponent_div_41_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r47); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r51.rotateLightbox(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "\u21B7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisitasclienteComponent_div_41_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r47); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r52.flipLightbox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\u2194");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisitasclienteComponent_div_41_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r47); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r53.nextImage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u276F");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisitasclienteComponent_div_41_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r47); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r54.closeLightbox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("transform", ctx_r7.getLightboxTransform());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r7.lightbox.img, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r7.lightbox.idx === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r7.lightbox.idx === ctx_r7.lightbox.imgs.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r7.lightbox.idx + 1, " / ", ctx_r7.lightbox.imgs.length, "");
} }
function VisitasclienteComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisitasclienteComponent_div_42_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r56); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r55.closeMapModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisitasclienteComponent_div_42_Template_div_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisitasclienteComponent_div_42_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r56); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r58.closeMapModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\u2715");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "mapscomp", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r8.mapModal.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("zoom", ctx_r8.mapModal.zoom)("location", ctx_r8.mapModal.location)("demarcacao", ctx_r8.mapModal.demarcacao);
} }
class VisitasclienteComponent {
    constructor(route, conn, util) {
        this.route = route;
        this.conn = conn;
        this.util = util;
        this.dtini = moment__WEBPACK_IMPORTED_MODULE_1__().subtract(30, 'days').format('YYYY/MM/DD');
        this.dtfim = moment__WEBPACK_IMPORTED_MODULE_1__().format('YYYY/MM/DD');
        this.loading = true;
        this.visitas = [];
        this.objetivos = [];
        this.objetivosdic = {};
        this.eventos = [];
        this.eventoslist = [];
        this.contato = [];
        this.contatodic = {};
        this.aux = [];
        this.id = null;
        this.statistics = [];
        this.statisticsformas = [];
        this.distopt = 'maior';
        this.sectors = [
            { sector: 'Bem-sucedidas', size: 0 },
            { sector: 'Malsucedidas', size: 0 },
        ];
        this.lightbox = null;
        this.mapModal = null;
    }
    onKeyDown(e) {
        if (!this.lightbox)
            return;
        if (e.key === 'Escape')
            this.closeLightbox();
        if (e.key === 'ArrowLeft')
            this.prevImage();
        if (e.key === 'ArrowRight')
            this.nextImage();
        if (e.key === 'r')
            this.rotateLightbox(1);
    }
    ngOnInit() {
        setTimeout(() => {
            this.init();
        }, 300);
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.route.params.pipe().forEach((params) => {
                this.id = params['idcliente'];
            });
            this.dti.setValue(moment__WEBPACK_IMPORTED_MODULE_1__().subtract(30, 'days').format('DD/MM/YYYY'));
            this.dtf.setValue(moment__WEBPACK_IMPORTED_MODULE_1__().format('DD/MM/YYYY'));
            yield this.get();
        });
    }
    search() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dtini = moment__WEBPACK_IMPORTED_MODULE_1__(this.dti.value, 'DD/MM/YYYY').format('YYYY/MM/DD');
            this.dtfim = moment__WEBPACK_IMPORTED_MODULE_1__(this.dtf.value, 'DD/MM/YYYY').format('YYYY/MM/DD');
            yield this.get();
            this.instant();
        });
    }
    getPropLocation(lat, lng) {
        return { lat: Number(lat), lng: Number(lng) };
    }
    getDist(visita, nb = false) {
        try {
            if (visita.latitudeoriginal &&
                visita.longitudeoriginal &&
                visita.enderecocompleto.latitude &&
                visita.enderecocompleto.longitude) {
                if (!nb) {
                    return (this.util
                        .getDistance(this.getPropLocation(visita.latitudeoriginal, visita.longitudeoriginal), this.getPropLocation(visita.enderecocompleto.latitude, visita.enderecocompleto.longitude), 1000)
                        .toFixed(2) + 'km');
                }
                else {
                    return Number(this.util
                        .getDistance(this.getPropLocation(visita.latitudeoriginal, visita.longitudeoriginal), this.getPropLocation(visita.enderecocompleto.latitude, visita.enderecocompleto.longitude), 1000)
                        .toFixed(2));
                }
            }
            else {
                if (!nb)
                    return 'Não identificada!';
                else
                    return 0;
            }
        }
        catch (error) {
            if (!nb)
                return 'Não identificada!';
            else
                return 0;
        }
    }
    report() {
        window.print();
    }
    shareReport() {
        const url = `${window.location.origin}/relatorio/${this.id}?dtini=${this.dtini}&dtfim=${this.dtfim}&token=${this.conn.user.hascode}&sys=${this.conn.user.idsistema}`;
        window.open(url, '_blank');
        navigator.clipboard.writeText(url).then(() => {
            this.util.alert('Relatório aberto e link copiado!', 'var(--color-tertiary)', 'white', 3000);
        });
    }
    openLightbox(imgs, idx) {
        this.lightbox = { img: imgs[idx].linkimg, rotation: 0, flipped: false, imgs, idx };
    }
    closeLightbox() { this.lightbox = null; }
    rotateLightbox(dir) {
        this.lightbox.rotation = (this.lightbox.rotation + dir * 90 + 360) % 360;
    }
    flipLightbox() { this.lightbox.flipped = !this.lightbox.flipped; }
    prevImage() {
        if (this.lightbox && this.lightbox.idx > 0) {
            this.lightbox.idx--;
            this.lightbox.img = this.lightbox.imgs[this.lightbox.idx].linkimg;
            this.lightbox.rotation = 0;
            this.lightbox.flipped = false;
        }
    }
    nextImage() {
        if (this.lightbox && this.lightbox.idx < this.lightbox.imgs.length - 1) {
            this.lightbox.idx++;
            this.lightbox.img = this.lightbox.imgs[this.lightbox.idx].linkimg;
            this.lightbox.rotation = 0;
            this.lightbox.flipped = false;
        }
    }
    getLightboxTransform() {
        if (!this.lightbox)
            return '';
        return `rotate(${this.lightbox.rotation}deg) scaleX(${this.lightbox.flipped ? -1 : 1})`;
    }
    openMapModal(config) {
        this.mapModal = config;
    }
    closeMapModal() { this.mapModal = null; }
    getKm(visita) {
        try {
            return ((Number(visita.kmfinal) - Number(visita.kminicial)).toFixed(2) + ' km');
        }
        catch (error) {
            return 0 + ' km';
        }
    }
    kmCalc(item) {
        try {
            return Number(item.kmfechamento) - Number(item.kmabertura);
        }
        catch (error) {
            return 0;
        }
    }
    instant() {
        this.loading = true;
        setTimeout(() => {
            this.visitas = this.aux.filter((item) => {
                let flag = [];
                if (this.evento) {
                    flag.push(Number(item['idevento']) == Number(this.evento));
                }
                else
                    flag.push(true);
                return flag.every((el) => el);
            });
            this.visitas = this.visitas.filter((item) => {
                console.log(this.getDist(item, true));
                if (this.distance) {
                    if (this.distopt == 'maior')
                        return Number(this.distance) < Number(this.getDist(item, true));
                    else if (this.distopt == 'menor')
                        return Number(this.distance) > Number(this.getDist(item, true));
                    else if (this.distopt == 'igual')
                        return Number(this.distance) == Number(this.getDist(item, true));
                }
                return true;
            });
            this.structCharts();
            this.loading = false;
        }, 300);
    }
    get() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            try {
                this.cliente = yield this.conn.getCliente(this.id).toPromise();
                this.vendedor = yield this.conn.getVendedores(this.dtini, this.dtfim, this.cliente.idrepresentanteerp).toPromise();
                try {
                    this.vendedor = this.vendedor[0];
                }
                catch (error) {
                    this.vendedor = null;
                }
                this.objetivos = yield this.conn.getObjetivos().toPromise();
                this.eventos = yield this.conn.getEventos().toPromise();
                this.eventoslist = this.eventos;
                this.dropevento.setItems(this.eventoslist);
                this.contato = yield this.conn.getContato().toPromise();
                this.visitas = yield this.conn
                    .getByClient(this.id, this.dtini, this.dtfim)
                    .toPromise();
                this.aux = this.visitas;
                console.log(this.cliente);
                console.log(this.visitas);
                console.log(this.vendedor);
                this.structCharts();
            }
            catch (error) { }
            this.loading = false;
        });
    }
    structCharts() {
        this.sectors = [
            { sector: 'Bem-sucedidas', size: 0 },
            { sector: 'Malsucedidas', size: 0 },
        ];
        this.statistics = [];
        this.statisticsformas = [];
        let data = {};
        let dataforma = {};
        for (let o of this.objetivos) {
            this.objetivosdic[o['iderp']] = o['objetivo'];
            data[o['objetivo']] = 0;
        }
        for (let o of this.contato) {
            this.contatodic[o['iderp']] = o['formacontato'];
            dataforma[o['formacontato']] = 0;
        }
        for (let v of this.visitas) {
            data[this.objetivosdic[v['idobjetivo']]] += 1;
            dataforma[this.contatodic[v['idformacontato']]] += 1;
            if (v['idmotivo']) {
                this.sectors[1].size += 1;
            }
            else {
                this.sectors[0].size += 1;
            }
            if (v['enderecocompleto']) {
                try {
                    v['enderecocompleto'] = JSON.parse(v['enderecocompleto']);
                }
                catch (error) { }
            }
            if (v['imagens']) {
                try {
                    v['imagens'] = JSON.parse(v['imagens']);
                }
                catch (error) { }
            }
            if (v['audios']) {
                try {
                    v['audios'] = JSON.parse(v['audios']);
                }
                catch (error) { }
            }
            if (v['demarcacaoprop']) {
                try {
                    v['demarcacaoprop'] = JSON.parse(v['demarcacaoprop']);
                }
                catch (error) { }
            }
        }
        for (let k in data) {
            this.statistics.push({ label: k, value: data[k] });
        }
        for (let k in dataforma) {
            this.statisticsformas.push({ sector: k, size: dataforma[k] });
        }
        console.log(this.sectors);
        console.log(this.statistics);
        console.log(this.statisticsformas);
    }
}
VisitasclienteComponent.ɵfac = function VisitasclienteComponent_Factory(t) { return new (t || VisitasclienteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_4__["ConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_uteis_service__WEBPACK_IMPORTED_MODULE_5__["UteisService"])); };
VisitasclienteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VisitasclienteComponent, selectors: [["app-visitascliente"]], viewQuery: function VisitasclienteComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dti = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dtf = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.dropevento = _t.first);
    } }, hostBindings: function VisitasclienteComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown", function VisitasclienteComponent_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresolveDocument"]);
    } }, decls: 43, vars: 7, consts: [["id", "container"], [1, "struct"], [1, "formfilters"], [1, "filtros", 2, "--cs", "1fr 1fr 300px"], [1, "item"], ["placeholder", "Data Inicial"], ["dti", ""], ["placeholder", "Data Final"], ["dtf", ""], [1, "button", 3, "click"], [1, "filtros", 2, "--cs", "1fr 300px"], ["width", "1fr", "placeholder", "Selecione um Evento para filtrar...", "keyvalue", "id", "keylabel", "dsevento", "color", "var(--color-primary)", 3, "event"], ["dropevento", ""], [1, "item", 2, "display", "flex", "gap", "8px"], [1, "button", "btprint", 3, "click"], [1, "button", "btshare", 3, "click"], ["icon", "/assets/icons/share.svg", "width", "16px", "height", "16px"], [1, "filtros", 2, "--cs", "300px 1fr"], [3, "ngModel", "ngModelChange"], ["value", "maior"], ["value", "menor"], ["value", "igual"], ["placeholder", "Dist\u00E2ncia (km)", "type", "number", 3, "onchange"], ["type", "chart", 3, "count", 4, "ngIf"], ["type", "table", 3, "cols", "rows", 4, "ngIf"], ["class", "form", 4, "ngIf"], [4, "ngIf"], ["class", "lightbox-overlay", 3, "click", 4, "ngIf"], ["class", "map-modal-overlay", 3, "click", 4, "ngIf"], ["type", "chart", 3, "count"], ["type", "table", 3, "cols", "rows"], [1, "form"], [1, "table", "print"], [1, "toptable", "table-3"], [1, "label"], [1, "bodytable", "table-3"], [1, "title"], ["class", "charts noprint", "style", "flex-wrap: wrap !important", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "charts", "noprint", 2, "flex-wrap", "wrap !important"], ["height", "50vh", "margin", "8px", "background", "var(--color-secondary)", "color", "var(--color-grey)"], [1, "cd"], [1, "name"], [1, "infos", "rdc"], [1, "panel"], [1, "data"], ["height", "50vh", "margin", "8px", "title", "Objetivos", 4, "ngIf"], ["height", "50vh", "margin", "8px", "title", "Formas de Contato", 4, "ngIf"], ["height", "50vh", "margin", "8px", "title", "Situa\u00E7\u00E3o das Visitas", 4, "ngIf"], ["height", "50vh", "margin", "8px", "title", "Objetivos"], ["xlabel", "label", "ylabel", "value", 3, "data"], ["height", "50vh", "margin", "8px", "title", "Formas de Contato"], ["legendpos", "right", 3, "data", "id"], ["height", "50vh", "margin", "8px", "title", "Situa\u00E7\u00E3o das Visitas"], [3, "data"], [1, "visit-header"], [1, "visit-number"], [1, "visit-status"], [1, "visit-meta"], [1, "table"], [1, "toptable", "mg4"], ["table", "true", 1, "items", 2, "--cs", "1fr 1fr 1fr"], [1, "toptable"], ["height", "20px", "width", "20px", "icon", "/assets/icons/date.svg"], [1, "bodytable"], ["height", "20px", "width", "20px", "icon", "/assets/icons/leaf.png"], ["height", "20px", "width", "20px", "icon", "/assets/icons/calendar.svg"], ["height", "20px", "width", "20px", "icon", "/assets/icons/bug.png"], ["height", "20px", "width", "20px", "icon", "/assets/icons/locg.svg"], ["height", "20px", "width", "20px", "icon", "/assets/icons/house.png"], ["height", "20px", "width", "20px", "icon", "/assets/icons/mapa.png"], ["height", "20px", "width", "20px", "icon", "/assets/icons/carmarker.png"], ["height", "20px", "width", "20px", "icon", "/assets/icons/mic.svg"], ["controls", "controls", "style", "width: 100%; height: 25px", 4, "ngIf"], ["table", "true", 1, "bodytable", "noprint", 2, "align-content", "space-around", "grid-template-columns", "1fr 1fr 1fr", "margin", "4px"], ["width", "inherit", "height", "23vw", "margin", "8px", "title", "Localiza\u00E7\u00E3o da Propriedade", 4, "ngIf"], ["width", "inherit", "margin", "8px", "height", "23vw", "title", "Posi\u00E7\u00E3o de Abertura da Visita", 4, "ngIf"], ["width", "inherit", "height", "23vw", "margin", "8px", "title", "Demarca\u00E7\u00E3o da Visita", 4, "ngIf"], ["class", "toptable mg4", 4, "ngIf"], ["class", "bodytable justify noprint", "style", "margin: 4px", 4, "ngIf"], ["controls", "controls", 2, "width", "100%", "height", "25px"], ["type", "audio/ogg", 3, "src"], ["width", "inherit", "height", "23vw", "margin", "8px", "title", "Localiza\u00E7\u00E3o da Propriedade"], [1, "btn-expand-map", 3, "click"], ["width", "100%", "height", "18vw", "icon", "/assets/icons/homemarker.png", 3, "id", "zoom", "location"], ["width", "inherit", "margin", "8px", "height", "23vw", "title", "Posi\u00E7\u00E3o de Abertura da Visita"], ["width", "100%", "height", "18vw", "icon", "/assets/icons/carmarker.svg", 3, "zoom", "id", "location"], ["width", "inherit", "height", "23vw", "margin", "8px", "title", "Demarca\u00E7\u00E3o da Visita"], ["width", "100%", "height", "18vw", 3, "zoom", "id", "location", "demarcacao"], [1, "bodytable", "justify", "noprint", 2, "margin", "4px"], ["class", "image", 3, "click", 4, "ngFor", "ngForOf"], [1, "image", 3, "click"], [3, "src"], [1, "image-overlay"], [1, "lightbox-overlay", 3, "click"], [1, "lightbox-content", 3, "click"], [1, "lightbox-controls"], ["title", "Anterior", 3, "disabled", "click"], ["title", "Girar esquerda", 3, "click"], ["title", "Girar direita", 3, "click"], ["title", "Espelhar", 3, "click"], ["title", "Pr\u00F3xima", 3, "disabled", "click"], ["title", "Fechar", 1, "btn-close", 3, "click"], [1, "lightbox-counter"], [1, "map-modal-overlay", 3, "click"], [1, "map-modal-content", 3, "click"], [1, "map-modal-header"], [3, "click"], ["id", "modal-map", "width", "100%", "height", "calc(85vh - 48px)", 3, "zoom", "location", "demarcacao"]], template: function VisitasclienteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Detalhamento de Visitas por Cliente");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "datepicker", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "datepicker", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisitasclienteComponent_Template_div_click_13_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Pesquisar");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "dropsearch", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("event", function VisitasclienteComponent_Template_dropsearch_event_17_listener($event) { ctx.evento = $event; return ctx.instant(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisitasclienteComponent_Template_div_click_20_listener() { return ctx.report(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Imprimir");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function VisitasclienteComponent_Template_div_click_22_listener() { return ctx.shareReport(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " Compartilhar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function VisitasclienteComponent_Template_select_ngModelChange_27_listener($event) { return ctx.distopt = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Maior que");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Menor que");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Igual a");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "searchbar", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onchange", function VisitasclienteComponent_Template_searchbar_onchange_35_listener($event) { return ctx.distance = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](36, VisitasclienteComponent_skeleton_36_Template, 1, 1, "skeleton", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, VisitasclienteComponent_skeleton_37_Template, 1, 2, "skeleton", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, VisitasclienteComponent_div_38_Template, 23, 8, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, VisitasclienteComponent_spinner_40_Template, 1, 0, "spinner", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, VisitasclienteComponent_div_41_Template, 18, 7, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, VisitasclienteComponent_div_42_Template, 8, 4, "div", 28);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.distopt);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.lightbox);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mapModal);
    } }, directives: [_components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_6__["DatepickerComponent"], _components_dropsearch_dropsearch_component__WEBPACK_IMPORTED_MODULE_7__["DropsearchComponent"], _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__["IconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_z"], _components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_10__["SearchbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"], _components_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_13__["SkeletonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_14__["CardComponent"], _components_barchart_barchart_component__WEBPACK_IMPORTED_MODULE_15__["BarchartComponent"], _components_piechart_piechart_component__WEBPACK_IMPORTED_MODULE_16__["PiechartComponent"], _components_mapsgoogle_mapsgoogle_component__WEBPACK_IMPORTED_MODULE_17__["MapsgoogleComponent"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_18__["SpinnerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: ["@charset \"UTF-8\";\n.cd[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.cd[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #cccccc;\n  font-size: 13px;\n  font-weight: 300;\n}\n.cd[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.904);\n  font-weight: 400;\n  font-size: x-large;\n  padding-top: 8px;\n}\n.mg4[_ngcontent-%COMP%] {\n  margin: 4px;\n}\n.mg4[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  justify-content: space-evenly !important;\n}\n.items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin: 4px;\n}\n.items[_ngcontent-%COMP%]   .bodytable[_ngcontent-%COMP%] {\n  min-height: 50px;\n}\n.charts[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n}\n.formfilters[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n.formfilters[_ngcontent-%COMP%]   .filtros[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: var(--cs, 1fr);\n  width: 58vw;\n  transition: all 1s;\n}\n.formfilters[_ngcontent-%COMP%]   .filtros[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  margin: 2px;\n}\n.infos[_ngcontent-%COMP%] {\n  margin-top: 10vh;\n}\n.panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-content: space-around;\n  justify-content: space-around;\n  align-items: center;\n}\n.panel[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n  font-size: xx-large;\n  color: white;\n  padding: 12px;\n  font-weight: 500;\n}\n.panel[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  padding: 8px;\n  color: #cccccc;\n  font-weight: 300;\n}\n.justify[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n  flex-direction: row;\n  align-content: space-around;\n  align-items: center;\n}\n.image[_ngcontent-%COMP%] {\n  width: 300px;\n  height: auto;\n  padding: 8px;\n}\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px;\n  height: auto;\n}\n.column[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-direction: column !important;\n  justify-content: center !important;\n  align-items: flex-start !important;\n}\n.mapitem[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-content: space-around;\n  justify-content: space-around;\n  align-items: center;\n}\n.mapitem[_ngcontent-%COMP%]   .labelmap[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 400;\n  padding-bottom: 8px;\n  \n  \n  color: var(--color-secondary);\n}\n.table[_ngcontent-%COMP%]   .bodytable[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]:hover, .table[_ngcontent-%COMP%]   .bodyimage[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-contrast) !important;\n}\n.table[_ngcontent-%COMP%]   .bodytable[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   .bodyimage[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-contrast) !important;\n}\n.visit-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 16px;\n  background: var(--color-primary);\n  border-radius: var(--radius) var(--radius) 0 0;\n  margin-top: 20px;\n  flex-wrap: wrap;\n}\n.visit-header[_ngcontent-%COMP%]   .visit-number[_ngcontent-%COMP%] {\n  color: var(--color-secondary-contrast);\n  font-weight: 700;\n  font-size: 15px;\n  font-family: Poppins, sans-serif;\n  white-space: nowrap;\n}\n.visit-header[_ngcontent-%COMP%]   .visit-status[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.visit-header[_ngcontent-%COMP%]   .visit-status.success[_ngcontent-%COMP%] {\n  background: var(--color-tertiary);\n  color: white;\n}\n.visit-header[_ngcontent-%COMP%]   .visit-status.fail[_ngcontent-%COMP%] {\n  background: var(--color-red);\n  color: white;\n}\n.visit-header[_ngcontent-%COMP%]   .visit-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-wrap: wrap;\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 13px;\n}\n.visit-header[_ngcontent-%COMP%]   .visit-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  content: \"\u00B7 \";\n}\n.btshare[_ngcontent-%COMP%] {\n  background: var(--color-secondary-light) !important;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.btn-expand-map[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: var(--color-secondary);\n  color: white;\n  border: none;\n  border-radius: 4px;\n  padding: 4px 10px;\n  font-size: 12px;\n  cursor: pointer;\n  margin-bottom: 6px;\n  font-family: Poppins, sans-serif;\n  transition: background 0.15s ease;\n}\n.btn-expand-map[_ngcontent-%COMP%]:hover {\n  background: var(--color-secondary-light);\n}\n.image[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n}\n.image[_ngcontent-%COMP%]   .image-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-family: Poppins, sans-serif;\n  opacity: 0;\n  transition: opacity 0.2s ease;\n  border-radius: 4px;\n}\n.image[_ngcontent-%COMP%]:hover   .image-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.lightbox-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.92);\n  z-index: 2000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.lightbox-content[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  max-width: 90vw;\n  max-height: 90vh;\n}\n.lightbox-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 85vw;\n  max-height: 78vh;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 4px;\n  transition: transform 0.25s ease;\n}\n.lightbox-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.lightbox-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: none;\n  color: white;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  font-size: 18px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.15s ease;\n}\n.lightbox-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: rgba(255, 255, 255, 0.3);\n}\n.lightbox-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.3;\n  cursor: default;\n}\n.lightbox-controls[_ngcontent-%COMP%]   button.btn-close[_ngcontent-%COMP%] {\n  background: rgba(202, 17, 17, 0.6);\n}\n.lightbox-controls[_ngcontent-%COMP%]   button.btn-close[_ngcontent-%COMP%]:hover {\n  background: rgba(202, 17, 17, 0.9);\n}\n.lightbox-counter[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 13px;\n  font-family: Poppins, sans-serif;\n}\n.map-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.75);\n  z-index: 1500;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.map-modal-content[_ngcontent-%COMP%] {\n  width: 90vw;\n  height: 85vh;\n  background: white;\n  border-radius: var(--radius);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.map-modal-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  background: var(--color-primary);\n  color: white;\n  font-family: Poppins, sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n}\n.map-modal-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: white;\n  font-size: 18px;\n  cursor: pointer;\n  opacity: 0.8;\n}\n.map-modal-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Zpc2l0YXNjbGllbnRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLGFBQUE7QUFFRjtBQURFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUdKO0FBREU7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUdKO0FBQ0E7RUFDRSxXQUFBO0FBRUY7QUFERTtFQUNFLHdDQUFBO0FBR0o7QUFFRTtFQUNFLFdBQUE7QUFDSjtBQUNFO0VBQ0UsZ0JBQUE7QUFDSjtBQUdBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBQUY7QUFHQTtFQUNFLFlBQUE7QUFBRjtBQUNFO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7QUFBSTtFQUNFLFdBQUE7QUFFTjtBQUdBO0VBQ0UsZ0JBQUE7QUFBRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUFFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBRUo7QUFBRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFFSjtBQUVBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBRUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFFSjtBQUVBO0VBQ0Usd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7QUFDRjtBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUFFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7QUFFSjtBQUlJO0VBQ0Usb0RBQUE7QUFETjtBQUlFOztFQUVFLG9EQUFBO0FBRko7QUFPQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsOENBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFKRjtBQU1FO0VBQ0Usc0NBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBSko7QUFPRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUxKO0FBT0k7RUFBWSxpQ0FBQTtFQUFtQyxZQUFBO0FBSG5EO0FBSUk7RUFBWSw0QkFBQTtFQUE4QixZQUFBO0FBQTlDO0FBR0U7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFESjtBQUdJO0VBQWUsYUFBQTtBQUFuQjtBQUtBO0VBQ0UsbURBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBRkY7QUFNQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlDQUFBO0FBSEY7QUFLRTtFQUFVLHdDQUFBO0FBRlo7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQUhGO0FBS0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLFVBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFNRTtFQUF5QixVQUFBO0FBSDNCO0FBT0E7RUFDRSxlQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSkY7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSkY7QUFNRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBSko7QUFRQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FBTEY7QUFPRTtFQUNFLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlDQUFBO0FBTEo7QUFPSTtFQUF5QixvQ0FBQTtBQUo3QjtBQUtJO0VBQWEsWUFBQTtFQUFjLGVBQUE7QUFEL0I7QUFFSTtFQUFjLGtDQUFBO0FBQ2xCO0FBRG1EO0VBQVUsa0NBQUE7QUFJN0Q7QUFBQTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FBR0Y7QUFDQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFFRjtBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFFRjtBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRUY7QUFBRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFFSjtBQURJO0VBQVUsVUFBQTtBQUlkIiwiZmlsZSI6InZpc2l0YXNjbGllbnRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNkIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIC50aXRsZSB7XHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG4gIC5uYW1lIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTA0KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1nNCB7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbiAgLmxhYmVsIHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaXRlbXMge1xyXG4gIC5pdGVtIHtcclxuICAgIG1hcmdpbjogNHB4O1xyXG4gIH1cclxuICAuYm9keXRhYmxlIHtcclxuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY2hhcnRzIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxufVxyXG5cclxuLmZvcm1maWx0ZXJze1xyXG4gIG1hcmdpbjogMjBweDtcclxuICAuZmlsdHJvcyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS1jcywgMWZyKTtcclxuICAgIHdpZHRoOiA1OHZ3O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gICAgLml0ZW17XHJcbiAgICAgIG1hcmdpbjogMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmluZm9zIHtcclxuICBtYXJnaW4tdG9wOiAxMHZoO1xyXG59XHJcbi5wYW5lbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC5kYXRhIHtcclxuICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbiAgLmxhYmVsIHtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbn1cclxuXHJcbi5qdXN0aWZ5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmltYWdlIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbHVtbiB7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXBpdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLmxhYmVsbWFwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG4gICAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkOyAqL1xyXG4gICAgLyogbWFyZ2luLWJvdHRvbTogMnB4OyAqL1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgfVxyXG59XHJcblxyXG4udGFibGV7XHJcbiAgLmJvZHl0YWJsZSwgLmJvZHlpbWFnZXtcclxuICAgIC5sYWJlbDpob3ZlcntcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeS1jb250cmFzdCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgLmJvZHl0YWJsZSxcclxuICAuYm9keWltYWdlOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnktY29udHJhc3QpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDYWJlw6dhbGhvIGRlIGNhZGEgdmlzaXRhXHJcbi52aXNpdC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbiAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cykgdmFyKC0tcmFkaXVzKSAwIDA7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gIC52aXNpdC1udW1iZXIge1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnMsIHNhbnMtc2VyaWY7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIH1cclxuXHJcbiAgLnZpc2l0LXN0YXR1cyB7XHJcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHJcbiAgICAmLnN1Y2Nlc3MgeyBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci10ZXJ0aWFyeSk7IGNvbG9yOiB3aGl0ZTsgfVxyXG4gICAgJi5mYWlsICAgIHsgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcmVkKTsgY29sb3I6IHdoaXRlOyB9XHJcbiAgfVxyXG5cclxuICAudmlzaXQtbWV0YSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcblxyXG4gICAgc3Bhbjo6YmVmb3JlIHsgY29udGVudDogJ8K3ICc7IH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEJvdMOjbyBjb21wYXJ0aWxoYXJcclxuLmJ0c2hhcmUge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXNlY29uZGFyeS1saWdodCkgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA2cHg7XHJcbn1cclxuXHJcbi8vIEJvdMOjbyBleHBhbmRpciBtYXBhXHJcbi5idG4tZXhwYW5kLW1hcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMsIHNhbnMtc2VyaWY7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlO1xyXG5cclxuICAmOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWxpZ2h0KTsgfVxyXG59XHJcblxyXG4vLyBJbWFnZW0gY2xpY8OhdmVsXHJcbi5pbWFnZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgLmltYWdlLW92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaW5zZXQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNDUpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBzYW5zLXNlcmlmO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciAuaW1hZ2Utb3ZlcmxheSB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuLy8gTGlnaHRib3hcclxuLmxpZ2h0Ym94LW92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBpbnNldDogMDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuOTIpO1xyXG4gIHotaW5kZXg6IDIwMDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubGlnaHRib3gtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMTZweDtcclxuICBtYXgtd2lkdGg6IDkwdnc7XHJcbiAgbWF4LWhlaWdodDogOTB2aDtcclxuXHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogODV2dztcclxuICAgIG1heC1oZWlnaHQ6IDc4dmg7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzIGVhc2U7XHJcbiAgfVxyXG59XHJcblxyXG4ubGlnaHRib3gtY29udHJvbHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA4cHg7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTUpO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlO1xyXG5cclxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkgeyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7IH1cclxuICAgICY6ZGlzYWJsZWQgeyBvcGFjaXR5OiAwLjM7IGN1cnNvcjogZGVmYXVsdDsgfVxyXG4gICAgJi5idG4tY2xvc2UgeyBiYWNrZ3JvdW5kOiByZ2JhKDIwMiwxNywxNywwLjYpOyAmOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyMDIsMTcsMTcsMC45KTsgfSB9XHJcbiAgfVxyXG59XHJcblxyXG4ubGlnaHRib3gtY291bnRlciB7XHJcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8vIE1vZGFsIGRlIG1hcGFcclxuLm1hcC1tb2RhbC1vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgaW5zZXQ6IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjc1KTtcclxuICB6LWluZGV4OiAxNTAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLm1hcC1tb2RhbC1jb250ZW50IHtcclxuICB3aWR0aDogOTB2dztcclxuICBoZWlnaHQ6IDg1dmg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm1hcC1tb2RhbC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMTBweCAxNnB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LWZhbWlseTogUG9wcGlucywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAmOmhvdmVyIHsgb3BhY2l0eTogMTsgfVxyXG4gIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "e5sC":
/*!*********************************************************!*\
  !*** ./src/app/components/spinner/spinner.component.ts ***!
  \*********************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SpinnerComponent {
    constructor() {
        this.message = 'Carregando...';
    }
    ngOnInit() { }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["spinner"]], inputs: { message: "message" }, decls: 2, vars: 0, consts: [["id", "spinner"], [1, "bar"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#spinner[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 3px;\n  z-index: 1000;\n  background: rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n#spinner[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 35%;\n  background: var(--color-secondary-contrast);\n  border-radius: 2px;\n  animation: progress-slide 1.4s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n}\n@keyframes progress-slide {\n  0% {\n    left: -35%;\n  }\n  100% {\n    left: 135%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO1VBQUEsaUJBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvRUFBQTtBQUNKO0FBR0E7RUFDRTtJQUFPLFVBQUE7RUFDUDtFQUFBO0lBQU8sVUFBQTtFQUdQO0FBQ0YiLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzcGlubmVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAzcHg7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcblxuICAuYmFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAzNSU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgYW5pbWF0aW9uOiBwcm9ncmVzcy1zbGlkZSAxLjRzIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSkgaW5maW5pdGU7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBwcm9ncmVzcy1zbGlkZSB7XG4gIDAlICAgeyBsZWZ0OiAtMzUlOyB9XG4gIDEwMCUgeyBsZWZ0OiAxMzUlOyB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "eO4b":
/*!***********************************************************!*\
  !*** ./src/app/components/skeleton/skeleton.component.ts ***!
  \***********************************************************/
/*! exports provided: SkeletonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkeletonComponent", function() { return SkeletonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function SkeletonComponent_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 5);
} }
function SkeletonComponent_ng_container_0_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 5);
} }
function SkeletonComponent_ng_container_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkeletonComponent_ng_container_0_div_4_div_1_Template, 1, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.colsArr);
} }
function SkeletonComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SkeletonComponent_ng_container_0_div_3_Template, 1, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkeletonComponent_ng_container_0_div_4_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.colsArr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.rowsArr);
} }
function SkeletonComponent_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SkeletonComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SkeletonComponent_ng_container_1_div_2_Template, 5, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.countArr);
} }
function SkeletonComponent_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 15);
} }
function SkeletonComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SkeletonComponent_ng_container_2_div_2_Template, 1, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.countArr);
} }
class SkeletonComponent {
    constructor() {
        this.type = 'table';
        this.rows = 6;
        this.cols = 4;
        this.count = 3;
    }
    get rowsArr() { return Array(this.rows); }
    get colsArr() { return Array(this.cols); }
    get countArr() { return Array(this.count); }
}
SkeletonComponent.ɵfac = function SkeletonComponent_Factory(t) { return new (t || SkeletonComponent)(); };
SkeletonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkeletonComponent, selectors: [["skeleton"]], inputs: { type: "type", rows: "rows", cols: "cols", count: "count" }, decls: 3, vars: 3, consts: [[4, "ngIf"], [1, "sk-table"], [1, "sk-header"], ["class", "sk-cell", 4, "ngFor", "ngForOf"], ["class", "sk-row", 4, "ngFor", "ngForOf"], [1, "sk-cell"], [1, "sk-row"], [1, "sk-cards"], ["class", "sk-card", 4, "ngFor", "ngForOf"], [1, "sk-card"], [1, "sk-card-title"], [1, "sk-card-line"], [1, "sk-card-line", "short"], [1, "sk-charts"], ["class", "sk-chart", 4, "ngFor", "ngForOf"], [1, "sk-chart"]], template: function SkeletonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SkeletonComponent_ng_container_0_Template, 5, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SkeletonComponent_ng_container_1_Template, 3, 1, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SkeletonComponent_ng_container_2_Template, 3, 1, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "cards");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type === "chart");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: ["@keyframes shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n.sk-chart[_ngcontent-%COMP%], .sk-card-line[_ngcontent-%COMP%], .sk-card-title[_ngcontent-%COMP%], .sk-row[_ngcontent-%COMP%]   .sk-cell[_ngcontent-%COMP%] {\n  background: linear-gradient(90deg, #e4e4e4 25%, #f2f2f2 50%, #e4e4e4 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s ease-in-out infinite;\n  border-radius: 4px;\n}\n.sk-table[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  padding: 8px 0;\n}\n.sk-header[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  height: 36px;\n  background: var(--color-table-top);\n  border-radius: 6px;\n  padding: 0 8px;\n  align-items: center;\n}\n.sk-header[_ngcontent-%COMP%]   .sk-cell[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 14px;\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 4px;\n  animation: none;\n}\n.sk-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 0 8px;\n  height: 44px;\n  align-items: center;\n  border-radius: 6px;\n  background: white;\n}\n.sk-row[_ngcontent-%COMP%]:nth-child(odd) {\n  background: var(--color-odd);\n}\n.sk-row[_ngcontent-%COMP%]   .sk-cell[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 14px;\n}\n.sk-cards[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  padding: 8px 0;\n}\n.sk-card[_ngcontent-%COMP%] {\n  flex: 1 1 220px;\n  min-width: 200px;\n  border-radius: var(--radius);\n  background: white;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.sk-card-title[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 60%;\n}\n.sk-card-line[_ngcontent-%COMP%] {\n  height: 13px;\n}\n.sk-card-line.short[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.sk-charts[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 8px 0;\n  flex-wrap: wrap;\n}\n.sk-chart[_ngcontent-%COMP%] {\n  flex: 1 1 300px;\n  height: 50vh;\n  min-height: 200px;\n  border-radius: var(--radius);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NrZWxldG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFBTyw0QkFBQTtFQUVQO0VBREE7SUFBTywyQkFBQTtFQUlQO0FBQ0Y7QUFGQTtFQUNFLHlFQUFBO0VBQ0EsMEJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0FBSUY7QUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0FBR0Y7QUFBQTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFHRjtBQURFO0VBQ0UsT0FBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUdKO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRUY7QUFBRTtFQUFtQiw0QkFBQTtBQUdyQjtBQURFO0VBQ0UsT0FBQTtFQUNBLFlBQUE7QUFHSjtBQUdBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtBQUFGO0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSx5Q0FBQTtBQUFGO0FBR0E7RUFDRSxZQUFBO0VBQ0EsVUFBQTtBQUFGO0FBSUE7RUFDRSxZQUFBO0FBREY7QUFJRTtFQUFVLFVBQUE7QUFEWjtBQUtBO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUZGO0FBS0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUFGRiIsImZpbGUiOiJza2VsZXRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgc2hpbW1lciB7XG4gIDAlICAgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwJSAwOyB9XG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAgMjAwJSAwOyB9XG59XG5cbiVzaGltbWVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZTRlNGU0IDI1JSwgI2YyZjJmMiA1MCUsICNlNGU0ZTQgNzUlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gIGFuaW1hdGlvbjogc2hpbW1lciAxLjRzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi8vIFRBQkxFXG4uc2stdGFibGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDZweDtcbiAgcGFkZGluZzogOHB4IDA7XG59XG5cbi5zay1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci10YWJsZS10b3ApO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDAgOHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIC5zay1jZWxsIHtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogMTRweDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMjUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gIH1cbn1cblxuLnNrLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xuICBwYWRkaW5nOiAwIDhweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuXG4gICY6bnRoLWNoaWxkKG9kZCkgeyBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1vZGQpOyB9XG5cbiAgLnNrLWNlbGwge1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiAxNHB4O1xuICAgIEBleHRlbmQgJXNoaW1tZXI7XG4gIH1cbn1cblxuLy8gQ0FSRFNcbi5zay1jYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDhweCAwO1xufVxuXG4uc2stY2FyZCB7XG4gIGZsZXg6IDEgMSAyMjBweDtcbiAgbWluLXdpZHRoOiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoMCwwLDAsMC4wOCk7XG59XG5cbi5zay1jYXJkLXRpdGxlIHtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogNjAlO1xuICBAZXh0ZW5kICVzaGltbWVyO1xufVxuXG4uc2stY2FyZC1saW5lIHtcbiAgaGVpZ2h0OiAxM3B4O1xuICBAZXh0ZW5kICVzaGltbWVyO1xuXG4gICYuc2hvcnQgeyB3aWR0aDogNTAlOyB9XG59XG5cbi8vIENIQVJUXG4uc2stY2hhcnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxMnB4O1xuICBwYWRkaW5nOiA4cHggMDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uc2stY2hhcnQge1xuICBmbGV4OiAxIDEgMzAwcHg7XG4gIGhlaWdodDogNTB2aDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XG4gIEBleHRlbmQgJXNoaW1tZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ "fCm4":
/*!***********************************************************!*\
  !*** ./src/app/components/piechart/piechart.component.ts ***!
  \***********************************************************/
/*! exports provided: PiechartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiechartComponent", function() { return PiechartComponent; });
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "cclQ");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "xJfa");
/* harmony import */ var _themes_theme_graph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../themes/theme_graph */ "5ezT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




const _c0 = ["legend"];
_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["useTheme"](_themes_theme_graph__WEBPACK_IMPORTED_MODULE_2__["graph_theme"]);
class PiechartComponent {
    constructor() {
        this.data = [];
        this.legendpos = 'right';
        this.id = 'piechart';
        this.midlabel = '';
    }
    ngOnDestroy() {
        this.chart.dispose();
    }
    ngOnInit() {
        setTimeout(() => {
            this.createChart();
        }, 30);
    }
    createChart() {
        this.chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["create"](this.id, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["PieChart"]);
        this.chart.logo.height = -15000;
        // Add data
        this.chart.data = this.data;
        // Create axes
        // Add label
        this.chart.innerRadius = 80;
        let label = this.chart.seriesContainer.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["Label"]);
        label.text = this.midlabel;
        label.horizontalCenter = 'middle';
        label.verticalCenter = 'middle';
        label.fontSize = 50;
        let pieSeries = this.chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["PieSeries"]());
        pieSeries.dataFields.value = 'size';
        pieSeries.dataFields.category = 'sector';
        pieSeries.ticks.template.disabled = true;
        pieSeries.labels.template.disabled = true;
        // this.chart.legend = new am4charts.Legend();
        // this.chart.legend.position = this.legendpos;
        // this.chart.legend.labels.template.fontSize = 10;
        // this.chart.legend.valueLabels.template.fontSize = 9;
        // this.chart.legend.valueLabels.template.align = 'left';
        // this.chart.legend.valueLabels.template.textAlign = 'start';
        // var marker = this.chart.legend.markers.template.children.getIndex(0);
        // marker.cornerRadius(12, 12, 12, 12);
        // marker.strokeWidth = 2;
        // marker.strokeOpacity = 1;
        // marker.stroke = am4core.color('#ccc');
        // var legendContainer = am4core.create(this.id+'legend', am4core.Container);
        // legendContainer.width = am4core.percent(100);
        // legendContainer.height = am4core.percent(100);
        // this.chart.legend.parent = legendContainer;
        if (this.title) {
            let title = this.chart.titles.create();
            title.text = this.title;
            title.fontSize = 18;
            title.fill = '#03344c';
            title.marginTop = 12;
            title.marginBottom = 12;
        }
        this.chart.events.on('ready', (event) => {
            // populate our custom legend when chart renders
            setTimeout(() => {
                this.chart.customLegend = document.getElementById('legend' + this.id);
                pieSeries.dataItems.each((row, i) => {
                    var color = this.chart.colors.getIndex(i);
                    var percent = Math.round(row.values.value.percent * 100) / 100;
                    let legend = document.createElement('div');
                    legend.classList.add('legend-item');
                    legend.id = 'legend-item-' + i;
                    legend.onmouseenter = () => {
                        var slice = pieSeries.slices.getIndex(i);
                        slice.isHover = true;
                    };
                    legend.onmouseleave = () => {
                        var slice = pieSeries.slices.getIndex(i);
                        slice.isHover = false;
                    };
                    legend.style.cssText = `
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: flex-start;
                align-items: center;
                margin: 4px;
                cursor: pointer;
            `;
                    let marker = document.createElement('div');
                    marker.style.cssText = `
                width: 18px;
                height: 18px;
                border-radius: 50%;
                background-color: ${color};
            `;
                    legend.appendChild(marker);
                    let divvalue = document.createElement('div');
                    divvalue.style.cssText = `
                margin-left: 12px;
            `;
                    divvalue.innerHTML =
                        row.category + ' : ' + percent + '% (' + row.value + ')';
                    legend.appendChild(divvalue);
                    this.chart.customLegend.appendChild(legend);
                });
            });
        }, 300);
    }
}
PiechartComponent.ɵfac = function PiechartComponent_Factory(t) { return new (t || PiechartComponent)(); };
PiechartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PiechartComponent, selectors: [["piechart"]], viewQuery: function PiechartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.legend = _t.first);
    } }, inputs: { data: "data", legendpos: "legendpos", title: "title", id: "id", midlabel: "midlabel" }, decls: 5, vars: 2, consts: [["id", "chart"], [1, "chartdiv"], ["chartdiv", ""], [1, "legend"], ["legend", ""]], template: function PiechartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("id", "legend" + ctx.id);
    } }, styles: ["#chart[_ngcontent-%COMP%] {\n  width: auto;\n  height: 98%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-content: center;\n  justify-content: center;\n  align-items: stretch;\n}\n#chart[_ngcontent-%COMP%]   .chartdiv[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n#chart[_ngcontent-%COMP%]   .legend[_ngcontent-%COMP%] {\n  width: 300px;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  align-content: center;\n  justify-content: center;\n  font-size: 10px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BpZWNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQUNGO0FBQUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNILGFBQUE7RUFDRyxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNILGVBQUE7RUFDRyx5QkFBQTtBQUVKIiwiZmlsZSI6InBpZWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NoYXJ0IHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDk4JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIC5jaGFydGRpdiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgLmxlZ2VuZCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcblx0ZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogMTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "hFHy":
/*!****************************************************************!*\
  !*** ./src/app/details/visitadetail/visitadetail.component.ts ***!
  \****************************************************************/
/*! exports provided: VisitadetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitadetailComponent", function() { return VisitadetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/connection.service */ "R8/k");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/icon/icon.component */ "WaCx");
/* harmony import */ var _components_inlinespin_inlinespin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/inlinespin/inlinespin.component */ "Hkk2");
/* harmony import */ var _components_mapsgoogle_mapsgoogle_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/mapsgoogle/mapsgoogle.component */ "ZcpQ");










function VisitadetailComponent_div_12_div_38_inlinespin_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "inlinespin");
} }
function VisitadetailComponent_div_12_div_38_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "audio", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "source", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r9.audios[0].linkaudio, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function VisitadetailComponent_div_12_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00C1udios");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, VisitadetailComponent_div_12_div_38_inlinespin_7_Template, 1, 0, "inlinespin", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, VisitadetailComponent_div_12_div_38_div_8_Template, 3, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.loading);
} }
function VisitadetailComponent_div_12_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Observa\u00E7\u00F5es");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r4.data.observacao);
} }
function VisitadetailComponent_div_12_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Com quem falei");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r5.data.nmcontato);
} }
function VisitadetailComponent_div_12_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.data.dsevento);
} }
function VisitadetailComponent_div_12_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "icon", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Data de Retorno");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 1, ctx_r7.data.dtfimatividade, "dd/MM/y"));
} }
function VisitadetailComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Ve\u00EDculo");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Data/Hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, VisitadetailComponent_div_12_div_38_Template, 9, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](39, VisitadetailComponent_div_12_div_39_Template, 9, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, VisitadetailComponent_div_12_div_40_Template, 9, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](41, VisitadetailComponent_div_12_div_41_Template, 9, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, VisitadetailComponent_div_12_div_42_Template, 10, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.data.nmvendedor, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.data.dsveiculo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.data.nmcliente, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](37, 10, ctx_r0.data.dtvisita, "dd/MM/y"), " ", ctx_r0.data.horavisita, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.audios.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.data.observacao);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.data.nmcontato);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.data.dsevento);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.data.dtfimatividade);
} }
function VisitadetailComponent_div_13_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Demarca\u00E7\u00E3o da Propriedade");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "mapscomp", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Localiza\u00E7\u00E3o da Visita");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "mapscomp", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("zoom", 15)("id", "demarcacaoprop")("location", ctx_r10.demarcacao.position)("demarcacao", ctx_r10.demarcacao.locations);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("zoom", 10)("id", "mapvisita")("location", ctx_r10.getPropLocation(ctx_r10.data.latitudeoriginal, ctx_r10.data.longitudeoriginal));
} }
function VisitadetailComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Dados Geogr\u00E1ficos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, VisitadetailComponent_div_13_div_6_Template, 17, 7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.data);
} }
function VisitadetailComponent_div_14_inlinespin_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "inlinespin");
} }
function VisitadetailComponent_div_14_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const img_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", img_r13.linkimg, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function VisitadetailComponent_div_14_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, VisitadetailComponent_div_14_div_8_div_1_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r12.loading);
} }
function VisitadetailComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Imagens");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, VisitadetailComponent_div_14_inlinespin_7_Template, 1, 0, "inlinespin", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, VisitadetailComponent_div_14_div_8_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.imagens);
} }
class VisitadetailComponent {
    constructor(dialogRef, data, conn) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.conn = conn;
        this.imagens = [];
        this.audios = [];
        this.loading = false;
    }
    ngOnInit() {
        console.log(this.data);
        this.getData();
        try {
            this.demarcacao = JSON.parse(this.data.demarcacaoprop);
        }
        catch (error) { }
    }
    getData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            try {
                this.imagens = yield this.conn.getImagensVisitas(this.data.id).toPromise();
                this.audios = yield this.conn.getAudiosVisitas(this.data.id).toPromise();
                console.log(this.imagens);
                console.log(this.audios);
            }
            catch (error) {
            }
            setTimeout(() => {
                this.loading = false;
            }, 2000);
        });
    }
    isDemarcado(demarcacao) {
        try {
            let res = JSON.parse(demarcacao);
            return 'position' in res;
        }
        catch (error) {
            return false;
        }
    }
    onClose(value = null) {
        this.dialogRef.close(value);
    }
    getPropLocation(lat, lng) {
        return { lat: Number(lat), lng: Number(lng) };
    }
}
VisitadetailComponent.ɵfac = function VisitadetailComponent_Factory(t) { return new (t || VisitadetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_3__["ConnectionService"])); };
VisitadetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: VisitadetailComponent, selectors: [["app-visitadetail"]], decls: 15, vars: 3, consts: [["id", "modal"], [1, "header"], [1, "text"], ["aria-hidden", "false", "aria-label", "Clique para fechar", "mat-dialog-close", ""], [1, "form"], [1, "table"], [1, "item"], [1, "toptable"], [1, "label", "fc"], ["class", "table", "table", "true", "style", "--cs: 1fr 1fr", 4, "ngIf"], ["class", "demarcacaoes", 4, "ngIf"], ["class", "imagens", 4, "ngIf"], ["table", "true", 1, "table", 2, "--cs", "1fr 1fr"], [1, "label"], ["icon", "/assets/icons/vendorgreen.svg", "height", "26px", "width", "26px", "margin", "0"], [1, "bodytable"], ["icon", "/assets/icons/car.svg", "height", "26px", "width", "26px", "margin", "0"], ["icon", "/assets/icons/userorange.svg", "height", "26px", "width", "26px", "margin", "0"], ["icon", "/assets/icons/date.svg", "height", "26px", "width", "26px", "margin", "0"], ["class", "item", 4, "ngIf"], ["icon", "/assets/icons/mic.svg", "height", "26px", "width", "26px", "margin", "0"], [4, "ngIf"], ["class", "label", 4, "ngIf"], ["controls", "controls", 2, "width", "100%"], ["type", "audio/ogg", 3, "src"], ["icon", "/assets/icons/details.svg", "height", "26px", "width", "26px", "margin", "0"], ["icon", "/assets/icons/comquemfalei.svg", "height", "26px", "width", "26px", "margin", "0"], ["icon", "/assets/icons/event.svg", "height", "26px", "width", "26px", "margin", "0"], ["icon", "/assets/icons/datereturn.svg", "height", "26px", "width", "26px", "margin", "0"], [1, "demarcacaoes"], ["width", "36vw", "height", "36vw", 3, "zoom", "id", "location", "demarcacao"], ["width", "36vw", "height", "36vw", "icon", "/assets/icons/carmarker.svg", 3, "zoom", "id", "location"], [1, "imagens"], [1, "bodytable", "bodyimage"], [4, "ngFor", "ngForOf"], ["class", "image", 4, "ngIf"], [1, "image"], [3, "src"]], template: function VisitadetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Detalhes da Visita");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Detalhes da Visita");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, VisitadetailComponent_div_12_Template, 43, 13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, VisitadetailComponent_div_13_Template, 7, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, VisitadetailComponent_div_14_Template, 9, 2, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isDemarcado(ctx.data.demarcacaoprop));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.data.imagens > 0);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"], _components_inlinespin_inlinespin_component__WEBPACK_IMPORTED_MODULE_7__["InlinespinComponent"], _components_mapsgoogle_mapsgoogle_component__WEBPACK_IMPORTED_MODULE_8__["MapsgoogleComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".item[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 4px;\n}\n.table[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.fc[_ngcontent-%COMP%] {\n  justify-content: space-around !important;\n}\n.table[_ngcontent-%COMP%] {\n  box-shadow: unset;\n}\n.table[_ngcontent-%COMP%]   .bodytable[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]:hover, .table[_ngcontent-%COMP%]   .bodyimage[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-contrast) !important;\n}\n.table[_ngcontent-%COMP%]   .bodytable[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   .bodyimage[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-contrast) !important;\n}\n.bodyimage[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-content: space-around;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 7px;\n}\n.bodyimage[_ngcontent-%COMP%]   inlinespin[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.image[_ngcontent-%COMP%] {\n  width: 18vw;\n  height: 26vw;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-content: space-around;\n  align-items: center;\n  justify-content: space-around;\n  padding: 12px;\n}\n.image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Zpc2l0YWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtBQUVKO0FBRUE7RUFDRSxTQUFBO0FBQ0Y7QUFFQTtFQUNFLHdDQUFBO0FBQ0Y7QUFDQTtFQUNFLGlCQUFBO0FBRUY7QUFJSTs7RUFDRSxvREFBQTtBQUFOO0FBR0U7O0VBRUUsb0RBQUE7QUFESjtBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFGRjtBQUdFO0VBQ0UsV0FBQTtBQURKO0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtBQUZGO0FBR0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFESiIsImZpbGUiOiJ2aXNpdGFkZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbSB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIHNwYW4ge1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnRhYmxlIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5mYyB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcclxufVxyXG4udGFibGUge1xyXG4gIGJveC1zaGFkb3c6IHVuc2V0O1xyXG59XHJcblxyXG4udGFibGUge1xyXG4gIC5ib2R5dGFibGUsXHJcbiAgLmJvZHlpbWFnZSB7XHJcbiAgICAubGFiZWw6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAuYm9keXRhYmxlLFxyXG4gIC5ib2R5aW1hZ2U6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeS1jb250cmFzdCkgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5ib2R5aW1hZ2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogN3B4O1xyXG4gIGlubGluZXNwaW4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uaW1hZ2Uge1xyXG4gIHdpZHRoOiAxOHZ3O1xyXG4gIGhlaWdodDogMjZ2dztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LWhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "lXt9":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


const _c0 = ["card"];
const _c1 = function (a0) { return { "transform": a0 }; };
function CardComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_3_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.collapse(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "V");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r2.collapsed ? "rotate(0)" : "rotate(180deg)"));
} }
function CardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_div_3_div_3_Template, 2, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.iscollapse);
} }
const _c2 = ["*"];
class CardComponent {
    constructor() {
        this.height = 'auto';
        this.overflow = 'hidden';
        this.minwidth = 'auto';
        this.maxwidth = '100%';
        this.width = 'auto';
        this.margin = 'unset';
        this.background = 'var(--color-primary-contrast)';
        this.color = 'var(--color-text)';
        this.iscollapse = false;
        this.collapsed = false;
    }
    ngOnInit() { }
    collapse() {
        let el = this.card.nativeElement;
        if (!this.collapsed) {
            el.style.overflow = "hidden";
            el.style.height = "12px";
        }
        else {
            el.style.overflow = this.overflow;
            el.style.height = this.height;
        }
        this.collapsed = !this.collapsed;
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["card"]], viewQuery: function CardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.card = _t.first);
    } }, inputs: { height: "height", title: "title", overflow: "overflow", minwidth: "minwidth", maxwidth: "maxwidth", width: "width", margin: "margin", background: "background", color: "color", iscollapse: "iscollapse", collapsed: "collapsed" }, ngContentSelectors: _c2, decls: 6, vars: 17, consts: [["id", "card"], [1, "card"], ["card", ""], ["class", "card_title", 4, "ngIf"], [1, "card_body"], [1, "card_title"], [1, "text_card_title"], ["class", "icon_card_title", 3, "ngStyle", "click", 4, "ngIf"], [1, "icon_card_title", 3, "ngStyle", "click"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_div_3_Template, 4, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.height)("width", ctx.width)("margin", ctx.margin)("max-width", ctx.maxwidth)("background", ctx.background)("color", ctx.color)("min-width", ctx.minwidth)("overflow", ctx.overflow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: ["#card[_ngcontent-%COMP%] {\n  font-family: Poppins, Roboto, \"Courier New\", Courier, monospace;\n}\n#card[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  padding: 12px;\n  margin: 4px;\n  box-shadow: 2px 2px 5px rgba(102, 102, 102, 0.432);\n  background-color: var(--color-primary-contrast);\n  overflow: auto;\n  transition: all 0.5s;\n}\n#card[_ngcontent-%COMP%]   .card_body[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n}\n#card[_ngcontent-%COMP%]   .card_title[_ngcontent-%COMP%] {\n  font-weight: lighter;\n  color: #fff;\n  font-size: 16px;\n  background: var(--color-secondary);\n  padding: 8px;\n  margin: -12px;\n  text-align: center;\n  margin-bottom: 8px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-content: center;\n  justify-content: space-around;\n  align-items: center;\n}\n#card[_ngcontent-%COMP%]   .card_title[_ngcontent-%COMP%]   .text_card_title[_ngcontent-%COMP%] {\n  width: 100%;\n}\n#card[_ngcontent-%COMP%]   .card_title[_ngcontent-%COMP%]   .icon_card_title[_ngcontent-%COMP%] {\n  width: 50px;\n  font-weight: bold;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrREFBQTtBQUNGO0FBQUU7RUFFRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0RBQUE7RUFDQSwrQ0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUNKO0FBQ0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQ0U7RUFDRSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDRSxXQUFBO0FBRU47QUFBSTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7QUFDTiIsImZpbGUiOiJjYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhcmQge1xyXG4gIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBSb2JvdG8sICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICAuY2FyZCB7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiAwIDIxcHggMCAyMXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIG1hcmdpbjogNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggcmdiYSgxMDIsIDEwMiwgMTAyLCAwLjQzMik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgfVxyXG4gIC5jYXJkX2JvZHl7XHJcbiAgICB3aWR0aDogaW5oZXJpdDtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICB9XHJcbiAgLmNhcmRfdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBtYXJnaW46IC0xMnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIC50ZXh0X2NhcmRfdGl0bGV7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmljb25fY2FyZF90aXRsZXtcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAvLyB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "nRiE":
/*!*************************************!*\
  !*** ./src/app/pipes/fixed.pipe.ts ***!
  \*************************************/
/*! exports provided: FixedPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedPipe", function() { return FixedPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FixedPipe {
    transform(value, ...args) {
        return Number(value).toFixed(2);
    }
}
FixedPipe.ɵfac = function FixedPipe_Factory(t) { return new (t || FixedPipe)(); };
FixedPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "fixed", type: FixedPipe, pure: true });


/***/ }),

/***/ "pBvA":
/*!*************************************************************!*\
  !*** ./src/app/components/linechart/linechart.component.ts ***!
  \*************************************************************/
/*! exports provided: LinechartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinechartComponent", function() { return LinechartComponent; });
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "cclQ");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "xJfa");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "WlQZ");
/* harmony import */ var _themes_locate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../themes/locate */ "XVyU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_2__["default"]);
class LinechartComponent {
    constructor() {
        this.data = [];
        this.id = 'linechart';
    }
    ngOnDestroy() {
        this.chart.dispose();
    }
    ngOnInit() {
        setTimeout(() => {
            this.createChart();
        }, 30);
    }
    createChart() {
        this.chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["create"](this.id, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["XYChart"]);
        this.chart.logo.height = -15000;
        // Add data
        this.chart.data = this.data;
        // Set input format for the dates
        this.chart.dateFormatter.inputDateFormat = 'yyyy-MM-dd';
        this.chart.language.locale = _themes_locate__WEBPACK_IMPORTED_MODULE_3__["locale"];
        // Create axes
        let dateAxis = this.chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["DateAxis"]());
        dateAxis.dateFormats.setKey('day', 'dd/MM/yyyy');
        dateAxis.renderer.grid.template.strokeWidth = 0;
        dateAxis.renderer.grid.template.color = 0;
        dateAxis.renderer.labels.template.fill = '#7c888e';
        dateAxis.renderer.labels.template.fontSize = 12;
        let valueAxis = this.chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["ValueAxis"]());
        valueAxis.renderer.labels.template.fill = '#7c888e';
        valueAxis.renderer.labels.template.fontSize = 12;
        valueAxis.renderer.grid.template.strokeWidth = 0.5;
        valueAxis.renderer.grid.template.color = 0;
        // Create series
        this.createSeries(dateAxis);
        // Create vertical scrollbar and place it before the value axis
        // this.chart.scrollbarY = new am4core.Scrollbar();
        // this.chart.scrollbarY.parent = this.chart.leftAxesContainer;
        // this.chart.scrollbarY.toBack();
        // Create a horizontal scrollbar with previe and place it underneath the date axis
        // dateAxis.start = 0.79;
        dateAxis.keepSelection = true;
        if (this.title) {
            let title = this.chart.titles.create();
            title.text = this.title;
            title.fontSize = 18;
            title.fill = "#03344c";
            title.marginTop = 12;
            title.marginBottom = 12;
        }
    }
    createSeries(dateAxis) {
        let series = this.chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["LineSeries"]());
        series.dataFields.valueY = 'visitas';
        series.dataFields.dateX = 'dtvisita';
        series.tooltipText = '{value}';
        series.strokeWidth = 2;
        series.minBulletDistance = 15;
        // Drop-shaped tooltips
        series.tooltip.background.cornerRadius = 20;
        series.tooltip.background.strokeOpacity = 0;
        series.tooltip.pointerOrientation = 'vertical';
        series.tooltip.label.minWidth = 40;
        series.tooltip.label.minHeight = 40;
        series.tooltip.label.textAlign = 'middle';
        series.tooltip.label.textValign = 'middle';
        series.tensionX = 0.95;
        series.fillOpacity = 1;
        var fillModifier = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["LinearGradientModifier"]();
        fillModifier.opacities = [1, 0];
        fillModifier.offsets = [0, 1];
        fillModifier.gradient.rotation = 90;
        series.segments.template.fillModifier = fillModifier;
        // Make bullets grow on hover
        let bullet = series.bullets.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["CircleBullet"]());
        bullet.circle.strokeWidth = 2;
        bullet.circle.radius = 4;
        bullet.circle.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_0__["color"]('#fff');
        let bullethover = bullet.states.create('hover');
        bullethover.properties.scale = 1.3;
        this.chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_1__["XYCursor"]();
        // this.chart.cursor.behavior = 'panXY';
        this.chart.cursor.xAxis = dateAxis;
        this.chart.cursor.snapToSeries = series;
        // this.chart.scrollbarX = new am4charts.XYChartScrollbar();
        // this.chart.scrollbarX.series.push(series);
        // this.chart.scrollbarX.parent = this.chart.bottomAxesContainer;
    }
}
LinechartComponent.ɵfac = function LinechartComponent_Factory(t) { return new (t || LinechartComponent)(); };
LinechartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LinechartComponent, selectors: [["linechart"]], inputs: { data: "data", id: "id", title: "title" }, decls: 2, vars: 1, consts: [[1, "chartdiv"], ["chartdiv", ""]], template: function LinechartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("id", ctx.id);
    } }, styles: [".chartdiv[_ngcontent-%COMP%] {\n  width: auto;\n  height: 98%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpbmVjaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoibGluZWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0ZGl2e1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IDk4JTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "pwE2":
/*!***************************************************************!*\
  !*** ./src/app/components/dropsearch/dropsearch.component.ts ***!
  \***************************************************************/
/*! exports provided: DropsearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropsearchComponent", function() { return DropsearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = ["shdropsh"];
function DropsearchComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropsearchComponent_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4); return _r0.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DropsearchComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropsearchComponent_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r6.value = ""; return ctx_r6.event.emit(null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DropsearchComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropsearchComponent_div_7_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const item_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.select(item_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", item_r9[ctx_r8.keylabel], " (", item_r9[ctx_r8.keyvalue], ") ");
} }
function DropsearchComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropsearchComponent_div_7_div_1_Template, 2, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r3.wdrop);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.list);
} }
const _c1 = ["*"];
class DropsearchComponent {
    constructor(eRef) {
        this.eRef = eRef;
        this.values = [];
        this.disabled = false;
        this.keyvalue = 'value';
        this.keylabel = 'label';
        this.list = [];
        this.value = '';
        this.selected = 0;
        this.valueselected = null;
        this.show = false;
        this.placeholder = 'Selecione um item...';
        this.color = '#161414fd';
        this.width = '350px';
        this.margin = '0';
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.list = this.values;
        if (this.auto) {
            let res = this.values.find((item) => item[this.keyvalue] == this.auto);
            if (res) {
                this.value = res[this.keylabel] + ' (' + res[this.keyvalue] + ')';
                this.valueselected = res[this.keyvalue];
            }
        }
    }
    clear() {
        this.value = '';
    }
    setFocus() {
        this.shdropsh.nativeElement.focus();
        setTimeout(() => {
            this.show = true;
        }, 200);
    }
    detect(evt) {
        if (evt.key == 'Tab' || evt.key == 'Enter') {
            this.show = false;
        }
    }
    focus(evt) {
        console.log(evt);
        console.log(this.values);
        let el = document.activeElement;
        console.log(el.clientTop);
        console.log(el.clientWidth);
        this.wdrop = el.clientWidth + 20 + "px";
        this.show = true;
        this.list = this.values;
        this.selected = 0;
    }
    search_set(value) {
        let res = this.list.find((item) => item[this.keyvalue] == value);
        this.value = res[this.keylabel] + '(' + res[this.keyvalue] + ')';
    }
    setItems(items) {
        this.values = items;
    }
    select(item) {
        console.log(item);
        this.value = item[this.keylabel] + ' (' + item[this.keyvalue] + ')';
        this.valueselected = item[this.keyvalue];
        this.event.emit(item[this.keyvalue]);
        this.show = false;
    }
    onChange(evt) {
        if (evt.key == 'ArrowDown') {
            if (this.selected > 0)
                this.list[this.selected - 1]['isselected'] = false;
            this.selected =
                this.selected + 1 < this.list.length + 1 ? this.selected + 1 : 1;
            this.list[this.selected - 1]['isselected'] = true;
            this.value =
                this.list[this.selected - 1][this.keylabel] +
                    ' (' +
                    this.list[this.selected - 1][this.keyvalue] +
                    ')';
            this.valueselected = this.list[this.selected - 1][this.keyvalue];
            this.event.emit(this.list[this.selected - 1][this.keyvalue]);
        }
        else if (evt.key == 'ArrowUp') {
            if (this.selected > 0)
                this.list[this.selected - 1]['isselected'] = false;
            this.selected =
                this.selected - 1 > 0 ? this.selected - 1 : this.list.length;
            this.list[this.selected - 1]['isselected'] = true;
            this.value =
                this.list[this.selected - 1][this.keylabel] +
                    ' (' +
                    this.list[this.selected - 1][this.keyvalue] +
                    ')';
            this.valueselected = this.list[this.selected - 1][this.keyvalue];
            this.event.emit(this.list[this.selected - 1][this.keyvalue]);
        }
        else {
            this.list = this.values;
            this.list = this.values.filter((item) => {
                try {
                    return (item[this.keylabel]
                        .toUpperCase()
                        .indexOf(this.value.toUpperCase()) > -1 ||
                        String(item[this.keyvalue])
                            .toUpperCase()
                            .indexOf(this.value.toUpperCase()) > -1);
                }
                catch (_) {
                    return false;
                }
            });
        }
    }
    lostFocus(evt) {
        this.show = this.eRef.nativeElement.contains(evt.target);
    }
}
DropsearchComponent.ɵfac = function DropsearchComponent_Factory(t) { return new (t || DropsearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
DropsearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DropsearchComponent, selectors: [["dropsearch"]], viewQuery: function DropsearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.shdropsh = _t.first);
    } }, hostBindings: function DropsearchComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DropsearchComponent_click_HostBindingHandler($event) { return ctx.lostFocus($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
    } }, inputs: { values: "values", disabled: "disabled", keyvalue: "keyvalue", keylabel: "keylabel", placeholder: "placeholder", color: "color", width: "width", margin: "margin", auto: "auto" }, outputs: { event: "event" }, ngContentSelectors: _c1, decls: 8, vars: 16, consts: [[1, "dropsearch"], [1, "shinput"], ["autocomplete", "off", 3, "ngModel", "placeholder", "disabled", "ngModelChange", "keyup", "keydown", "focus"], ["shdropsh", ""], ["class", "shsearch", 3, "click", 4, "ngIf"], ["class", "clsearch", 3, "click", 4, "ngIf"], ["class", "dropsh", 3, "width", 4, "ngIf"], [1, "shsearch", 3, "click"], [1, "clsearch", 3, "click"], [1, "dropsh"], ["class", "item", 3, "click", 4, "ngFor", "ngForOf"], [1, "item", 3, "click"]], template: function DropsearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DropsearchComponent_Template_input_ngModelChange_3_listener($event) { return ctx.value = $event; })("keyup", function DropsearchComponent_Template_input_keyup_3_listener($event) { return ctx.onChange($event); })("keydown", function DropsearchComponent_Template_input_keydown_3_listener($event) { return ctx.detect($event); })("focus", function DropsearchComponent_Template_input_focus_3_listener($event) { return ctx.focus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DropsearchComponent_div_5_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DropsearchComponent_div_6_Template, 1, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DropsearchComponent_div_7_Template, 2, 3, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("--pcolor", ctx.color)("--w", ctx.width)("margin", ctx.margin)("pointer-events", ctx.disabled ? "none" : "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("pointer-events", ctx.disabled ? "none" : "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.value)("placeholder", ctx.placeholder)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.values.length > 0 && ctx.show);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".dropsearch[_ngcontent-%COMP%] {\n  max-width: var(--w);\n  font-family: Poppins, Roboto, \"Courier New\", Courier, monospace;\n}\n.dropsearch[_ngcontent-%COMP%]   .shinput[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 30px;\n  padding: 10px 4px 10px 8px;\n  color: var(--pcolor);\n  \n  border-radius: 4px;\n  \n  background-color: #ffffff;\n  box-shadow: 1px 1px 5px 0px #00000033;\n}\n.dropsearch[_ngcontent-%COMP%]   .shinput[_ngcontent-%COMP%]   .shsearch[_ngcontent-%COMP%] {\n  background-image: url('search.svg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-left: 1px solid var(--pcolor);\n  cursor: pointer;\n}\n.dropsearch[_ngcontent-%COMP%]   .shinput[_ngcontent-%COMP%]   .clsearch[_ngcontent-%COMP%] {\n  background-image: url('close.svg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  border-left: 1px solid var(--pcolor);\n  cursor: pointer;\n}\n.dropsearch[_ngcontent-%COMP%]   .shinput[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  outline: none;\n  background-color: unset;\n  border: unset;\n  width: 100%;\n  width: -moz-available;\n  \n  width: -webkit-fill-available;\n  \n  width: fill-available;\n  padding-right: 8px;\n  padding-left: 8px;\n  margin-right: 8px;\n  margin-left: 8px;\n  color: var(--pcolor);\n  font-family: Poppins, Roboto, \"Courier New\", Courier, monospace;\n}\n.dropsearch[_ngcontent-%COMP%]   .shinput[_ngcontent-%COMP%]:focus-within {\n  box-shadow: 1px 1px 5px 0px #048dafe1;\n}\n.dropsh[_ngcontent-%COMP%] {\n  font-family: Poppins, Roboto, \"Courier New\", Courier, monospace;\n  position: absolute;\n  z-index: 99999;\n  transition: opacity 0.4s linear;\n  margin-top: 8px;\n  border: 1px solid var(--pcolor);\n  border-radius: 4px;\n  overflow: auto;\n  max-height: 200px;\n  background-color: #ffffff;\n}\n.dropsh[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n  padding: 8px;\n  z-index: 99999;\n}\n.dropsh[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 8px;\n  height: 8px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px #bcd4da;\n  border-radius: 10px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--pcolor);\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Ryb3BzZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLCtEQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSx5QkFBQTtFQUNBLHFDQUFBO0FBQ0o7QUFBSTtFQUNFLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0FBRU47QUFBSTtFQUNFLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0FBRU47QUFBSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFBdUIsNENBQUE7RUFDdkIsNkJBQUE7RUFBK0IsNkNBQUE7RUFDL0IscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsK0RBQUE7QUFJTjtBQURFO0VBQ0UscUNBQUE7QUFHSjtBQUFBO0VBQ0UsK0RBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFHRjtBQUZFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFJSjtBQUZFO0VBQ0UsZUFBQTtBQUlKO0FBQUEsVUFBQTtBQUNBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUFHRjtBQUFBLFVBQUE7QUFDQTtFQUNFLGlDQUFBO0VBQ0EsbUJBQUE7QUFHRjtBQUFBLFdBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsbUJBQUE7QUFHRiIsImZpbGUiOiJkcm9wc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3BzZWFyY2gge1xyXG4gIG1heC13aWR0aDogdmFyKC0tdyk7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMsIFJvYm90bywgXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcblxyXG4gIC5zaGlucHV0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCA0cHggMTBweCA4cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tcGNvbG9yKTtcclxuICAgIC8qIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXBjb2xvcikgIWltcG9ydGFudDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIC8qIGJveC1zaGFkb3c6IDJweCAycHggMnB4IDFweCByZ2IoMCAwIDAgLyAyMCUpOyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IDBweCAjMDAwMDAwMzM7XHJcbiAgICAuc2hzZWFyY2gge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9hc3NldHMvc2VhcmNoLnN2Zyk7XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLXBjb2xvcik7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5jbHNlYXJjaCB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguL2Fzc2V0cy9jbG9zZS5zdmcpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1wY29sb3IpO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHVuc2V0O1xyXG4gICAgICBib3JkZXI6IHVuc2V0O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgd2lkdGg6IC1tb3otYXZhaWxhYmxlOyAvKiBXZWJLaXQtYmFzZWQgYnJvd3NlcnMgd2lsbCBpZ25vcmUgdGhpcy4gKi9cclxuICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7IC8qIE1vemlsbGEtYmFzZWQgYnJvd3NlcnMgd2lsbCBpZ25vcmUgdGhpcy4gKi9cclxuICAgICAgd2lkdGg6IGZpbGwtYXZhaWxhYmxlO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgY29sb3I6IHZhcigtLXBjb2xvcik7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zLCBSb2JvdG8sIFwiQ291cmllciBOZXdcIiwgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gICAgfVxyXG4gIH1cclxuICAuc2hpbnB1dDpmb2N1cy13aXRoaW4ge1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggMHB4ICMwNDhkYWZlMTtcclxuICB9XHJcbn1cclxuLmRyb3BzaCB7XHJcbiAgZm9udC1mYW1pbHk6IFBvcHBpbnMsIFJvYm90bywgXCJDb3VyaWVyIE5ld1wiLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDk5OTk5O1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBsaW5lYXI7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXBjb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgLml0ZW0ge1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgei1pbmRleDogOTk5OTk7XHJcbiAgfVxyXG4gIC5pdGVtOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiA4cHg7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCA1cHggI2JjZDRkYTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcGNvbG9yKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "v9TP":
/*!**************************************************************!*\
  !*** ./src/app/pages/agendamentos/agendamentos.component.ts ***!
  \**************************************************************/
/*! exports provided: AgendamentosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendamentosComponent", function() { return AgendamentosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_registers_addagendamento_addagendamento_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/registers/addagendamento/addagendamento.component */ "V+xH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/connection.service */ "R8/k");
/* harmony import */ var src_app_services_uteis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/uteis.service */ "4y1v");
/* harmony import */ var _components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/datepicker/datepicker.component */ "JZE2");
/* harmony import */ var _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/icon/icon.component */ "WaCx");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/menu/menu.component */ "0oYm");
/* harmony import */ var _components_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/skeleton/skeleton.component */ "eO4b");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/spinner/spinner.component */ "e5sC");













const _c0 = ["dti"];
const _c1 = ["dtf"];
const _c2 = ["table"];
function AgendamentosComponent_skeleton_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "skeleton", 17);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("cols", 6)("rows", 8);
} }
function AgendamentosComponent_div_27_div_34_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "icon", 35);
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", item_r8.observacoes);
} }
function AgendamentosComponent_div_27_div_34_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "icon", 36);
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", item_r8.observacoes);
} }
function AgendamentosComponent_div_27_div_34_icon_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "icon", 37);
} }
function AgendamentosComponent_div_27_div_34_icon_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "icon", 38);
} }
function AgendamentosComponent_div_27_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AgendamentosComponent_div_27_div_34_icon_2_Template, 1, 1, "icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AgendamentosComponent_div_27_div_34_icon_3_Template, 1, 1, "icon", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AgendamentosComponent_div_27_div_34_icon_13_Template, 1, 0, "icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, AgendamentosComponent_div_27_div_34_icon_14_Template, 1, 0, "icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r8.observacoes && item_r8.ispropria);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r8.observacoes && !item_r8.ispropria);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" (", item_r8.iderpvendedor, ") ", item_r8.dsvendedor, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("(", item_r8.cdcliente, ") ", item_r8.dscliente, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" (", item_r8.cdpropriedade, ") ", item_r8.dspropriedade, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r8.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r8.realizadas == "N\u00C3O");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r8.realizadas == "SIM");
} }
const _c3 = function (a0) { return { color: a0 }; };
function AgendamentosComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 23, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Vendedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AgendamentosComponent_div_27_Template_icon_click_17_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r15.floatMenu("dsvendedor", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Cliente");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AgendamentosComponent_div_27_Template_icon_click_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r17.floatMenu("dscliente", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Propriedade");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AgendamentosComponent_div_27_Template_icon_click_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r18.floatMenu("dspropriedade", $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Data Agendam.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AgendamentosComponent_div_27_Template_icon_click_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.floatMenu("data", $event, "date"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Cumprida");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AgendamentosComponent_div_27_Template_icon_click_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r20.floatMenu("realizadas", $event, "text"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, AgendamentosComponent_div_27_div_34_Template, 15, 11, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Total de Agendamento: ", ctx_r3.list.length, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Visitas realizadas: ", ctx_r3.count("realizadas", "SIM"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Visitas pendentes: ", ctx_r3.count("realizadas", "N\u00C3O"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c3, ctx_r3.isFiltro("dsvendedor") ? "orange" : "white"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c3, ctx_r3.isFiltro("dscliente") ? "orange" : "white"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c3, ctx_r3.isFiltro("dspropriedade") ? "orange" : "white"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](15, _c3, ctx_r3.isFiltro("data") ? "orange" : "white"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](17, _c3, ctx_r3.isFiltro("realizadas") ? "orange" : "white"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.list);
} }
function AgendamentosComponent_spinner_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "spinner");
} }
class AgendamentosComponent {
    constructor(conn, util) {
        this.conn = conn;
        this.util = util;
        this.loading = false;
        this.list = [];
        this.aux = [];
        this.filterselects = {};
    }
    ngOnInit() { }
    ngAfterViewInit() {
        this.init();
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dti.value = moment__WEBPACK_IMPORTED_MODULE_1__().subtract(30, 'days').format('DD/MM/YYYY');
            this.dtf.value = moment__WEBPACK_IMPORTED_MODULE_1__().add(30, 'days').format('DD/MM/YYYY');
            yield this.getAgendamentos();
        });
    }
    getAgendamentos() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            try {
                this.filterselects = {};
                this.list = yield this.conn
                    .getAgendamentos(this.dti.value, this.dtf.value)
                    .toPromise();
                this.list.forEach((element) => {
                    element.data = moment__WEBPACK_IMPORTED_MODULE_1__(element.data).format('DD/MM/YYYY');
                    element.ispropria = String(element.cduser) === String(this.conn.user.id);
                });
                console.log(this.list);
                this.aux = this.list;
            }
            catch (error) { }
            this.loading = false;
        });
    }
    count(key, label) {
        return this.list.filter((item) => item[key] == label).length;
    }
    exportar() {
        const columns = {
            cdcliente: 'Cód. Cliente',
            dscliente: 'Desc. Cliente',
            iderpvendedor: 'Cód. Vendedor',
            dsvendedor: 'Desc. Vendedor',
            cdpropriedade: 'Cód. Propriedade',
            dspropriedade: 'Desc. Propriedade',
            visitas: 'Visita Realizada',
        };
        var wscols = [
            { wch: 15 },
            { wch: 50 },
            { wch: 15 },
            { wch: 50 },
            { wch: 15 },
            { wch: 50 },
            { wch: 15 },
        ];
        let js = this.list.map((item) => {
            let j = {};
            for (let c in columns) {
                if (c == 'visitas') {
                    j[columns[c]] = Number(item[c]) > 0 ? 'SIM' : 'NÃO';
                }
                else
                    j[columns[c]] = item[c];
            }
            return j;
        });
        console.log(js);
        this.util.toExcel(js, 'Agendamentos', wscols);
    }
    newAgendamento() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.util
                .modal(src_app_registers_addagendamento_addagendamento_component__WEBPACK_IMPORTED_MODULE_2__["AddagendamentoComponent"], {
                data: null,
                width: '580px',
                height: '650px',
            })
                .then((_) => {
                this.getAgendamentos();
            });
        });
    }
    isFiltro(key) {
        return key in this.filterselects;
    }
    filter() {
        this.list = this.aux.filter((item) => {
            let cond = [];
            for (let key in this.filterselects) {
                cond.push(this.filterselects[key].indexOf(item[key]) > -1);
            }
            return cond.every((el) => el);
        });
    }
    floatMenu(key, evt, mask = null) {
        console.log(evt);
        let items = Array.from(new Set(this.list.map((item) => item[key])));
        this.util
            .floatingSearch(evt, this.table.nativeElement, items, this.filterselects[key], -60, 0, mask)
            .then((res) => {
            if (res)
                this.filterselects[key] = res;
            else
                delete this.filterselects[key];
            this.filter();
        });
    }
}
AgendamentosComponent.ɵfac = function AgendamentosComponent_Factory(t) { return new (t || AgendamentosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_connection_service__WEBPACK_IMPORTED_MODULE_4__["ConnectionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_uteis_service__WEBPACK_IMPORTED_MODULE_5__["UteisService"])); };
AgendamentosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AgendamentosComponent, selectors: [["app-agendamentos"]], viewQuery: function AgendamentosComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.dti = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.dtf = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 30, vars: 3, consts: [["id", "container"], [1, "struct"], [1, "filtros"], [2, "width", "15%", "padding", "4px"], ["placeholder", "Data Inicial"], ["dti", ""], ["placeholder", "Data Final"], ["dtf", ""], [1, "button", 3, "click"], ["width", "20px", "height", "20px", "icon", "/assets/icons/searchw.svg"], [1, "button", "btorange", 3, "click"], ["width", "20px", "height", "20px", "icon", "/assets/icons/agendamento.svg"], [1, "button", "btprint", 3, "click"], ["width", "20px", "height", "20px", "icon", "/assets/icons/excel.svg"], ["type", "table", 3, "cols", "rows", 4, "ngIf"], ["class", "form", 4, "ngIf"], [4, "ngIf"], ["type", "table", 3, "cols", "rows"], [1, "form"], [1, "table", 2, "--cs", "1fr 1fr 1fr"], ["table", ""], ["table", "true", 1, "toptable", "legendtoptable"], [1, "label", "alc"], [1, "table", 2, "--cs", "40px 1fr 1fr 1fr 150px 92px"], ["table", "true", 1, "toptable"], [1, "label", "sb"], [3, "ngStyle"], ["width", "12px", "height", "12px", "icon", "/assets/icons/down.svg", 3, "click"], [1, "label"], ["class", "bodytable", "table", "true", 4, "ngFor", "ngForOf"], ["table", "true", 1, "bodytable"], ["width", "20px", "height", "20px", "matTooltipPosition", "right", "icon", "/assets/icons/sended.svg", 3, "matTooltip", 4, "ngIf"], ["width", "20px", "height", "20px", "matTooltipPosition", "right", "icon", "/assets/icons/received.svg", 3, "matTooltip", 4, "ngIf"], ["width", "20px", "height", "20px", "icon", "/assets/icons/thumbsdown.svg", 4, "ngIf"], ["width", "20px", "height", "20px", "icon", "/assets/icons/thumbsup.svg", 4, "ngIf"], ["width", "20px", "height", "20px", "matTooltipPosition", "right", "icon", "/assets/icons/sended.svg", 3, "matTooltip"], ["width", "20px", "height", "20px", "matTooltipPosition", "right", "icon", "/assets/icons/received.svg", 3, "matTooltip"], ["width", "20px", "height", "20px", "icon", "/assets/icons/thumbsdown.svg"], ["width", "20px", "height", "20px", "icon", "/assets/icons/thumbsup.svg"]], template: function AgendamentosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Agendamentos de Visitas");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "datepicker", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "datepicker", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AgendamentosComponent_Template_div_click_12_listener() { return ctx.getAgendamentos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Pesquisar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AgendamentosComponent_Template_div_click_17_listener() { return ctx.newAgendamento(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Novo Agendamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AgendamentosComponent_Template_div_click_22_listener() { return ctx.exportar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Exportar (xls)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, AgendamentosComponent_skeleton_26_Template, 1, 2, "skeleton", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, AgendamentosComponent_div_27_Template, 35, 19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, AgendamentosComponent_spinner_29_Template, 1, 0, "spinner", 16);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_6__["DatepickerComponent"], _components_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"], _components_skeleton_skeleton_component__WEBPACK_IMPORTED_MODULE_10__["SkeletonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__["MatTooltip"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__["SpinnerComponent"]], styles: [".filtros[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-content: center;\n  justify-content: flex-start;\n  align-items: center;\n}\n.filtros[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  height: 29px;\n}\n.sb[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FnZW5kYW1lbnRvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFBSTtFQUNJLFlBQUE7QUFFUjtBQUVBO0VBQ0kseUNBQUE7QUFDSiIsImZpbGUiOiJhZ2VuZGFtZW50b3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdHJvc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLmJ1dHRvbntcclxuICAgICAgICBoZWlnaHQ6IDI5cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zYntcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_mapsgoogle_mapsgoogle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/mapsgoogle/mapsgoogle.component */ "ZcpQ");
/* harmony import */ var _pages_relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/relatorio/relatorio.component */ "V3xA");
/* harmony import */ var _details_visitascliente_visitascliente_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details/visitascliente/visitascliente.component */ "aaPi");
/* harmony import */ var _pages_agendamentos_agendamentos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/agendamentos/agendamentos.component */ "v9TP");
/* harmony import */ var _pages_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/clientes/clientes.component */ "BPMd");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_vendedores_vendedores_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/vendedores/vendedores.component */ "7HkS");
/* harmony import */ var _pages_visits_visits_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/visits/visits.component */ "T73m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












const routes = [
    { path: 'dashboard', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: 'visits', component: _pages_visits_visits_component__WEBPACK_IMPORTED_MODULE_9__["VisitsComponent"] },
    { path: 'clientes', component: _pages_clientes_clientes_component__WEBPACK_IMPORTED_MODULE_5__["ClientesComponent"] },
    { path: 'vendedores', component: _pages_vendedores_vendedores_component__WEBPACK_IMPORTED_MODULE_8__["VendedoresComponent"] },
    { path: 'vendedores/:id/:dtini/:dtfim', component: _pages_vendedores_vendedores_component__WEBPACK_IMPORTED_MODULE_8__["VendedoresComponent"] },
    { path: 'vendedores/:id', component: _pages_vendedores_vendedores_component__WEBPACK_IMPORTED_MODULE_8__["VendedoresComponent"] },
    { path: 'visitacliente/:idcliente', component: _details_visitascliente_visitascliente_component__WEBPACK_IMPORTED_MODULE_3__["VisitasclienteComponent"] },
    { path: 'mapa', component: _components_mapsgoogle_mapsgoogle_component__WEBPACK_IMPORTED_MODULE_1__["MapsgoogleComponent"] },
    { path: 'agendamentos', component: _pages_agendamentos_agendamentos_component__WEBPACK_IMPORTED_MODULE_4__["AgendamentosComponent"] },
    { path: 'relatorio/:idcliente', component: _pages_relatorio_relatorio_component__WEBPACK_IMPORTED_MODULE_2__["RelatorioComponent"] },
    { path: '', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "z7QY":
/*!********************************************************!*\
  !*** ./src/app/components/chartdistance/charttheme.ts ***!
  \********************************************************/
/*! exports provided: points */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "points", function() { return points; });
const points = [
    { x: -417.4834289550781, y: -10.923015594482422 },
    { x: -412.4834289550781, y: -10.923015594482422 },
    { x: -407.4834289550781, y: -10.923015594482422 },
    { x: -402.4834289550781, y: -10.923015594482422 },
    { x: -397.4834289550781, y: -10.923015594482422 },
    { x: -392.4834289550781, y: -10.923015594482422 },
    { x: -387.4834289550781, y: -10.923015594482422 },
    { x: -382.4834289550781, y: -10.923015594482422 },
    { x: -377.4834289550781, y: -10.923015594482422 },
    { x: -372.4834289550781, y: -10.923015594482422 },
    { x: -367.4834289550781, y: -10.923015594482422 },
    { x: -362.4834289550781, y: -10.923015594482422 },
    { x: -357.4834289550781, y: -10.923015594482422 },
    { x: -352.4834289550781, y: -10.923015594482422 },
    { x: -347.4834289550781, y: -10.923015594482422 },
    { x: -342.4834289550781, y: -10.923015594482422 },
    { x: -337.4834289550781, y: -10.923015594482422 },
    { x: -332.4834289550781, y: -10.923015594482422 },
    { x: -327.4950256347656, y: -11.18120288848877 },
    { x: -322.6242370605469, y: -12.281744003295898 },
    { x: -318.0163879394531, y: -14.20695686340332 },
    { x: -313.7946472167969, y: -16.875335693359375 },
    { x: -310.0535583496094, y: -20.184856414794922 },
    { x: -306.8625183105469, y: -24.028013229370117 },
    { x: -304.2716979980469, y: -28.299266815185547 },
    { x: -302.31744384765625, y: -32.89698791503906 },
    { x: -301.02313232421875, y: -37.722415924072266 },
    { x: -300.3988952636719, y: -42.679439544677734 },
    { x: -300.3358154296875, y: -47.67822265625 },
    { x: -300.3358154296875, y: -52.67822265625 },
    { x: -300.3358154296875, y: -57.67822265625 },
    { x: -300.3358154296875, y: -62.67822265625 },
    { x: -300.3358154296875, y: -67.67822265625 },
    { x: -300.3358154296875, y: -72.67822265625 },
    { x: -300.3358154296875, y: -77.67822265625 },
    { x: -300.3269958496094, y: -82.67815399169922 },
    { x: -299.84722900390625, y: -87.65047454833984 },
    { x: -298.63006591796875, y: -92.4950942993164 },
    { x: -296.68548583984375, y: -97.0959701538086 },
    { x: -294.0417785644531, y: -101.33356475830078 },
    { x: -290.74444580078125, y: -105.0844955444336 },
    { x: -286.8580627441406, y: -108.22007751464844 },
    { x: -282.47491455078125, y: -110.61119842529297 },
    { x: -277.722900390625, y: -112.14154815673828 },
    { x: -272.7660217285156, y: -112.73446655273438 },
    { x: -267.7870178222656, y: -112.37076568603516 },
    { x: -262.96978759765625, y: -111.06034851074219 },
    { x: -258.485107421875, y: -108.86592864990234 },
    { x: -254.47003173828125, y: -105.89718627929688 },
    { x: -251.02467346191406, y: -102.28192138671875 },
    { x: -248.21957397460938, y: -98.14952850341797 },
    { x: -246.1041717529297, y: -93.62472534179688 },
    { x: -244.71084594726562, y: -88.827880859375 },
    { x: -244.0543975830078, y: -83.87583923339844 },
    { x: -243.99761962890625, y: -78.87692260742188 },
    { x: -243.99761962890625, y: -73.87692260742188 },
    { x: -243.99761962890625, y: -68.87692260742188 },
    { x: -243.99761962890625, y: -63.876922607421875 },
    { x: -243.99761962890625, y: -58.876922607421875 },
    { x: -243.99761962890625, y: -53.876922607421875 },
    { x: -243.99761962890625, y: -48.876922607421875 },
    { x: -243.99761962890625, y: -43.876922607421875 },
    { x: -243.99761962890625, y: -38.876922607421875 },
    { x: -243.99761962890625, y: -33.876922607421875 },
    { x: -243.99761962890625, y: -28.876922607421875 },
    { x: -243.99761962890625, y: -23.876922607421875 },
    { x: -243.99761962890625, y: -18.876922607421875 },
    { x: -243.99761962890625, y: -13.876922607421875 },
    { x: -243.99761962890625, y: -8.876922607421875 },
    { x: -243.99761962890625, y: -3.876922607421875 },
    { x: -243.99761962890625, y: 1.123077392578125 },
    { x: -243.99761962890625, y: 6.123077392578125 },
    { x: -243.98655700683594, y: 11.122993469238281 },
    { x: -243.59844970703125, y: 16.105270385742188 },
    { x: -242.65057373046875, y: 21.011802673339844 },
    { x: -241.14419555664062, y: 25.776521682739258 },
    { x: -239.09010314941406, y: 30.331876754760742 },
    { x: -236.5057830810547, y: 34.608619689941406 },
    { x: -233.41647338867188, y: 38.53592300415039 },
    { x: -229.855224609375, y: 42.04053497314453 },
    { x: -225.86524963378906, y: 45.04758071899414 },
    { x: -221.50289916992188, y: 47.482627868652344 },
    { x: -216.84068298339844, y: 49.2772216796875 },
    { x: -211.9678497314453, y: 50.37752151489258 },
    { x: -206.98663330078125, y: 50.7551383972168 },
    { x: -202.00328063964844, y: 50.40679931640625 },
    { x: -197.1240692138672, y: 49.33515167236328 },
    { x: -192.45150756835938, y: 47.567745208740234 },
    { x: -188.07559204101562, y: 45.15721130371094 },
    { x: -184.0694580078125, y: 42.1717414855957 },
    { x: -180.4899444580078, y: 38.68574905395508 },
    { x: -177.3810577392578, y: 34.77395248413086 },
    { x: -174.77589416503906, y: 30.509902954101562 },
    { x: -172.69992065429688, y: 25.964475631713867 },
    { x: -171.17140197753906, y: 21.206836700439453 },
    { x: -170.2007598876953, y: 16.304752349853516 },
    { x: -169.79034423828125, y: 11.324256896972656 },
    { x: -169.7743377685547, y: 6.3243865966796875 },
    { x: -169.7743377685547, y: 1.3243865966796875 },
    { x: -169.7743377685547, y: -3.6756134033203125 },
    { x: -169.7743377685547, y: -8.675613403320312 },
    { x: -169.7743377685547, y: -13.675613403320312 },
    { x: -169.7743377685547, y: -18.675613403320312 },
    { x: -169.7743377685547, y: -23.675613403320312 },
    { x: -169.7743377685547, y: -28.675613403320312 },
    { x: -169.7743377685547, y: -33.67561340332031 },
    { x: -169.7743377685547, y: -38.67561340332031 },
    { x: -169.7743377685547, y: -43.67561340332031 },
    { x: -169.7743377685547, y: -48.67561340332031 },
    { x: -169.7743377685547, y: -53.67561340332031 },
    { x: -169.7743377685547, y: -58.67561340332031 },
    { x: -169.7743377685547, y: -63.67561340332031 },
    { x: -169.7743377685547, y: -68.67561340332031 },
    { x: -169.7743377685547, y: -73.67561340332031 },
    { x: -169.7743377685547, y: -78.67561340332031 },
    { x: -169.7743377685547, y: -83.67561340332031 },
    { x: -169.7743377685547, y: -88.67561340332031 },
    { x: -169.7743377685547, y: -93.67561340332031 },
    { x: -169.7743377685547, y: -98.67561340332031 },
    { x: -169.7743377685547, y: -103.67561340332031 },
    { x: -169.7743377685547, y: -108.67561340332031 },
    { x: -169.7743377685547, y: -113.67561340332031 },
    { x: -169.7743377685547, y: -118.67561340332031 },
    { x: -169.7743377685547, y: -123.67561340332031 },
    { x: -169.7743377685547, y: -128.6756134033203 },
    { x: -169.7743377685547, y: -133.6756134033203 },
    { x: -169.7743377685547, y: -138.6756134033203 },
    { x: -169.7743377685547, y: -143.6756134033203 },
    { x: -169.7743377685547, y: -148.6756134033203 },
    { x: -169.7743377685547, y: -153.6756134033203 },
    { x: -169.7743377685547, y: -158.6756134033203 },
    { x: -169.76597595214844, y: -163.67556762695312 },
    { x: -169.4783477783203, y: -168.6658477783203 },
    { x: -168.7764434814453, y: -173.61480712890625 },
    { x: -167.65907287597656, y: -178.48681640625 },
    { x: -166.12872314453125, y: -183.24517822265625 },
    { x: -164.19125366210938, y: -187.85279846191406 },
    { x: -161.85557556152344, y: -192.2718048095703 },
    { x: -159.13348388671875, y: -196.4638671875 },
    { x: -156.03990173339844, y: -200.3895721435547 },
    { x: -152.59300231933594, y: -204.0089569091797 },
    { x: -148.81480407714844, y: -207.28085327148438 },
    { x: -144.73226928710938, y: -210.1638641357422 },
    { x: -140.37818908691406, y: -212.61737060546875 },
    { x: -135.79212951660156, y: -214.6033935546875 },
    { x: -131.0205535888672, y: -216.08920288085938 },
    { x: -126.1163558959961, y: -217.050537109375 },
    { x: -121.13687896728516, y: -217.47470092773438 },
    { x: -116.14054107666016, y: -217.3608856201172 },
    { x: -111.18573760986328, y: -216.70848083496094 },
    { x: -106.3309555053711, y: -215.52272033691406 },
    { x: -101.63175964355469, y: -213.82164001464844 },
    { x: -97.138671875, y: -211.63323974609375 },
    { x: -92.89518737792969, y: -208.99290466308594 },
    { x: -88.93794250488281, y: -205.9401092529297 },
    { x: -85.29711151123047, y: -202.51597595214844 },
    { x: -81.99738311767578, y: -198.7619171142578 },
    { x: -79.05916595458984, y: -194.71847534179688 },
    { x: -76.49918365478516, y: -190.42552185058594 },
    { x: -74.33081817626953, y: -185.92201232910156 },
    { x: -72.56472778320312, y: -181.24598693847656 },
    { x: -71.2088394165039, y: -176.43499755859375 },
    { x: -70.26750946044922, y: -171.5259552001953 },
    { x: -69.7413101196289, y: -166.55517578125 },
    { x: -69.6175537109375, y: -161.55787658691406 },
    { x: -69.6175537109375, y: -156.55787658691406 },
    { x: -69.6175537109375, y: -151.55787658691406 },
    { x: -69.6175537109375, y: -146.55787658691406 },
    { x: -69.6175537109375, y: -141.55787658691406 },
    { x: -69.6175537109375, y: -136.55787658691406 },
    { x: -69.6175537109375, y: -131.55787658691406 },
    { x: -69.6175537109375, y: -126.55787658691406 },
    { x: -69.6175537109375, y: -121.55787658691406 },
    { x: -69.6175537109375, y: -116.55787658691406 },
    { x: -69.6175537109375, y: -111.55787658691406 },
    { x: -69.6175537109375, y: -106.55787658691406 },
    { x: -69.6175537109375, y: -101.55787658691406 },
    { x: -69.6175537109375, y: -96.55787658691406 },
    { x: -69.61756134033203, y: -91.55787658691406 },
    { x: -69.61756134033203, y: -86.55787658691406 },
    { x: -69.61756134033203, y: -81.55787658691406 },
    { x: -69.61756134033203, y: -76.55787658691406 },
    { x: -69.61756134033203, y: -71.55787658691406 },
    { x: -69.61756134033203, y: -66.55787658691406 },
    { x: -69.61756134033203, y: -61.55787658691406 },
    { x: -69.61756134033203, y: -56.55787658691406 },
    { x: -69.61756134033203, y: -51.55787658691406 },
    { x: -69.61756134033203, y: -46.55787658691406 },
    { x: -69.61756134033203, y: -41.55787658691406 },
    { x: -69.61756134033203, y: -36.55787658691406 },
    { x: -69.61756134033203, y: -31.557876586914062 },
    { x: -69.61756134033203, y: -26.557876586914062 },
    { x: -69.61756134033203, y: -21.557876586914062 },
    { x: -69.61756134033203, y: -16.557876586914062 },
    { x: -69.61756134033203, y: -11.557876586914062 },
    { x: -69.61756134033203, y: -6.5578765869140625 },
    { x: -69.61756134033203, y: -1.5578765869140625 },
    { x: -69.61756134033203, y: 3.4421234130859375 },
    { x: -69.61756134033203, y: 8.442123413085938 },
    { x: -69.61756134033203, y: 13.442123413085938 },
    { x: -69.61756134033203, y: 18.442123413085938 },
    { x: -69.61756134033203, y: 23.442123413085938 },
    { x: -69.61756134033203, y: 28.442123413085938 },
    { x: -69.61756134033203, y: 33.44212341308594 },
    { x: -69.61756134033203, y: 38.44212341308594 },
    { x: -69.61756134033203, y: 43.44212341308594 },
    { x: -69.61756134033203, y: 48.44212341308594 },
    { x: -69.61756134033203, y: 53.44212341308594 },
    { x: -69.61756134033203, y: 58.44212341308594 },
    { x: -69.61756134033203, y: 63.44212341308594 },
    { x: -69.61756134033203, y: 68.44212341308594 },
    { x: -69.61756134033203, y: 73.44212341308594 },
    { x: -69.61756134033203, y: 78.44212341308594 },
    { x: -69.61756896972656, y: 83.44212341308594 },
    { x: -69.61756896972656, y: 88.44212341308594 },
    { x: -69.61756896972656, y: 93.44212341308594 },
    { x: -69.61756896972656, y: 98.44212341308594 },
    { x: -69.61756896972656, y: 103.44212341308594 },
    { x: -69.61756896972656, y: 108.44212341308594 },
    { x: -69.61756896972656, y: 113.44212341308594 },
    { x: -69.61756896972656, y: 118.44212341308594 },
    { x: -69.61756896972656, y: 123.44212341308594 },
    { x: -69.61756896972656, y: 128.44212341308594 },
    { x: -69.61756896972656, y: 133.44212341308594 },
    { x: -69.61756896972656, y: 138.44212341308594 },
    { x: -69.61756896972656, y: 143.44212341308594 },
    { x: -69.61756896972656, y: 148.44212341308594 },
    { x: -69.61756896972656, y: 153.44212341308594 },
    { x: -69.61756896972656, y: 158.44212341308594 },
    { x: -69.61756896972656, y: 163.44212341308594 },
    { x: -69.6015853881836, y: 168.4420623779297 },
    { x: -69.36360168457031, y: 173.4356689453125 },
    { x: -68.83807373046875, y: 178.4073028564453 },
    { x: -68.02362823486328, y: 183.33969116210938 },
    { x: -66.91996002197266, y: 188.21571350097656 },
    { x: -65.52843475341797, y: 193.0174102783203 },
    { x: -63.85124969482422, y: 197.7268829345703 },
    { x: -61.89183807373047, y: 202.32611083984375 },
    { x: -59.65471267700195, y: 206.79672241210938 },
    { x: -57.14509201049805, y: 211.12033081054688 },
    { x: -54.36948013305664, y: 215.2781982421875 },
    { x: -51.335166931152344, y: 219.2512664794922 },
    { x: -48.05073547363281, y: 223.02001953125 },
    { x: -44.525901794433594, y: 226.56475830078125 },
    { x: -40.771671295166016, y: 229.8657684326172 },
    { x: -36.80098342895508, y: 232.90286254882812 },
    { x: -32.62838363647461, y: 235.6559295654297 },
    { x: -28.270912170410156, y: 238.10574340820312 },
    { x: -23.747535705566406, y: 240.23365783691406 },
    { x: -19.079940795898438, y: 242.02301025390625 },
    { x: -14.291909217834473, y: 243.4592742919922 },
    { x: -9.409342765808105, y: 244.53109741210938 },
    { x: -4.459836006164551, y: 245.23095703125 },
    { x: 0.5284808874130249, y: 245.55584716796875 },
    { x: 5.5269646644592285, y: 245.50665283203125 },
    { x: 10.507811546325684, y: 245.08306884765625 },
    { x: 15.442481994628906, y: 244.2847442626953 },
    { x: 20.302715301513672, y: 243.1161346435547 },
    { x: 25.061508178710938, y: 241.58570861816406 },
    { x: 29.693445205688477, y: 239.7056427001953 },
    { x: 34.175148010253906, y: 237.4913330078125 },
    { x: 38.48564147949219, y: 234.95985412597656 },
    { x: 42.60664749145508, y: 232.13009643554688 },
    { x: 46.521663665771484, y: 229.0216064453125 },
    { x: 50.21662139892578, y: 225.65451049804688 },
    { x: 53.679298400878906, y: 222.04873657226562 },
    { x: 56.898712158203125, y: 218.22439575195312 },
    { x: 59.86568832397461, y: 214.20086669921875 },
    { x: 62.57196044921875, y: 209.99755859375 },
    { x: 65.01041412353516, y: 205.6334228515625 },
    { x: 67.175048828125, y: 201.1270751953125 },
    { x: 69.06047821044922, y: 196.49710083007812 },
    { x: 70.66278076171875, y: 191.7615509033203 },
    { x: 71.9787826538086, y: 186.9385528564453 },
    { x: 73.00624084472656, y: 182.04605102539062 },
    { x: 73.7446517944336, y: 177.10157775878906 },
    { x: 74.19428253173828, y: 172.12257385253906 },
    { x: 74.35696411132812, y: 167.1259002685547 },
    { x: 74.35778045654297, y: 162.1258544921875 },
    { x: 74.35778045654297, y: 157.1258544921875 },
    { x: 74.35778045654297, y: 152.1258544921875 },
    { x: 74.35778045654297, y: 147.1258544921875 },
    { x: 74.35778045654297, y: 142.1258544921875 },
    { x: 74.35778045654297, y: 137.1258544921875 },
    { x: 74.35778045654297, y: 132.1258544921875 },
    { x: 74.35778045654297, y: 127.12584686279297 },
    { x: 74.35778045654297, y: 122.12584686279297 },
    { x: 74.35778045654297, y: 117.12584686279297 },
    { x: 74.35778045654297, y: 112.12584686279297 },
    { x: 74.35778045654297, y: 107.12584686279297 },
    { x: 74.35778045654297, y: 102.12584686279297 },
    { x: 74.35778045654297, y: 97.12584686279297 },
    { x: 74.35778045654297, y: 92.12584686279297 },
    { x: 74.35778045654297, y: 87.12584686279297 },
    { x: 74.35778045654297, y: 82.12584686279297 },
    { x: 74.35778045654297, y: 77.12584686279297 },
    { x: 74.35778045654297, y: 72.12584686279297 },
    { x: 74.35778045654297, y: 67.12584686279297 },
    { x: 74.35778045654297, y: 62.12584686279297 },
    { x: 74.35778045654297, y: 57.12584686279297 },
    { x: 74.35778045654297, y: 52.12584686279297 },
    { x: 74.35778045654297, y: 47.12584686279297 },
    { x: 74.35778045654297, y: 42.12584686279297 },
    { x: 74.35778045654297, y: 37.12584686279297 },
    { x: 74.35778045654297, y: 32.12584686279297 },
    { x: 74.35778045654297, y: 27.12584686279297 },
    { x: 74.35778045654297, y: 22.12584686279297 },
    { x: 74.35778045654297, y: 17.12584686279297 },
    { x: 74.35778045654297, y: 12.125846862792969 },
    { x: 74.35778045654297, y: 7.125846862792969 },
    { x: 74.35778045654297, y: 2.1258468627929688 },
    { x: 74.35777282714844, y: -2.8741531372070312 },
    { x: 74.35777282714844, y: -7.874153137207031 },
    { x: 74.35777282714844, y: -12.874153137207031 },
    { x: 74.35777282714844, y: -17.87415313720703 },
    { x: 74.35777282714844, y: -22.87415313720703 },
    { x: 74.35777282714844, y: -27.87415313720703 },
    { x: 74.35777282714844, y: -32.87415313720703 },
    { x: 74.35777282714844, y: -37.87415313720703 },
    { x: 74.35777282714844, y: -42.87415313720703 },
    { x: 74.35777282714844, y: -47.87415313720703 },
    { x: 74.35777282714844, y: -52.87415313720703 },
    { x: 74.35777282714844, y: -57.87415313720703 },
    { x: 74.35777282714844, y: -62.87415313720703 },
    { x: 74.35777282714844, y: -67.87415313720703 },
    { x: 74.35777282714844, y: -72.87415313720703 },
    { x: 74.35777282714844, y: -77.87415313720703 },
    { x: 74.35777282714844, y: -82.87415313720703 },
    { x: 74.35777282714844, y: -87.87415313720703 },
    { x: 74.50332641601562, y: -92.87067413330078 },
    { x: 75.07424926757812, y: -97.83638763427734 },
    { x: 76.08013153076172, y: -102.7325439453125 },
    { x: 77.51921081542969, y: -107.51914978027344 },
    { x: 79.38603973388672, y: -112.15572357177734 },
    { x: 81.67122650146484, y: -116.6009292602539 },
    { x: 84.36224365234375, y: -120.8127670288086 },
    { x: 87.44304656982422, y: -124.74835968017578 },
    { x: 90.89397430419922, y: -128.36375427246094 },
    { x: 94.69074249267578, y: -131.61380004882812 },
    { x: 98.80345916748047, y: -134.45327758789062 },
    { x: 103.19535064697266, y: -136.83779907226562 },
    { x: 107.82209014892578, y: -138.72654724121094 },
    { x: 112.63123321533203, y: -140.08522033691406 },
    { x: 117.5632553100586, y: -140.8902130126953 },
    { x: 122.55474853515625, y: -141.1316680908203 },
    { x: 127.54168701171875, y: -140.81039428710938 },
    { x: 132.46011352539062, y: -139.9259796142578 },
    { x: 137.24685668945312, y: -138.49044799804688 },
    { x: 141.84329223632812, y: -136.52911376953125 },
    { x: 146.19825744628906, y: -134.07742309570312 },
    { x: 150.26820373535156, y: -131.17703247070312 },
    { x: 154.01754760742188, y: -127.87248992919922 },
    { x: 157.41749572753906, y: -124.20916748046875 },
    { x: 160.44406127929688, y: -120.23162841796875 },
    { x: 163.07847595214844, y: -115.98419952392578 },
    { x: 165.30511474609375, y: -111.50936889648438 },
    { x: 167.1117401123047, y: -106.84902954101562 },
    { x: 168.4897003173828, y: -102.04442596435547 },
    { x: 169.43394470214844, y: -97.1361083984375 },
    { x: 169.94345092773438, y: -92.16376495361328 },
    { x: 170.04324340820312, y: -87.16584777832031 },
    { x: 170.04324340820312, y: -82.16584777832031 },
    { x: 170.04324340820312, y: -77.16584777832031 },
    { x: 170.04324340820312, y: -72.16584777832031 },
    { x: 170.04324340820312, y: -67.16584777832031 },
    { x: 170.04324340820312, y: -62.16584777832031 },
    { x: 170.04324340820312, y: -57.16584777832031 },
    { x: 170.04324340820312, y: -52.16584777832031 },
    { x: 170.04324340820312, y: -47.16584777832031 },
    { x: 170.04324340820312, y: -42.16584777832031 },
    { x: 170.04324340820312, y: -37.16584777832031 },
    { x: 170.04324340820312, y: -32.16584777832031 },
    { x: 170.04324340820312, y: -27.165847778320312 },
    { x: 170.04324340820312, y: -22.165847778320312 },
    { x: 170.04324340820312, y: -17.165847778320312 },
    { x: 170.04324340820312, y: -12.165847778320312 },
    { x: 170.04324340820312, y: -7.1658477783203125 },
    { x: 170.04324340820312, y: -2.1658477783203125 },
    { x: 170.04324340820312, y: 2.8341522216796875 },
    { x: 170.04324340820312, y: 7.8341522216796875 },
    { x: 170.04324340820312, y: 12.834152221679688 },
    { x: 170.04324340820312, y: 17.834152221679688 },
    { x: 170.04324340820312, y: 22.834152221679688 },
    { x: 170.04324340820312, y: 27.834152221679688 },
    { x: 170.04324340820312, y: 32.83415222167969 },
    { x: 170.04324340820312, y: 37.83415222167969 },
    { x: 170.04324340820312, y: 42.83415222167969 },
    { x: 170.04324340820312, y: 47.83415222167969 },
    { x: 170.04324340820312, y: 52.83415222167969 },
    { x: 170.1525115966797, y: 57.83161926269531 },
    { x: 170.77532958984375, y: 62.790042877197266 },
    { x: 171.9515838623047, y: 67.6469497680664 },
    { x: 173.67649841308594, y: 72.3370361328125 },
    { x: 175.9366455078125, y: 76.79366302490234 },
    { x: 178.71221923828125, y: 80.94889068603516 },
    { x: 181.9757537841797, y: 84.73263549804688 },
    { x: 185.6917266845703, y: 88.07272338867188 },
    { x: 189.8141632080078, y: 90.89555358886719 },
    { x: 194.2825927734375, y: 93.12992858886719 },
    { x: 199.02098083496094, y: 94.71227264404297 },
    { x: 203.9376220703125, y: 95.59717559814453 },
    { x: 208.93055725097656, y: 95.76509094238281 },
    { x: 213.89581298828125, y: 95.21554565429688 },
    { x: 218.73004150390625, y: 93.95567321777344 },
    { x: 223.3354034423828, y: 92.01966857910156 },
    { x: 227.62841796875, y: 89.46398162841797 },
    { x: 231.54127502441406, y: 86.35702514648438 },
    { x: 235.02178955078125, y: 82.77204895019531 },
    { x: 238.02980041503906, y: 78.781982421875 },
    { x: 240.5343780517578, y: 74.45804595947266 },
    { x: 242.5120086669922, y: 69.8688735961914 },
    { x: 243.94642639160156, y: 65.08204650878906 },
    { x: 244.82875061035156, y: 60.16316223144531 },
    { x: 245.15798950195312, y: 55.176483154296875 },
    { x: 245.16082763671875, y: 50.17647171020508 },
    { x: 245.16082763671875, y: 45.17647171020508 },
    { x: 245.16082763671875, y: 40.17647171020508 },
    { x: 245.16082763671875, y: 35.17647171020508 },
    { x: 245.16082763671875, y: 30.176471710205078 },
    { x: 245.16082763671875, y: 25.176471710205078 },
    { x: 245.16082763671875, y: 20.176471710205078 },
    { x: 245.16082763671875, y: 15.176471710205078 },
    { x: 245.16082763671875, y: 10.176471710205078 },
    { x: 245.16082763671875, y: 5.176471710205078 },
    { x: 245.16082763671875, y: 0.17647171020507812 },
    { x: 245.16082763671875, y: -4.823528289794922 },
    { x: 245.16082763671875, y: -9.823528289794922 },
    { x: 245.16082763671875, y: -14.823528289794922 },
    { x: 245.16082763671875, y: -19.823528289794922 },
    { x: 245.16082763671875, y: -24.823528289794922 },
    { x: 245.16082763671875, y: -29.823528289794922 },
    { x: 245.16082763671875, y: -34.82352828979492 },
    { x: 245.16082763671875, y: -39.82352828979492 },
    { x: 245.16082763671875, y: -44.82352828979492 },
    { x: 245.16082763671875, y: -49.82352828979492 },
    { x: 245.17091369628906, y: -54.823482513427734 },
    { x: 245.66558837890625, y: -59.79412841796875 },
    { x: 246.90951538085938, y: -64.63170623779297 },
    { x: 248.8917694091797, y: -69.21640014648438 },
    { x: 251.58175659179688, y: -73.42443084716797 },
    { x: 254.9319305419922, y: -77.12803649902344 },
    { x: 258.8729248046875, y: -80.19418334960938 },
    { x: 263.3063049316406, y: -82.48992919921875 },
    { x: 268.0954895019531, y: -83.89874267578125 },
    { x: 273.0670166015625, y: -84.3490982055664 },
    { x: 278.0316162109375, y: -83.82708740234375 },
    { x: 282.80023193359375, y: -82.34967041015625 },
    { x: 287.2014465332031, y: -79.99280548095703 },
    { x: 291.1019592285156, y: -76.87492370605469 },
    { x: 294.4053649902344, y: -73.1297607421875 },
    { x: 297.044677734375, y: -68.88947296142578 },
    { x: 298.9732666015625, y: -64.28205108642578 },
    { x: 300.1620178222656, y: -59.43071746826172 },
    { x: 300.6015625, y: -54.454795837402344 },
    { x: 300.604736328125, y: -49.454994201660156 },
    { x: 300.604736328125, y: -44.454994201660156 },
    { x: 300.604736328125, y: -39.454994201660156 },
    { x: 300.62103271484375, y: -34.455101013183594 },
    { x: 301.25750732421875, y: -29.50330352783203 },
    { x: 302.8203125, y: -24.761978149414062 },
    { x: 305.27960205078125, y: -20.41815757751465 },
    { x: 308.57073974609375, y: -16.666460037231445 },
    { x: 312.5902404785156, y: -13.709973335266113 },
    { x: 317.1771240234375, y: -11.750056266784668 },
    { x: 322.098876953125, y: -10.94089126586914 },
    { x: 327.0986328125, y: -10.923019409179688 },
    { x: 332.0986328125, y: -10.923019409179688 },
    { x: 337.0986328125, y: -10.923019409179688 },
    { x: 342.0986328125, y: -10.923019409179688 },
    { x: 347.0986328125, y: -10.923019409179688 },
    { x: 352.0986328125, y: -10.923019409179688 },
    { x: 357.0986328125, y: -10.923019409179688 },
    { x: 362.0986328125, y: -10.923019409179688 },
    { x: 367.0986328125, y: -10.923019409179688 },
    { x: 372.0986328125, y: -10.923019409179688 },
    { x: 377.0986328125, y: -10.923019409179688 },
    { x: 382.0986328125, y: -10.923019409179688 },
    { x: 387.0986328125, y: -10.923019409179688 },
    { x: 392.0986328125, y: -10.923019409179688 },
    { x: 397.0986328125, y: -10.923019409179688 },
];



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    try {
        console.log = function () { };
    }
    catch (error) {
    }
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map