import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomableLogoComponent } from './customable-logo.component';

describe('CustomableLogoComponent', () => {
  let component: CustomableLogoComponent;
  let fixture: ComponentFixture<CustomableLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomableLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomableLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
