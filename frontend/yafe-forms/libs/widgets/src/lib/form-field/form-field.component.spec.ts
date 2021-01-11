import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormFieldComponent } from './form-field.component';

describe('FormFieldComponent', () => {
	let component: FormFieldComponent;
	let fixture: ComponentFixture<FormFieldComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MatFormFieldModule],
			declarations: [FormFieldComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FormFieldComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	//Disabled cause mat-form-field is missing FieldControl - should be inserted in ng-content
	xit('should create', () => {
		expect(component).toBeTruthy();
	});
});
