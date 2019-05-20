import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
      Welcome {{name}}
  </h2>
  <h2 [style.color]="hasError ? 'red' : 'green'">Style Binding</h2>
  <h2 [style.color]="highlightColor">Style Binding 2</h2>
  <h2 [ngStyle]="titleStyle">Style Binding 2</h2>


  `,
  styles: []
})
export class TestComponent implements OnInit {

  public name = "Angirmene";

  public successClass = "text-success";
  public hasError = true;

  public titleStyle = {
    color: "blue",
    fontStyle: "italic"
  }


  public highlightColor = 'orange';

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Hello " + this.name;
  }

}
