System.register(['@angular/core', '@angular/router', './department.service'], function(exports_1, context_1) {
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
    var core_1, router_1, department_service_1;
    var DepartmentEmployeesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (department_service_1_1) {
                department_service_1 = department_service_1_1;
            }],
        execute: function() {
            DepartmentEmployeesComponent = (function () {
                function DepartmentEmployeesComponent(_router, _route, _departmentService) {
                    this._router = _router;
                    this._route = _route;
                    this._departmentService = _departmentService;
                }
                DepartmentEmployeesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = this._route.params.subscribe(function (params) {
                        var id = +params["id"];
                        if (!id)
                            return;
                        _this.departmentId = id;
                        _this._departmentService.getEmployees()
                            .subscribe(function (employees) {
                            _this.employees = employees.filter(function (employee) {
                                return employee['departmentId'] == id;
                            });
                        }, function (response) {
                            console.log(_this.employees);
                            if (response.status == 404) {
                                _this._router.navigate(['NotFound']);
                            }
                        });
                    });
                };
                DepartmentEmployeesComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/departments/department-employees.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, department_service_1.DepartmentService])
                ], DepartmentEmployeesComponent);
                return DepartmentEmployeesComponent;
            }());
            exports_1("DepartmentEmployeesComponent", DepartmentEmployeesComponent);
        }
    }
});
//# sourceMappingURL=department-employees.component.js.map