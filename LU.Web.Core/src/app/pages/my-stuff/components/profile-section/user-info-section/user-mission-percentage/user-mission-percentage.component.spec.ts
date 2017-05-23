import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMissionPercentageComponent } from './user-mission-percentage.component';

describe('UserMissionPercentageComponent', () => {
  let component: UserMissionPercentageComponent;
  let fixture: ComponentFixture<UserMissionPercentageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMissionPercentageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMissionPercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
