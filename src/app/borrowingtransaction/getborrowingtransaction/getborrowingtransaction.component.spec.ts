import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetborrowingtransactionComponent } from './getborrowingtransaction.component';

describe('GetborrowingtransactionComponent', () => {
  let component: GetborrowingtransactionComponent;
  let fixture: ComponentFixture<GetborrowingtransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetborrowingtransactionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetborrowingtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
