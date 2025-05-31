import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomableFolderIconComponent } from './customable-folder-icon.component';

describe('CustomableFolderIconComponent', () => {
  let component: CustomableFolderIconComponent;
  let fixture: ComponentFixture<CustomableFolderIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomableFolderIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomableFolderIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
