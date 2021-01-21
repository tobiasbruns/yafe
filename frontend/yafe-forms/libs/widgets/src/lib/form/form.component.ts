import { group } from '@angular/animations';
import { ComponentRef, OnChanges, OnInit } from '@angular/core';
import { AfterContentInit, Component, Input, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldsService, FormFieldComponent, isNotNil, YafeFieldDefinition, YafeFormGroup } from '@yafe-forms/core';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { FormSectionComponent } from '../form-section/form-section.component';
import { SelectComponent } from '../select/select.component';
import { TextInputComponent } from '../text-input/text-input.component';

@Component({
	selector: 'yafe-forms-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges {

	@Input() formGroup: FormGroup;
	@Input() formDefinition: YafeFormGroup;

	@ViewChild('fields', { read: ViewContainerRef, static: true })
	fieldsContainer: ViewContainerRef;

	private readonly typeToComponent: { [type: string]: Type<FormFieldComponent> } = {
		'text': TextInputComponent,
		'select': SelectComponent,
		'checkbox': CheckboxComponent
	}

	constructor(private fieldsService: FieldsService) { }

	ngOnInit(): void {
		this.ngOnChanges();
	}

	ngOnChanges(): void {
		this.fieldsContainer.clear();
		this.createFormContent(this.formDefinition, this.fieldsContainer, this.formGroup);
	}

	private createFormContent(definition: YafeFormGroup, container: ViewContainerRef, formGroup: FormGroup) {
		if (!definition.items) {
			console.warn("missing items in group " + definition.title + "|" + definition.itemType);
			return;
		}
		definition.items.forEach(itemDef => {
			if (itemDef.itemType === 'field') this.createField(<YafeFieldDefinition>itemDef, container, formGroup);
			else if (itemDef.itemType === 'section') this.createSubGroup(<YafeFormGroup>itemDef, container, formGroup);
			else console.warn("unkown type: " + JSON.stringify(itemDef));
		});
	}

	private createField(fieldDef: YafeFieldDefinition, container: ViewContainerRef, formGroup: FormGroup): ComponentRef<FormFieldComponent> {
		const field = this.fieldsService.createField(fieldDef, this.typeToComponent[fieldDef.type], container);
		if (this.hasControl(formGroup, fieldDef.name)) field.instance.formControl = formGroup.controls[fieldDef.name];
		return field;
	}

	private hasControl(formGroup: FormGroup, name: string): boolean {
		return isNotNil(formGroup) && isNotNil(formGroup.controls[name]);
	}

	private createSubGroup(groupDef: YafeFormGroup, container: ViewContainerRef, formGroup: FormGroup): ComponentRef<any> {
		const subGroup = this.fieldsService.createSubForm(groupDef, container, FormSectionComponent);
		if (formGroup) {
			const subFormGroup = <FormGroup>formGroup.controls[groupDef.name]
			if (!subFormGroup) console.warn("cannot find subFormGroup: " + groupDef.name);
			else subGroup.instance.formGroup = subFormGroup;
		}
		return subGroup;
	}
}
