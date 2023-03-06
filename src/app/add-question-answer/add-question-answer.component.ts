import { Component, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NgbdModalContent } from '../components/modal/modal.component';
import { QuizService } from './quiz.service';
@Component({
  selector: 'app-add-question-answer',
  templateUrl: './add-question-answer.component.html',
  styleUrls: ['./add-question-answer.component.css'],
})
export class AddQuestionAnswerComponent {
  addForm = true;
  quizForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal,
    private router: Router,
    private quizService: QuizService
  ) {}

  ngOnInit() {
    this.quizForm = this.fb.group({
      questions: this.fb.array([]),
    });
  }

  questions(): FormArray {
    return this.quizForm.get('questions') as FormArray;
  }

  newQuestion(questionType): FormGroup {
    return this.fb.group({
      question: '',
      answers: this.fb.array([]),
      answer: '',
      questionType,
    });
  }

  addQuestion() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.questionType.subscribe((questionType) => {
      this.questions().push(this.newQuestion(questionType));
    });
  }

  answers(itemIndex: number): FormArray {
    return this.questions().at(itemIndex).get('answers') as FormArray;
  }

  newAnswer(): FormGroup {
    return this.fb.group({
      answer: '',
    });
  }

  addQuestionAnswer(itemIndex: number) {
    this.answers(itemIndex).push(this.newAnswer());
  }

  removeQuestionAnswer(itemIndex: number, answerIndex: number) {
    this.answers(itemIndex).removeAt(answerIndex);
  }
  onSubmit() {
    this.quizForm.value;
    this.addForm = false;
  }
  onPreviewAnswer() {
    this.quizService.addQuiz(this.quizForm.value.questions);
   // localStorage.setItem('quiz-data', JSON.stringify(this.quizForm.value));

    this.router.navigate(['/review-answer']);
  }
}
