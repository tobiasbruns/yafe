import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { FormFieldComponent, YafeFieldDefinition } from '@yafe-forms/core';

@Component({
	selector: 'yafe-forms-checkbox',
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements FormFieldComponent {

	definition: YafeFieldDefinition;
	formControl: AbstractControl = new FormControl();

	constructor() { }


}
