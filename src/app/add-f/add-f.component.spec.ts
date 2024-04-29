import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFComponent } from './add-f.component';

describe('AddFComponent', () => {
  let component: AddFComponent;
  let fixture: ComponentFixture<AddFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddFComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
