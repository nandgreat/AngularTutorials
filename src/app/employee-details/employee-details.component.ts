import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-details',
  template: `
    <h2>Employee Details</h2>
    <ul *ngFor="let employee of employees">
      <li>{{employee.id}}. {{employee.name}} - {{employee.age}}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeDetailsComponent implements OnInit {

  public employees = [
    {"id": 1, "name": "Andrew", "age": 30},
    {"id": 2, "name": "Brandon", "age": 22},
    {"id": 3, "name": "Christina", "age": 25},
    {"id": 4, "name": "Elena", "age": 28},
  ];


  constructor() { }

  ngOnInit() {
  }

}
