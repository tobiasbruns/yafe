import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { YafeFieldDefinition, FormFieldComponent, isEmpty } from '@yafe-forms/core';


@Component({
	selector: 'yafe-forms-text-input',
	templateUrl: './text-input.component.html',
	styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements FormFieldComponent {

	@Input() definition: YafeFieldDefinition;
	@Input() formControl: AbstractControl = new FormControl();

	marked: boolean = false;

	constructor(public changeDetector: ChangeDetectorRef) { }

	isRequired(): boolean {
		return !isEmpty(this.definition.validators) &&
			this.definition.validators.filter(validationDef => (validationDef.type === 'BuildIn') && (validationDef.name === 'required')).length > 0;
	}

	mark(event): void {

		this.marked = !this.marked;
		console.log('klick: ' + this.marked);
	}
}
