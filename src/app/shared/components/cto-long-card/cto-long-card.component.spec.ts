import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtoLongCardComponent } from './cto-long-card.component';

describe('CtoLongCardComponent', () => {
  let component: CtoLongCardComponent;
  let fixture: ComponentFixture<CtoLongCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtoLongCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtoLongCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
