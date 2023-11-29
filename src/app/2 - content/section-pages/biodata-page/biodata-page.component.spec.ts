import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiodataPageComponent } from './biodata-page.component';

describe('BiodataPageComponent', () => {
  let component: BiodataPageComponent;
  let fixture: ComponentFixture<BiodataPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiodataPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiodataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
