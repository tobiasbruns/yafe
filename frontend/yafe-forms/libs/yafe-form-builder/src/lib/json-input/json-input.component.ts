import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Schema, Validator, ValidatorResult } from 'jsonschema';

@Component({
	selector: 'yafe-forms-json-input',
	templateUrl: './json-input.component.html',
	styleUrls: ['./json-input.component.scss']
})
export class JsonInputComponent {

	@Output() formDefinitionChanged: EventEmitter<any> = new EventEmitter<any>();

	public currentInput: String = "{}";
	public parserError: String;
	public currentJson: String = this.currentInput;

	readonly validator = new Validator();

	constructor() { }


	public jsonInput() {

		try {
			const parsed = JSON.parse(this.currentInput.toString());
			this.currentJson = this.currentInput;
			this.parserError = null;
			this.formDefinitionChanged.emit(parsed);
		} catch (e) {
			this.parserError = e.message;

		}
	}

}
