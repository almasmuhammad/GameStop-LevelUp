import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleLoadingIndicatorComponent } from './module-loading-indicator.component';

describe('ModuleLoadingIndicatorComponent', () => {
  let component: ModuleLoadingIndicatorComponent;
  let fixture: ComponentFixture<ModuleLoadingIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleLoadingIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleLoadingIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
