import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileAvatarComponent } from './my-profile-avatar.component';

describe('MyProfileAvatarComponent', () => {
  let component: MyProfileAvatarComponent;
  let fixture: ComponentFixture<MyProfileAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
