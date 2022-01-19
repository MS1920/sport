import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  articleURL="http://localhost:3000/api/blogs"

  constructor(private httpClient: HttpClient) { }

  sendReqToAddArticle(obj, image: File) {
    let formData = new FormData();
    formData.append("title", obj.title)
    formData.append("date", obj.date)
    formData.append("description", obj.description)
    formData.append("image", image)
    return this.httpClient.post<{ result: any }>(this.articleURL, formData);
  }

  sendReqToGetAllArticles() {
    return this.httpClient.get<{ result: any }>(this.articleURL);
  }

  sendReqToGetArticleById(id) {
    return this.httpClient.get<{ result: any }>(`${this.articleURL}/${id}`);
  }

  sendReqToDeleteArticleById(id) {
    return this.httpClient.delete<{ result: any }>(`${this.articleURL}/${id}`);
  }

  sendReqToEditArticle(obj, image: File) {
    let formData = new FormData();
    formData.append("title", obj.title)
    formData.append("date", obj.date)
    formData.append("description", obj.description)
    formData.append("image", image)
    return this.httpClient.put<{ result: any }>(`${this.articleURL}/${obj._id}`, formData);
  }
}
