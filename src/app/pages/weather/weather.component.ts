import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OpenWeatherappService } from 'src/app/service/open-weatherapp.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  //cityName of the app
  city:string;

  //details
  details:any=null;

  constructor(
    private toast:ToastrService,
    private weather:OpenWeatherappService
  ) { }

  ngOnInit(): void {
  }

  resultOfThatCity()
  {
    this.weather.getWeather(this.city).subscribe((details:any)=>{
      this.details=details;
      this.toast.success("Your city weather details is");
    },(err:any)=>{
      console.log(err);
      return this.toast.error("Oops your api can't bee fetch");
    })
  }



}
