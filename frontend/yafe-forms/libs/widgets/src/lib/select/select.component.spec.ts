import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SelectComponent } from './select.component';

describe('SelectComponent', () => {
	let component: SelectComponent;
	let fixture: ComponentFixture<SelectComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, NoopAnimationsModule],
			declarations: [SelectComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SelectComponent);
		component = fixture.componentInstance;
		component.definition = { type: 'select', name: 'test', label: 'test', validators: [], properties: [{ selectValues: [] }] };
		component.formControl = new FormControl();
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
