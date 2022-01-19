import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherURL: string = "http://localhost:3000/api/weather"
  constructor(private httpClient: HttpClient) { }

  sendReqToGetWeatherByGet(city){
    return this.httpClient.get<{ result: any }>(`${this.weatherURL}/${JSON.stringify(city)}`)
  }

  sendReqToGetWeatherByPost(city){
    return this.httpClient.post<{ result: any }>(this.weatherURL, city)
  }
}
