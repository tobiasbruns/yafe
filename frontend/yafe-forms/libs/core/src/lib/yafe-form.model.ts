import { AbstractControl, FormControl } from '@angular/forms';

export interface YafeFormDefinition {
	name: string;
	title: string;
	groups: YafeFormGroup[];
}

export interface YafeFormGroup {
	title: string;
	fields: YafeFieldDefinition[];
}

export interface YafeFieldDefinition {
	type: 'text' | 'select';
	subType?: string;
	name: string;
	label: string;
	tip?: string;
	description?: string;
	validators: YafeValidator[];
	properties?: [{ [name: string]: string | number | any }]
}

export interface YafeValidator {
	type: 'BuildIn';
	name: 'required';
	errorText?: string;
}



export interface FormFieldComponent {
	definition: YafeFieldDefinition;
	formControl: AbstractControl;
}
