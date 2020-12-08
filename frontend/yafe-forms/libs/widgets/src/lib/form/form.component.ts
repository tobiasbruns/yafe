import { AfterContentInit } from '@angular/core';
import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldsService } from '@yafe-forms/core';
import { TextInputComponent } from '../text-input/text-input.component';

@Component({
	selector: 'yafe-forms-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements AfterContentInit {

	@Input() formGroup: FormGroup;
	@Input() formDefinition: any;

	@ViewChild('fields', { read: ViewContainerRef, static: true })
	fieldsContainer: ViewContainerRef;

	constructor(private fieldsService: FieldsService) { }

	ngAfterContentInit(): void {
		this.fieldsContainer.clear();

		this.formDefinition.fields.forEach(fieldDef => {
			const field = this.fieldsService.createField(fieldDef, TextInputComponent, this.fieldsContainer);
			field.instance.formControl = this.formGroup.controls[fieldDef.name];
			field.instance.subType = fieldDef.subType;
			field.instance.definition = fieldDef;
		});
	}

}
