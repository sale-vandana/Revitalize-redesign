import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFComponent } from './manage-f.component';

describe('ManageFComponent', () => {
  let component: ManageFComponent;
  let fixture: ComponentFixture<ManageFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageFComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
