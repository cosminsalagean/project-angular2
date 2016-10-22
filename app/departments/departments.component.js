System.register(['@angular/core', './department.service'], function(exports_1, context_1) {
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
    var core_1, department_service_1;
    var DepartmentsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (department_service_1_1) {
                department_service_1 = department_service_1_1;
            }],
        execute: function() {
            DepartmentsComponent = (function () {
                function DepartmentsComponent(_service) {
                    this._service = _service;
                }
                DepartmentsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._service.getDepartments()
                        .subscribe(function (users) { return _this.users = users; });
                };
                DepartmentsComponent.prototype.deleteUser = function (department) {
                    var _this = this;
                    if (confirm("Are you sure you want to delete " + department.name + "?")) {
                        var index = this.users.indexOf(department);
                        // Here, with the splice method, we remove 1 object
                        // at the given index.
                        this.users.splice(index, 1);
                        this._service.deleteDepartment(department.id)
                            .subscribe(null, function (err) {
                            alert("Could not delete the user.");
                            // Revert the view back to its original state
                            // by putting the user object at the index
                            // it used to be.
                            _this.users.splice(index, 0, department);
                        });
                    }
                };
                DepartmentsComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/departments/departments.component.html'
                    }), 
                    __metadata('design:paramtypes', [department_service_1.DepartmentService])
                ], DepartmentsComponent);
                return DepartmentsComponent;
            }());
            exports_1("DepartmentsComponent", DepartmentsComponent);
        }
    }
});
//# sourceMappingURL=departments.component.js.map