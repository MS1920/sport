import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  // backend address
  matchURL: string = "http://localhost:3000/api/matches";
  // define httpClient instance
  constructor(private httpClient: HttpClient) { }

  sendReqToAddMatch(matchObj) {
    return this.httpClient.post<{ result: any }>(this.matchURL, matchObj);
  }

  sendReqToGetAllMatches() {
    return this.httpClient.get<{ result: any }>(this.matchURL);
  }

  sendReqToGetMatchById(id) {
    return this.httpClient.get<{ result: any }>(`${this.matchURL}/${id}`);
  }

  sendReqToDeleteMatchById(id) {
    return this.httpClient.delete<{ result: any }>(`${this.matchURL}/${id}`);
  }

  sendReqToEditMatch(obj) {
    return this.httpClient.put<{ result: any }>(`${this.matchURL}/${obj._id}`, obj);
  }

  sendReqToSearchMatches(obj) {
    return this.httpClient.get<{ result: any }>(`${this.matchURL}/search/${obj.teamOne}`);
  }
}
