import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVComponent } from './manage-v.component';

describe('ManageVComponent', () => {
  let component: ManageVComponent;
  let fixture: ComponentFixture<ManageVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageVComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
