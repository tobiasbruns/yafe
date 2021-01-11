import { AbstractControl } from '@angular/forms';

export interface YafeFormDefinition {
	name: string;
	title: string;
	groups: YafeFormGroup[];
}

export interface YafeFormItem {
	itemType: 'section' | 'field';
	name: string;
	condition?: string;
}

export interface YafeFormGroup extends YafeFormItem {
	title?: string;
	items: YafeFormItem[];
}

export interface YafeFieldDefinition extends YafeFormItem {
	type: 'text' | 'select' | 'checkbox';
	subType?: string;
	label: string;
	defaultValue?: string | number | boolean;
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

export interface FormSectionComponent {
	definition: YafeFormGroup;

}
