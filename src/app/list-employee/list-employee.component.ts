import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  employees: any = [];
  constructor(private employee: EmployeeService) { }

  ngOnInit(): void {
    this.employee.getEmployees().subscribe((response) => {

      // console.warn(response);
      this.employees = response;
    })
  }
  deleteEmployee(id) {
    this.employees.splice(id - 1, 1);
    this.employee.deleteEmployee(id).subscribe((response) => {
      // console.warn(response);
    });
  }

  updateEmployee(id) {
    console.warn("id------" + id)
  }



}
