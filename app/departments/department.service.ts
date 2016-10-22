import { Injectable } from '@angular/core';
import { Http, Response }       from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DepartmentService {
	private _url = "http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/departments";
	private _employeesURL = "http://ebsexpress-env.us-west-2.elasticbeanstalk.com/users/employees";
	constructor(private _http: Http){
	}

	getDepartments(){
		return this._http.get(this._url)
			.map(res => res.json());
	}

	getEmployees() {
		return this._http.get(this._employeesURL)
             .map(res => res.json());
	}

    getDepartment(departmentId){
		return this._http.get(this.getDepartmentsUrl(departmentId))
			.map(res => res.json());
	}
    
    addDepartment(department){
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let body = JSON.stringify(department);
		let options = new RequestOptions({ headers: headers, method: "post" });
		return this._http.post(this._url, body, options)
			.map(res => res.json());
	}
    
    deleteDepartment(departmentId){
		return this._http.delete(this.getDepartmentsUrl(departmentId))
			.map(res => res.json());
	}
    
    private getDepartmentsUrl(departmentId){
		return this._url + "/" + departmentId;
	}
}