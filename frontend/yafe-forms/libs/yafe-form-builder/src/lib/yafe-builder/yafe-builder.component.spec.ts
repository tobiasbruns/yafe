import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YafeBuilderComponent } from './yafe-builder.component';

describe('YafeBuilderComponent', () => {
  let component: YafeBuilderComponent;
  let fixture: ComponentFixture<YafeBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YafeBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YafeBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
