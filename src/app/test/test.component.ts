import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2>
      Welcome {{name}}
  </h2>

  <h2 class="text-success">Nigerian Revolution</h2>
  <h2 [class]="successClass">Nigerian Revolution</h2>
  
  <h2 [class]="successClass" class="text-special">Nigerian Revolution</h2>
  <h2 [class.text-danger]="hasError">Nigerian Revolution</h2>

  <h2 [ngClass]="messageClasses">Nigerian Revolution</h2>

  `,
  styles: [`
  .text-success{
    color: green;
  }
  .text-danger{
    color: red;
  }
  .text-special{
    font-style: italic;
  }
  `]
})
export class TestComponent implements OnInit {

  public name = "Angirmene";

  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }


  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Hello " + this.name;
  }

}
