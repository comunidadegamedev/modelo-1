import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeNoMarginComponent } from './welcome-no-margin.component';

describe('WelcomeNoMarginComponent', () => {
  let component: WelcomeNoMarginComponent;
  let fixture: ComponentFixture<WelcomeNoMarginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeNoMarginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeNoMarginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
