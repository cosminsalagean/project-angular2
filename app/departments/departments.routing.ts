
import { RouterModule  }    		  from '@angular/router';

import { DepartmentFormComponent } 		  from './department-form.component';
import { DepartmentEmployeesComponent } 	  from './department-employees.component';
import { DepartmentsComponent }    		  from './departments.component';

export const departmentsRouting = RouterModule.forChild([
	{ 
		path: 'users/:id/employees',
		component: DepartmentEmployeesComponent
	},
	{ 
		path: 'users/new',
		component: DepartmentFormComponent,
	},
    {
        path: 'departments',
        component: DepartmentsComponent
    }
]);