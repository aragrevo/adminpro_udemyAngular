import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    this.subscription = this.returnObservable().pipe(
      retry(2)
    )
      .subscribe(
        resp => console.log('Subs', resp),
        error => console.error('Error obs', error),
        () => console.log('El observador terminó!')
      );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('Salió de la página');
    this.subscription.unsubscribe();
  }

  returnObservable(): Observable<number> {
    return new Observable((observer: Subscriber<number>) => {
      let counter = 0;

      const interval = setInterval(() => {
        counter++;
        observer.next(counter);

        // if (counter === 3) {
        //   clearInterval(interval);
        //   observer.complete();
        // }

        // if (counter === 2) {
        //   // clearInterval(interval);
        //   observer.error('Auxilio!!');
        // }

      }, 1000);
    });
  }

}
