import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamURL: string = "http://localhost:3000/api/teams";
  constructor(private httpClient: HttpClient) { }

  sendReqToGetCountries() {
    return this.httpClient.get<{ result: any }>(`${this.teamURL}/countries`)
  }

  sendReqToAddTeam(teamObj, logo:File) {
    let formData = new FormData()
    formData.append('name', teamObj.name)
    formData.append('foundation', teamObj.foundation)
    formData.append('country', teamObj.country)
    formData.append('stadium', teamObj.stadium)
    formData.append('logo', logo)
    return this.httpClient.post<{ result: any }>(this.teamURL, formData);
  }

  sendReqToGetAllTeams() {
    return this.httpClient.get<({ result: any })>(this.teamURL);
  }

  sendReqToGetTeamById(id) {
    return this.httpClient.get<{ result: any }>(`${this.teamURL}/${id}`);
  }

  sendReqToDeleteTeamById(id) {
    return this.httpClient.delete<{ result: any }>(`${this.teamURL}/${id}`);
  }

  sendReqToEditTeam(obj, logo: File) {
    let formData = new FormData()
    formData.append('name', obj.name)
    formData.append('foundation', obj.foundation)
    formData.append('country', obj.country)
    formData.append('stadium', obj.stadium)
    formData.append('logo', logo)
    return this.httpClient.put<{ result: any }>(`${this.teamURL}/${obj._id}`, formData);
  }
}
