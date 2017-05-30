import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertifiedSectionComponent } from './certified-section.component';

describe('CertifiedSectionComponent', () => {
  let component: CertifiedSectionComponent;
  let fixture: ComponentFixture<CertifiedSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertifiedSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertifiedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
