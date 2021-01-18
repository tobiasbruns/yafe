import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderPreviewComponent } from './builder-preview.component';

describe('BuilderPreviewComponent', () => {
  let component: BuilderPreviewComponent;
  let fixture: ComponentFixture<BuilderPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
