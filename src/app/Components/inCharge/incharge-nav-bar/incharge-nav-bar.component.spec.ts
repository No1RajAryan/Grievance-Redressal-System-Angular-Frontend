import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InchargeNavBarComponent } from './incharge-nav-bar.component';

describe('InchargeNavBarComponent', () => {
  let component: InchargeNavBarComponent;
  let fixture: ComponentFixture<InchargeNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InchargeNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InchargeNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
