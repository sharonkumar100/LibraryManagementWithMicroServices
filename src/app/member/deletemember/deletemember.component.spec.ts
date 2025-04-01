import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletememberComponent } from './deletemember.component';

describe('DeletememberComponent', () => {
  let component: DeletememberComponent;
  let fixture: ComponentFixture<DeletememberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletememberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
