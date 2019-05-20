import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
      Welcome to my Angular World 
  </h2>
  <input [(ngModel)]="name" type="text">
  {{name}}

  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "";



  constructor() { }

  ngOnInit() {
  }

  logMessage(value){
    console.log(value);
  }

}
