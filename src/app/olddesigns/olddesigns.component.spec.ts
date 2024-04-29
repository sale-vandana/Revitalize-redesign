import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OlddesignsComponent } from './olddesigns.component';

describe('OlddesignsComponent', () => {
  let component: OlddesignsComponent;
  let fixture: ComponentFixture<OlddesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OlddesignsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OlddesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
