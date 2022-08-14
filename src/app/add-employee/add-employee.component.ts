import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms"
import { EmployeeService } from '../employee.service'

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  alert = false;
  addemployee = new FormGroup({
    name: new FormControl(''),
    gender: new FormControl(''),
    department: new FormControl(''),
    city: new FormControl('')
    // name : new FormControl(''),
  })

  constructor(private empService: EmployeeService) { }

  ngOnInit(): void {
  }
  getEmpFormVal() {
    this.empService.seveEmployee(this.addemployee.value).subscribe((res) => {
      // console.warn(res)
      this.alert = true;
      this.addemployee.reset({})
    });
    // console.warn(this.addemployee.value);
  }
  closealert() {
    this.alert = false;
  }

}
