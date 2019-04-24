import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterInChargeComponent } from './register-in-charge.component';

describe('RegisterInChargeComponent', () => {
  let component: RegisterInChargeComponent;
  let fixture: ComponentFixture<RegisterInChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterInChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterInChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
