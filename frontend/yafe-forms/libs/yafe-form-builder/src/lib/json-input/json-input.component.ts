import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Schema, Validator, ValidatorResult } from 'jsonschema';
import { FormDefinitionService, YafeFormDefinition } from '@yafe-forms/core';

@Component({
	selector: 'yafe-forms-json-input',
	templateUrl: './json-input.component.html',
	styleUrls: ['./json-input.component.scss']
})
export class JsonInputComponent implements OnChanges {

	@Input() formDefinition: YafeFormDefinition;
	@Output() formDefinitionChanged: EventEmitter<YafeFormDefinition> = new EventEmitter<YafeFormDefinition>();

	public currentInput: String = "{}";
	public parserError: String;
	public currentJson: String = this.currentInput;

	readonly validator = new Validator();

	constructor() { }

	public ngOnChanges() {
		this.currentInput = JSON.stringify(this.formDefinition, null, 5);
	}

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
