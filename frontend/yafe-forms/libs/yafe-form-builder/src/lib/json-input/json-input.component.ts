import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Schema, Validator, ValidatorResult } from 'jsonschema';
import { FormDefinitionService, YafeFormDefinition } from '@yafe-forms/core';
import { EditableGroupDefinition } from '../yafe-builder/builder-preview/builder-preview.component';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'yafe-forms-json-input',
	templateUrl: './json-input.component.html',
	styleUrls: ['./json-input.component.scss']
})
export class JsonInputComponent implements OnChanges {

	@Input() formDefinition: EditableGroupDefinition;
	@Output() formDefinitionChange: EventEmitter<YafeFormDefinition> = new EventEmitter<YafeFormDefinition>();

	readonly innerControl = new FormControl();

	public currentInput: String = "{}";
	public parserError: String;
	public currentJson: String = this.currentInput;

	readonly validator = new Validator();

	constructor() {
		this.innerControl.valueChanges.subscribe(() => this.validateJsonInput())
	}

	public ngOnChanges() {
		// this.currentInput = JSON.stringify(this.formDefinition, null, 5);
		this.setInnerValue(this.formDefinition.formControl.value);
		this.formDefinition.formControl.valueChanges.subscribe(val => this.setInnerValue(val));
	}

	private setInnerValue(val: string): void {
		if (this.innerControl.value !== val) this.innerControl.setValue(val, { emitEvent: false });
	}

	private validateJsonInput() {

		try {
			const parsed = JSON.parse(this.innerControl.value);
			this.currentJson = this.currentInput;
			this.parserError = null;
			// this.formDefinitionChange.emit(parsed);
			console.log('valid');
			this.formDefinition.formControl.setValue(this.innerControl.value);
		} catch (e) {
			console.log('invalid: ' + e.message);
			this.parserError = e.message;

		}
	}

}
