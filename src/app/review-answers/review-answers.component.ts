import { Component, OnInit } from '@angular/core';
import { QuizService } from '../add-question-answer/quiz.service';

@Component({
  selector: 'app-review-answers',
  templateUrl: './review-answers.component.html',
  styleUrls: ['./review-answers.component.css'],
})
export class ReviewAnswersComponent implements OnInit {
  constructor(private quizService: QuizService) {}
  questionsAnswers: any = [];
  ngOnInit(): void {
    this.questionsAnswers = this.quizService
      .getQuiz()
      .subscribe((apiResponse) => {
        this.questionsAnswers = apiResponse;
      });
  }
}
