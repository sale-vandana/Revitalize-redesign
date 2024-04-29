import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVComponent } from './add-v.component';

describe('AddVComponent', () => {
  let component: AddVComponent;
  let fixture: ComponentFixture<AddVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddVComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
