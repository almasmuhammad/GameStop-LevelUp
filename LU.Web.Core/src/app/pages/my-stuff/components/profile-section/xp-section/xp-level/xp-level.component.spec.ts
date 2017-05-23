import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpLevelComponent } from './xp-level.component';

describe('XpLevelComponent', () => {
  let component: XpLevelComponent;
  let fixture: ComponentFixture<XpLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
