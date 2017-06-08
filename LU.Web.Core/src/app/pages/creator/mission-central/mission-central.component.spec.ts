import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionCentralComponent } from './mission-central.component';

describe('MissionCentralComponent', () => {
  let component: MissionCentralComponent;
  let fixture: ComponentFixture<MissionCentralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionCentralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
