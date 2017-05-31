import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastTrainedSectionComponent } from './last-trained-section.component';

describe('LastTrainedSectionComponent', () => {
  let component: LastTrainedSectionComponent;
  let fixture: ComponentFixture<LastTrainedSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastTrainedSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastTrainedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
