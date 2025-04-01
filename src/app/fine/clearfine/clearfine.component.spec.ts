import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearfineComponent } from './clearfine.component';

describe('ClearfineComponent', () => {
  let component: ClearfineComponent;
  let fixture: ComponentFixture<ClearfineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClearfineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClearfineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
