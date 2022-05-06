import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }

  //Grabs api from Guardians of the galaxy vol 2
  GetDataGOG():Observable<any>{
    return this.httpClient.get('http://www.omdbapi.com/?i=tt3896198&apikey=a2a07af9');
  }

   //Grabs api from Back To The Future
  GetDataBtFuture():Observable<any>{
    return this.httpClient.get('https://www.omdbapi.com/?t=back+to+the+future&apikey=a2a07af9');
  }

   //Grabs api from Lord of the rings
  GetDataLordOfRings():Observable<any>{
    return this.httpClient.get('https://www.omdbapi.com/?t=Lord+of+the+rings&apikey=a2a07af9');
  }

   //Grabs api from BladeRunner
  GetDataBladeRunner():Observable<any>{
    return this.httpClient.get('https://www.omdbapi.com/?t=blade+runner&apikey=a2a07af9');
  }
}
