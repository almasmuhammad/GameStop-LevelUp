import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarSectionComponent } from './avatar-section.component';

describe('AvatarSectionComponent', () => {
  let component: AvatarSectionComponent;
  let fixture: ComponentFixture<AvatarSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
