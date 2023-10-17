import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingSocmedIconsComponent } from './floating-socmed-icons.component';

describe('FloatingSocmedIconsComponent', () => {
  let component: FloatingSocmedIconsComponent;
  let fixture: ComponentFixture<FloatingSocmedIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingSocmedIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingSocmedIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
