import { Component, OnInit } from '@angular/core';
import {CatService  } from "../service/cat.service";
import { finalize } from 'rxjs';
import {cat  } from "../model/cat/cat";
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent implements OnInit {
  catFact : cat = {} as cat; 
  constructor(private service : CatService, private dataService : DataService) {
    this.dataService.catButtonClicked$.subscribe(()=>{
      this.getCatFacts();
    })

  }
  ngOnInit(): void {
    
  }

  getCatFacts(){
    this.service.getCatFact().pipe(
      finalize(()=> {

      })
    ).subscribe({
      next : (response : any) => {
        this.catFact = response;
      },
      error: error => {
        alert(error);
      }
    });
  }

}
