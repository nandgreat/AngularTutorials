import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
      Welcome {{name}}
  </h2>
  <input [id]="myId" type="text" value="Nandom">
  <input [disabled]="isDisabled" id="{{myId}}" type="text" value="Nandom">




  `,
  styles: [`
    div {
      color: red;
    }
  `]
})
export class TestComponent implements OnInit {

public name = "Angirmene";
public myId = "testId";
public isDisabled = false;
public siteUrl = window.location.href;

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
