import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private catButtonClickedSubject = new Subject<void>();
  private boreButtonClickedSubject = new Subject<void>();
  catButtonClicked$ = this.catButtonClickedSubject.asObservable();
  boreButtonClicked$ = this.boreButtonClickedSubject.asObservable();

  emitCatButtonClicked(){
    this.catButtonClickedSubject.next();
  }

  emitBoreButtonClicked(){
    this.boreButtonClickedSubject.next();
  }

  

}
