import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayallbooksComponent } from './displayallbooks.component';

describe('DisplayallbooksComponent', () => {
  let component: DisplayallbooksComponent;
  let fixture: ComponentFixture<DisplayallbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayallbooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayallbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
