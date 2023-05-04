import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private catButtonClickedSubject = new Subject<void>();
  catButtonClicked$ = this.catButtonClickedSubject.asObservable();

  emitCatButtonClicked(){
    this.catButtonClickedSubject.next();
  }

  

}
