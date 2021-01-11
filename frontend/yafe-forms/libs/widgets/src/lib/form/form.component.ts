import { group } from '@angular/animations';
import { ComponentRef } from '@angular/core';
import { AfterContentInit, Component, Input, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldsService, FormFieldComponent, YafeFieldDefinition, YafeFormGroup } from '@yafe-forms/core';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { FormSectionComponent } from '../form-section/form-section.component';
import { SelectComponent } from '../select/select.component';
import { TextInputComponent } from '../text-input/text-input.component';

@Component({
	selector: 'yafe-forms-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements AfterContentInit {

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

	ngAfterContentInit(): void {
		this.fieldsContainer.clear();
		this.createFormContent(this.formDefinition, this.fieldsContainer, this.formGroup);
	}

	private createFormContent(definition: YafeFormGroup, container: ViewContainerRef, formGroup: FormGroup) {
		if (!definition.items) {
			console.warn("missing items in group " + definition.name);
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
		field.instance.formControl = formGroup.controls[fieldDef.name];
		return field;
	}

	private createSubGroup(groupDef: YafeFormGroup, container: ViewContainerRef, formGroup: FormGroup): ComponentRef<any> {
		const subGroup = this.fieldsService.createSubForm(groupDef, container, FormSectionComponent);
		const subFormGroup = <FormGroup>formGroup.controls[groupDef.name]
		if (!subFormGroup) console.warn("cannot find subFormGroup: " + groupDef.name);
		subGroup.instance.formGroup = subFormGroup;
		this.createFormContent(groupDef, subGroup.instance.container, subFormGroup);
		return subGroup;
	}
}
