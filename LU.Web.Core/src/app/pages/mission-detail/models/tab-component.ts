import { Output, EventEmitter, Input } from '@angular/core';
import { MissionModel, MissionStateModel } from '../models';

export class TabComponent {
  @Input() model: MissionModel;
  @Input() busyState: MissionStateModel;

  // model and busy state


  @Output() onNextStep: EventEmitter<any> = new EventEmitter();
  @Output() onPreviousStep: EventEmitter<any> = new EventEmitter();

  onContinue(): void {
    this.onNextStep.emit();
  }
  onPrevious(): void {
    this.onPreviousStep.emit();
  }

  isValid(): boolean {
    return false;
  }
}