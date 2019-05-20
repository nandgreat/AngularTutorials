import { Component, OnInit, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';


@Component({
  selector: 'app-test',
  template: `  
    <h2>{{name}}</h2>
    <h2>{{name | lowercase}}</h2>
    <h2>{{name | uppercase}}</h2>
    <h2>{{message | titlecase}}</h2>
    <h2>{{name | slice:3}}</h2>
    <h2>{{name | slice:3:5}}</h2>
    <h2>{{person | json}}

    <h2>{{5.678 | number:'1.2-3'}}</h2>
    <h2>{{5.678 | number:'3.4-5'}}</h2>
    <h2>{{5.678 | number:'3.1-2'}}</h2>

    <h2>{{0.25 | percent}}</h2>
    <h2>{{0.25 | currency}}</h2>
    <h2>{{0.25 | currency: 'EUR'}}</h2>

    <h2>{{date}}</h2>


  
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Nigerian Revolution";
  public message = "Welcome to Nigerian Revolution";

  public person = {
    "firstName": "John",
    "lastName": "Doe"
  }

  constructor() { }

  ngOnInit() {
  }

  

}
