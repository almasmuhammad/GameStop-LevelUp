import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpCategoriesComponent } from './xp-categories.component';

describe('XpCategoriesComponent', () => {
  let component: XpCategoriesComponent;
  let fixture: ComponentFixture<XpCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
