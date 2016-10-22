
import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule, 
         ReactiveFormsModule } from '@angular/forms';
import { RouterModule }        from '@angular/router';
import { HttpModule }          from '@angular/http';

import { DepartmentFormComponent }   from './department-form.component';
import { DepartmentEmployeesComponent }   from './department-employees.component';
import { DepartmentsComponent }      from './departments.component';
import { DepartmentService }         from './department.service';



@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        DepartmentFormComponent,
        DepartmentsComponent,
        DepartmentEmployeesComponent
    ],
    exports: [
        DepartmentFormComponent,
        DepartmentsComponent,
        DepartmentEmployeesComponent

    ],
    providers: [
        DepartmentService
    ]
})
export class DepartmentsModule {
}