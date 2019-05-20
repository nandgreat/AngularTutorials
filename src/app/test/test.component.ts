import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <!--
  <h2>
      Welcome to my Angular World 
  </h2>
  <h3 *ngIf="displayName; else elseBlock">
    Structural Directives
  </h3>
  <ng-template #elseBlock>
    <h3>
      Name is hidden
    </h3>
  <ng-template>
  -->

  <div *ngIf="displayName; then thenBlock; else myElseBlock"></div>

  <ng-template #thenBlock>
    <h3>Nigerian Revolution</h3>
  </ng-template>
    
  <ng-template #myElseBlock>
    <h3>Hidden</h3>
  </ng-template>
  
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public displayName = false;

  constructor() { }

  ngOnInit() {
  }

  logMessage(value) {
    console.log(value);
  }

}
