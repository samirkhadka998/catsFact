import { Component, OnInit } from '@angular/core';
import {  bore} from "../model/bore/bore";
import { BoredService } from "../service/bored.service";
import { finalize } from 'rxjs/internal/operators/finalize';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-bore',
  templateUrl: './bore.component.html',
  styleUrls: ['./bore.component.scss']
})
export class BoreComponent implements OnInit {
  /**
   *
   */
  bore : bore = {} as bore;
  constructor(private service : BoredService, private dataService : DataService) {
    this.dataService.boreButtonClicked$.subscribe(()=>{
      this.getBoredData();
    });
  }
  ngOnInit(): void {
    
  }

  getBoredData(){
    this.service.getActivity().pipe(
      finalize(()=>{

      })
    ).subscribe({
      next: (res:any) =>{
          this.bore = res;
      },
      error : error => {
        console.log(error);
      }
    });
  }

}
