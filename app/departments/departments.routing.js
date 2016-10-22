System.register(['@angular/router', './department-form.component', './department-employees.component', './departments.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, department_form_component_1, department_employees_component_1, departments_component_1;
    var departmentsRouting;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (department_form_component_1_1) {
                department_form_component_1 = department_form_component_1_1;
            },
            function (department_employees_component_1_1) {
                department_employees_component_1 = department_employees_component_1_1;
            },
            function (departments_component_1_1) {
                departments_component_1 = departments_component_1_1;
            }],
        execute: function() {
            exports_1("departmentsRouting", departmentsRouting = router_1.RouterModule.forChild([
                {
                    path: 'users/:id/employees',
                    component: department_employees_component_1.DepartmentEmployeesComponent
                },
                {
                    path: 'users/new',
                    component: department_form_component_1.DepartmentFormComponent,
                },
                {
                    path: 'departments',
                    component: departments_component_1.DepartmentsComponent
                }
            ]));
        }
    }
});
//# sourceMappingURL=departments.routing.js.map