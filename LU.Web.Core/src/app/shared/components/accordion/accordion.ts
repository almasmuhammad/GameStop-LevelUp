import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { AccordionTabComponent } from './accordion-tab';
import { coerceBooleanProperty } from './core';

@Component({
  selector: 'app-accordion',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./accordion.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionComponent {

  private _multiple = false;

  @Input()
  get multiple(): boolean { return this._multiple; }
  set multiple(value) { this._multiple = coerceBooleanProperty(value); }

  @Output() close: EventEmitter<any> = new EventEmitter<any>();
  @Output() open: EventEmitter<any> = new EventEmitter<any>();

  tabs: AccordionTabComponent[] = [];

  /**
   * Add or append tab in accordion
   * @param tab object of Md2AccordionTab
   */
  addTab(tab: AccordionTabComponent) {
    this.tabs.push(tab);
  }
}
