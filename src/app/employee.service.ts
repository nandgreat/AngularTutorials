import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {"id": 1, "name": "Andrew", "age": 30},
      {"id": 2, "name": "Brandon", "age": 21},
      {"id": 3, "name": "Angirmene", "age": 25},
      {"id": 4, "name": "Elena", "age": 29},
    ];
  }
}
