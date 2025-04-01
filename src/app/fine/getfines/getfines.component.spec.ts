import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetfinesComponent } from './getfines.component';

describe('GetfinesComponent', () => {
  let component: GetfinesComponent;
  let fixture: ComponentFixture<GetfinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetfinesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetfinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
