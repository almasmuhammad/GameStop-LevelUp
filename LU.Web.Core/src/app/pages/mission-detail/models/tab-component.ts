import { Output, EventEmitter } from '@angular/core';

export class TabComponent {

  @Output() onNextStep: EventEmitter<any> = new EventEmitter();
  @Output() onPreviousStep: EventEmitter<any> = new EventEmitter();

  onContinue() {
    this.onNextStep.emit();
  }
  onPrevious() {
    this.onPreviousStep.emit();
  }
}