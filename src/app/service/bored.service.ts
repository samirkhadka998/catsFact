import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";
import { boardApi } from "../../environment/environment";
import {  bore} from "../model/bore/bore";
@Injectable({
  providedIn: 'root'
})
export class BoredService {

  constructor(private http : HttpClient) { }

  getActivity(){
    return this.http.get<bore>(boardApi);
  }
}
