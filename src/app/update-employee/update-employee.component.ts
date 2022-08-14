import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms"
import { EmployeeService } from '../employee.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  alert = false;
  updateemployee = new FormGroup({
    name: new FormControl(''),
    gender: new FormControl(''),
    department: new FormControl(''),
    city: new FormControl('')
    // name : new FormControl(''),
  })

  constructor(private router: ActivatedRoute, private empService: EmployeeService) { }

  ngOnInit(): void {
    this.empService.getEmployeeById(this.router.snapshot.params.id).
      subscribe((response) => {
        this.updateemployee = new FormGroup({
          name: new FormControl(response['name']),
          gender: new FormControl(response['gender']),
          department: new FormControl(response['department']),
          city: new FormControl(response['city'])
        })
      })
  }

  getEmpFormVal() {
    this.updateemployee.value;
    this.empService.updateEmployee(this.router.snapshot.params.id, this.updateemployee.value)
      .subscribe((response) => {
        // console.warn(response)
        this.alert = true
      })
  }
  closealert() {
    this.alert = false
  }
}
