import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReviewAnswersComponent } from './review-answers/review-answers.component';
import { AddQuestionAnswerComponent } from './add-question-answer/add-question-answer.component';
import { QuizService } from './add-question-answer/quiz.service';
@NgModule({
  declarations: [AppComponent, ReviewAnswersComponent, AddQuestionAnswerComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [QuizService],
  bootstrap: [AppComponent],
})
export class AppModule {}
