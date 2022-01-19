import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL: string = "http://localhost:3000/api/users";
  constructor(private httpClient: HttpClient) { }

  getProfile(id) {
    return this.httpClient.get<{ result: any }>(`${this.userURL}/${id}`);
  }

  signup(userObj) {
    return this.httpClient.post<{ result: any }>(`${this.userURL}/signup`, userObj);
  }

  editProfile(obj) {
    return this.httpClient.put<{ result: any }>(`${this.userURL}/${obj._id}`, obj);
  }

  login(userObj) {
    return this.httpClient.post<{ res: any, user: any }>(`${this.userURL}/login`, userObj);
  }

  displayAllUsers() {
    return this.httpClient.get<{ result: any }>(this.userURL);
  }

  deleteUser(id) {
    return this.httpClient.delete<{ result: any }>(`${this.userURL}/${id}`)
  }
}
