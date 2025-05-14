import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaLongCardComponent } from './cta-long-card.component';

describe('CtoLongCardComponent', () => {
  let component: CtaLongCardComponent;
  let fixture: ComponentFixture<CtaLongCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaLongCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaLongCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
