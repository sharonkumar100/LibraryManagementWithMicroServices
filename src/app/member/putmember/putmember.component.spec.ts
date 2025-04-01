import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutmemberComponent } from './putmember.component';

describe('PutmemberComponent', () => {
  let component: PutmemberComponent;
  let fixture: ComponentFixture<PutmemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PutmemberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
