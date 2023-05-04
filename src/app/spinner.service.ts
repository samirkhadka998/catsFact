import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() { }

  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  
  get isLoading$ (){
    return this.isLoadingSubject.asObservable();
  }

  show(){
    this.isLoadingSubject.next(true);
  }

  hide(){
      this.isLoadingSubject.next(false)
  }
}


