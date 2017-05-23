import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockIconComponent } from './unlock-icon.component';

describe('UnlockIconComponent', () => {
  let component: UnlockIconComponent;
  let fixture: ComponentFixture<UnlockIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnlockIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnlockIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
