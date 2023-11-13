import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionerComponent } from './positioner.component';

describe('PositionerComponent', () => {
  let component: PositionerComponent;
  let fixture: ComponentFixture<PositionerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PositionerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PositionerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
