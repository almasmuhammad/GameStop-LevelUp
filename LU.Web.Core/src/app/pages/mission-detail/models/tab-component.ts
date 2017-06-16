import { Output, EventEmitter, Input } from '@angular/core';
import { MissionModel, MissionStateModel } from '../models';

export class TabComponent {
  protected active = false;
  @Input() model: MissionModel;
  @Input() busyState: MissionStateModel;
  @Output() onNextStep: EventEmitter<any> = new EventEmitter();
  @Output() onPreviousStep: EventEmitter<any> = new EventEmitter();

  onContinue(): void {
    this.active = false;
    this.onNextStep.emit();
  }
  onPrevious(): void {
    this.active = false;
    this.onPreviousStep.emit();
  }

  isValid(): boolean {
    return false;
  }
}