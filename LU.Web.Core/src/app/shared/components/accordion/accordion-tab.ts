import {
  Component,
  Directive,
  Input,
  ViewEncapsulation,
  HostBinding,
  HostListener
} from '@angular/core';

import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

import { AccordionComponent } from './accordion';
import { coerceBooleanProperty } from './core';

@Directive({ selector: '[appAccordionHeader]' })
export class AccordionHeaderDirective { }

@Component({
  selector: 'app-accordion-tab',
  template: `
    <div class="app-accordion-header" (click)="_handleClick($event)">
      <span>{{header}}</span>
      <ng-content select="appAccordionHeader"></ng-content>
      <span class="app-accordion-header-icon"></span>
    </div>
    <div class="app-accordion-tab-body accordion-content" [@slide]="slide">
      <div class="app-accordion-tab-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./accordion.css'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('down => up', [
        style({ height: '*' }),
        animate(200, style({
          height: 0
        }))
      ]),
      transition('up => down', [
        style({ height: 0 }),
        animate(200, style({
          height: '*'
        }))
      ])
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class AccordionTabComponent {
@HostBinding('attr.role') role = 'accordion-tab';
@HostBinding('class.app-accordion-tab-active') tabActiveClass = true;
@HostBinding('class.app-accordion-tab-disabled') tabDisableClass = false;

  private isDisabled = false;
  private isActive = false;

  @Input() header: string;

  @Input()
  get active(): boolean { return this.isActive; }
  set active(value) {
    this.isActive = coerceBooleanProperty(value);

    this.tabActiveClass = this.isActive;

    if (this.isActive && !this._accordion.multiple) {
      for (let i = 0; i < this._accordion.tabs.length; i++) {
        if (this._accordion.tabs[i] !== this) {
          this._accordion.tabs[i].active = false;
        }
      }
    }
  }

  get slide(): string {
    return this.isActive ? 'down' : 'up';
  }

  @Input()
  get disabled(): boolean { return this.isDisabled; }
  set disabled(value) {
    this.isDisabled = coerceBooleanProperty(value);
    this.tabDisableClass = value;
}

  constructor(private _accordion: AccordionComponent) {
    this._accordion.addTab(this);
  }

  /**
   * Toggle the accordion
   * @param event
   * @return if it is disabled
   */
  _handleClick(event: Event) {
    if (this.disabled
    || this.active) { // remove this line if you want to close the active tab allowing for all tabs to be closed
      return;
    }

    const index = this.findTabIndex();

    if (this.active) {
      this.active = !this.active;
      this._accordion.close.emit({ originalEvent: event, index: index });
    } else if (!this._accordion.multiple) {
      for (let i = 0; i < this._accordion.tabs.length; i++) {
        this._accordion.tabs[i].active = false;
      }
      this.isActive = true;
      this.tabActiveClass = true;
      this._accordion.open.emit({ originalEvent: event, index: index });
    } else {
      this.isActive = true;
      this._accordion.open.emit({ originalEvent: event, index: index });
    }

    event.preventDefault();
  }

  /**
   * Find index of specific tab of accordion
   * @return index number of this tab
   */
  findTabIndex() {
    let index = -1;
    for (let i = 0; i < this._accordion.tabs.length; i++) {
      if (this._accordion.tabs[i] === this) {
        index = i;
        break;
      }
    }
    return index;
  }
}
