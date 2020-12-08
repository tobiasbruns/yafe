import { ChangeDetectorRef, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
	selector: 'yafe-forms-text-input',
	templateUrl: './text-input.component.html',
	styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent {
	@Input() subType: String = 'text';
	@Input() definition: any;
	@Input() formControl: AbstractControl;

	constructor(public changeDetector: ChangeDetectorRef) { }
}
