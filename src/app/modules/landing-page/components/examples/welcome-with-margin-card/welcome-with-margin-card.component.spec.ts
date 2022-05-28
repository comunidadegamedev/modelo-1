import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeWithMarginCardComponent } from './welcome-with-margin-card.component';

describe('WelcomeWithMarginCardComponent', () => {
  let component: WelcomeWithMarginCardComponent;
  let fixture: ComponentFixture<WelcomeWithMarginCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeWithMarginCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeWithMarginCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
