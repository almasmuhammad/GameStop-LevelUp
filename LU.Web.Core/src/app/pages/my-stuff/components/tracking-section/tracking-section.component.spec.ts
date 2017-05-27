import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingSectionComponent } from './tracking-section.component';

describe('TrackingSectionComponent', () => {
  let component: TrackingSectionComponent;
  let fixture: ComponentFixture<TrackingSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackingSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
