import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'yafe-forms-form-field',
	templateUrl: './form-field.component.html',
	styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent {

	@Input() label: string;

	constructor() { }


}
