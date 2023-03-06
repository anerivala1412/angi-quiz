import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddQuestionAnswerComponent } from './add-question-answer/add-question-answer.component';
import { ReviewAnswersComponent } from './review-answers/review-answers.component';

const routes: Routes = [
  { path: 'add-question', component: AddQuestionAnswerComponent },
  { path: 'review-answer', component: ReviewAnswersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
