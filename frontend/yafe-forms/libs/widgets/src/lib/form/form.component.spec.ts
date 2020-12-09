import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FieldsService } from '@yafe-forms/core';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
	let component: FormComponent;
	let fixture: ComponentFixture<FormComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FormComponent],
			providers: [{
				provide: FieldsService,
				useValue: {}
			}]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FormComponent);
		component = fixture.componentInstance;
		component.formDefinition = { fields: [] }
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
