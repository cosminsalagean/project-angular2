import { Component, OnInit } from '@angular/core';

import { DepartmentService }       from './department.service';

@Component({
    templateUrl: 'app/departments/departments.component.html'
})
export class DepartmentsComponent implements OnInit {
    users: any[];
    
    constructor(private _service: DepartmentService){
	}

	ngOnInit(){
		this._service.getDepartments()
			.subscribe(users => this.users = users);
	}
    
    deleteUser(department){
		if (confirm("Are you sure you want to delete " + department.name + "?")) {
			var index = this.users.indexOf(department)
			// Here, with the splice method, we remove 1 object
            // at the given index.
            this.users.splice(index, 1);

			this._service.deleteDepartment(department.id)
				.subscribe(null, 
					err => {
						alert("Could not delete the user.");
                        // Revert the view back to its original state
                        // by putting the user object at the index
                        // it used to be.
						this.users.splice(index, 0, department);
					});
		}
	}
}