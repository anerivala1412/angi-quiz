import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Output, EventEmitter } from '@angular/core';
import { QUESTION_TYPE } from 'src/app/app.const';
@Component({
  selector: 'ngbd-modal-content',
  standalone: true,
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there Choose your question Type!</h4>
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      ></button>
    </div>
    <div class="modal-body">
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="questionType"
          id="flexRadioDefault1"
          value="Paragraph"
          ngModel
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Paragraph
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="questionType"
          id="flexRadioDefault2"
          value="CheckBox"
          checked
          ngModel
        />
        <label class="form-check-label" for="flexRadioDefault2">
          CheckBox
        </label>
      </div>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-outline-dark"
        (click)="addQuestionType()"
      >
        Done
      </button>
    </div>
  `,
})
export class NgbdModalContent {
  @Output() questionType = new EventEmitter<string>();

  constructor(public activeModal: NgbActiveModal) {}
  addQuestionType() {
    const para = QUESTION_TYPE.PARA;
    const checkBox = QUESTION_TYPE.CHECKBOX;
    let checkboxValue = (<HTMLInputElement>(
      document.getElementById('flexRadioDefault1')
    )).checked
      ? para
      : checkBox;
    this.questionType.emit(checkboxValue);
    this.activeModal.dismiss();
  }
}
