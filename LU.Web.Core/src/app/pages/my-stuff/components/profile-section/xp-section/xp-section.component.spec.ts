import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpSectionComponent } from './xp-section.component';

describe('XpSectionComponent', () => {
  let component: XpSectionComponent;
  let fixture: ComponentFixture<XpSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
