import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnbookComponent } from './returnbook.component';

describe('ReturnbookComponent', () => {
  let component: ReturnbookComponent;
  let fixture: ComponentFixture<ReturnbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReturnbookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
