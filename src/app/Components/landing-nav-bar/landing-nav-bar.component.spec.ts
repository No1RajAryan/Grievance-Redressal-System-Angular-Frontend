import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingNavBarComponent } from './landing-nav-bar.component';

describe('LandingNavBarComponent', () => {
  let component: LandingNavBarComponent;
  let fixture: ComponentFixture<LandingNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
