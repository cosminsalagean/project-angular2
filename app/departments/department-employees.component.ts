import { Component, OnInit }                     from '@angular/core';
import { Router, ActivatedRoute }                from '@angular/router';
import { DepartmentService }                           from './department.service';

@Component({
    templateUrl: 'app/departments/department-employees.component.html'
})
export class DepartmentEmployeesComponent implements OnInit {
    employees: any[];
    departmentId: number;
    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _departmentService: DepartmentService
    ) {
    }

    ngOnInit(){
        var id = this._route.params.subscribe(params => {
            var id = +params["id"];
            if (!id)
                return;
            this.departmentId = id;

            this._departmentService.getEmployees()
                .subscribe(
                    employees => {
                        this.employees = employees.filter(employee => {
                            return employee['departmentId'] == id;
                        });
                    },
                    response => {
                        console.log(this.employees);
                        if (response.status == 404) {
                            this._router.navigate(['NotFound']);
                        }
                    });
                 });
            }
        }