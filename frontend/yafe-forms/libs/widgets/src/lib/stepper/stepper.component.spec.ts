import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperComponent } from './stepper.component';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsService } from '@yafe-forms/core';
import { FormComponent } from '../form/form.component';

describe('StepperComponent', () => {
	let component: StepperComponent;
	let fixture: ComponentFixture<StepperComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MatStepperModule, FormsModule, ReactiveFormsModule],
			declarations: [StepperComponent, FormComponent],
			providers: [{
				provide: FormsService,
				useValue: {}
			}]
		})
			.overrideModule(BrowserDynamicTestingModule, { set: { entryComponents: [FormComponent] } })
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(StepperComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
