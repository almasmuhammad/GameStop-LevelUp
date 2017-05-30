import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAwardSectionComponent } from './service-award-section.component';

describe('ServiceAwardSectionComponent', () => {
  let component: ServiceAwardSectionComponent;
  let fixture: ComponentFixture<ServiceAwardSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAwardSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAwardSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
