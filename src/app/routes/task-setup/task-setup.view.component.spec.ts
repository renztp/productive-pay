import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundsSetupViewComponent } from './task-setup.view.component';

describe('FundsSetupViewComponent', () => {
  let component: FundsSetupViewComponent;
  let fixture: ComponentFixture<FundsSetupViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundsSetupViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundsSetupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
