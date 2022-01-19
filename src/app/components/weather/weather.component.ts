import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherForm:FormGroup
  bannerDetails: any;
  weatherObj: any;
  errorMsg: string;
  constructor(
    private formBuilder: FormBuilder,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    this.bannerDetails = { title: "Weather"}
    this.weatherForm = this.formBuilder.group({
      city: ["", [Validators.required]]
    })
  }

  weather(){
    this.weatherService.sendReqToGetWeatherByGet(this.weatherForm.value).subscribe((data) => {
      if (data.result == "404") {
        this.errorMsg = "Please verify city name"
        this.weatherObj = null
      } else {
        this.weatherObj = data.result
        this.errorMsg = null
      }
    })
    // this.weatherService.sendReqToGetWeatherByPost(this.weatherForm.value).subscribe((data) => {
    //   this.weatherObj = data.result
    // })
  }
}
