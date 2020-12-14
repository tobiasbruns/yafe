import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPlayerContainerComponent } from './form-player-container.component';

describe('FormPlayerContainerComponent', () => {
  let component: FormPlayerContainerComponent;
  let fixture: ComponentFixture<FormPlayerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPlayerContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPlayerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
