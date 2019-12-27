import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  progressBlue: number = 20;
  progressGreen: number = 30;

  constructor() { }

  ngOnInit() {
  }

}
