import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAwardCountComponent } from './user-award-count.component';

describe('UserAwardCountComponent', () => {
  let component: UserAwardCountComponent;
  let fixture: ComponentFixture<UserAwardCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAwardCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAwardCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
