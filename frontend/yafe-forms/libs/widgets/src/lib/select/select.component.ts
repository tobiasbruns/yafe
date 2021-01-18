import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { FormFieldComponent, YafeFieldDefinition } from '@yafe-forms/core';

@Component({
	selector: 'yafe-forms-select',
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.scss']
})
export class SelectComponent implements FormFieldComponent {

	definition: YafeFieldDefinition;
	formControl: AbstractControl = new FormControl();

	constructor() { }

}
