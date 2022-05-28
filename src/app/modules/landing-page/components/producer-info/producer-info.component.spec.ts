import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerInfoComponent } from './producer-info.component';

describe('ProducerInfoComponent', () => {
  let component: ProducerInfoComponent;
  let fixture: ComponentFixture<ProducerInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducerInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
