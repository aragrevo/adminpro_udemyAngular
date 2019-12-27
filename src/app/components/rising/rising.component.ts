import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-rising',
  templateUrl: './rising.component.html',
  styles: []
})
export class RisingComponent implements OnInit {

  @ViewChild('txtProgress', { static: true }) txtProgress: ElementRef;

  @Input() progress: number = 50;
  @Input() leyend: string = 'Leyenda';

  @Output() changedValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChange(newValue: number): void {
    newValue >= 100 ? this.progress = 100 : (newValue <= 0 ? this.progress = 0 : this.progress = newValue);
    this.txtProgress.nativeElement.value = this.progress;
    this.changedValue.emit(this.progress);
  }

  changeValue(valor: number): void {
    if ((this.progress >= 100 && valor > 0) || (this.progress <= 0 && valor < 0)) {
      return;
    }

    this.progress += valor;
    this.changedValue.emit(this.progress);
  }

}
