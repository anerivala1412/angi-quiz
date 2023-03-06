import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizService {
  private readonly API_URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}
  async addQuiz(quizInfo) {
    return this.httpClient
      .post(`${this.API_URL}add-question`, quizInfo)
      .subscribe((item) => {
        return item;
      });
  }
  getQuiz() {
    return this.httpClient.get(`${this.API_URL}`);
  }
}
