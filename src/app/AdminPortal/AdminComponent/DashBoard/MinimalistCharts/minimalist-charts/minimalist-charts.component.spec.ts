import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalistChartsComponent } from './minimalist-charts.component';

describe('MinimalistChartsComponent', () => {
  let component: MinimalistChartsComponent;
  let fixture: ComponentFixture<MinimalistChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinimalistChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimalistChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
