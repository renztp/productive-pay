import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSetupViewComponent } from './basic-setup.view.component';

describe('BasicSetupViewComponent', () => {
  let component: BasicSetupViewComponent;
  let fixture: ComponentFixture<BasicSetupViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicSetupViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicSetupViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
