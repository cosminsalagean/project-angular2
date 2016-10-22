System.register(['@angular/core', '@angular/forms', '@angular/router', './department.service', './department'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, forms_1, router_1, department_service_1, department_1;
    var DepartmentFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (department_service_1_1) {
                department_service_1 = department_service_1_1;
            },
            function (department_1_1) {
                department_1 = department_1_1;
            }],
        execute: function() {
            DepartmentFormComponent = (function () {
                function DepartmentFormComponent(fb, _router, _route, _departmentService) {
                    this._router = _router;
                    this._route = _route;
                    this._departmentService = _departmentService;
                    this.user = new department_1.Department();
                    this.form = fb.group({
                        name: ['', forms_1.Validators.required],
                        description: ['', forms_1.Validators.required]
                    });
                }
                DepartmentFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._route.params.subscribe(function (params) {
                        var id = +params["id"];
                        _this.title = "New Department";
                        if (!id)
                            return;
                        _this._departmentService.getDepartment(id)
                            .subscribe(function (department) { return _this.user = department; }, function (response) {
                            if (response.status == 404) {
                                _this._router.navigate(['NotFound']);
                            }
                        });
                    });
                };
                DepartmentFormComponent.prototype.save = function () {
                    var _this = this;
                    var result = this._departmentService.addDepartment(this.user);
                    result.subscribe(function (x) {
                        // Ideally, here we'd want:
                        // this.form.markAsPristine();
                        _this._router.navigate(['departments']);
                    });
                };
                DepartmentFormComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/departments/department-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [forms_1.FormBuilder, router_1.Router, router_1.ActivatedRoute, department_service_1.DepartmentService])
                ], DepartmentFormComponent);
                return DepartmentFormComponent;
            }());
            exports_1("DepartmentFormComponent", DepartmentFormComponent);
        }
    }
});
//# sourceMappingURL=department-form.component.js.map