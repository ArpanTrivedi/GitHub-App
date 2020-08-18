import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherappService {


  //API_KEY of the app
  API_KEY:string="d2d1ffe8810c9c4f13ea78a6e7e4f362";
  url:string="http://api.openweathermap.org/data/2.5/weather?q=";
  constructor(private http:HttpClient) { }

  getWeather(city:string){
    console.table((this.url+city+"&appid="+this.API_KEY));
    return this.http.get((this.url+city+"&appid="+this.API_KEY));
  }
}
