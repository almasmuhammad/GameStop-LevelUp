import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpProgressbarComponent } from './xp-progressbar.component';

describe('XpProgressbarComponent', () => {
  let component: XpProgressbarComponent;
  let fixture: ComponentFixture<XpProgressbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpProgressbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
