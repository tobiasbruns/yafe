import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { FieldsService } from '@yafe-forms/core';
import { FormComponent } from '../form/form.component';
import { FormSectionComponent } from './form-section.component';


describe('FormSectionComponent', () => {
	let component: FormSectionComponent;
	let fixture: ComponentFixture<FormSectionComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FormSectionComponent, FormComponent],
			providers: [
				{
					provide: FieldsService,
					useValue: {}
				}
			]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FormSectionComponent);
		component = fixture.componentInstance;
		component.definition = { title: 'test', name: 'test', itemType: 'section', items: [] }
		component.formGroup = new FormGroup({});
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
