import { Component, OnInit }                     from '@angular/core';
import { FormBuilder, FormGroup, Validators }    from '@angular/forms';
import { Router, ActivatedRoute }                from '@angular/router';

import { DepartmentService }                     from './department.service';
import { Department }                            from './department';

@Component({
    templateUrl: 'app/departments/department-form.component.html'
})
export class DepartmentFormComponent implements OnInit {
	form: FormGroup;
    title: string;
    user = new Department();

	constructor(
        fb: FormBuilder,
        private _router: Router,
        private _route: ActivatedRoute,
        private _departmentService: DepartmentService
    ) {
		this.form = fb.group({
			name: ['', Validators.required],
			description: ['', Validators.required]
		});
	}
    
    ngOnInit(){
        var id = this._route.params.subscribe(params => {
            var id = +params["id"];

              this.title = "New Department";
        
        if (!id)
			return;
            
        this._departmentService.getDepartment(id)
			.subscribe(
                department => this.user = department,
                response => {
                    if (response.status == 404) {
                        this._router.navigate(['NotFound']);
                    }
                });
        });
    }
    
    save(){
        var result = this._departmentService.addDepartment(this.user)
            
		result.subscribe(x => {
            // Ideally, here we'd want:
            // this.form.markAsPristine();
            this._router.navigate(['departments']);
        });
	}
}