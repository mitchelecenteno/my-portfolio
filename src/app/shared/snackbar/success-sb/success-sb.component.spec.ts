import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessSbComponent } from './success-sb.component';

describe('SuccessSbComponent', () => {
  let component: SuccessSbComponent;
  let fixture: ComponentFixture<SuccessSbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuccessSbComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessSbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
