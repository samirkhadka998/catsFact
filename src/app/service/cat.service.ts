import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CatApi } from "../../environment/environment";
import { cat } from "../model/cat/cat";
@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  getCatFact(){
    return this.http.get<cat>(CatApi);
  }
}
