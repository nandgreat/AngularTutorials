import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `

    <div *ngFor="let color of colors; first as f"><!-- index as i, odd as o, last as l, even as e -->
      <h2 [style.color]=color>{{f}}:&nbsp;{{color}}</h2>
    </div>

  
  `,
  styles: []
})
export class TestComponent implements OnInit {

  public colors = ["purple","blue", "green", "red"];


  constructor() { }

  ngOnInit() {
  }

  logMessage(value) {
    console.log(value);
  }

}
