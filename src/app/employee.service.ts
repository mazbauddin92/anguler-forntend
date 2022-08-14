import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'http://localhost:8080/api/employee';

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(this.url);
  }

  seveEmployee(emp) {
    return this.http.post(this.url, emp)
    // console.warn(emp)
  }

  deleteEmployee(id) {
    // console.warn(this.url+'/'+id)
    return this.http.delete(this.url + '/' + id)
  }
  getEmployeeById(id) {
    return this.http.get(this.url + '/' + id)
  }
  updateEmployee(id, emp) {
    return this.http.put(this.url + '/' + id, emp)
  }
}
