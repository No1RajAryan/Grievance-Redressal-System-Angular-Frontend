import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InChargetHomeComponent } from './in-charget-home.component';

describe('InChargetHomeComponent', () => {
  let component: InChargetHomeComponent;
  let fixture: ComponentFixture<InChargetHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InChargetHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InChargetHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
