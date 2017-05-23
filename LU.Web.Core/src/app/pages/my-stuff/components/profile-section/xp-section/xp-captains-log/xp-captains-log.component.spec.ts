import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpCaptainsLogComponent } from './xp-captains-log.component';

describe('XpCaptainsLogComponent', () => {
  let component: XpCaptainsLogComponent;
  let fixture: ComponentFixture<XpCaptainsLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpCaptainsLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpCaptainsLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
