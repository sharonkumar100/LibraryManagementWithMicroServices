import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberpageComponent } from './memberpage.component';

describe('MemberpageComponent', () => {
  let component: MemberpageComponent;
  let fixture: ComponentFixture<MemberpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
