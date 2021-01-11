import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { isNil, isNull } from './utils';
import { YafeFieldDefinition, YafeFormDefinition, YafeFormGroup, YafeValidator } from './yafe-form.model';

@Injectable()
export class FormsService {
	public form: FormGroup;
	public groupDefinitions: YafeFormGroup[] = [];
	public groups: FormGroup[] = [];

	constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

	public initForm(formDefinition: YafeFormDefinition): void {
		this.form = this.formBuilder.group({});
		this.groupDefinitions = [];
		this.groups = [];

		formDefinition.groups.forEach(def => {
			const group = FormAssambler.createGroup(this.formBuilder, def, this.form);
			this.groups.push(group);
			this.form.addControl(def.title, group);

			this.groupDefinitions.push(def);
		});
	}

	public submit(): void {
		console.log(JSON.stringify(this.form.value));

		// this.httpClient.post(this.formDefinition.metadata.target, this.form.value).subscribe(() => {
		// 	console.log("sent!");
		// });
	}
}

class FormAssambler {

	static createGroup(formbuilder: FormBuilder, definition: YafeFormGroup, form: FormGroup): FormGroup {
		return new FormAssambler(formbuilder, form).createGroup(definition);
	}

	constructor(private formBuilder: FormBuilder, private form: FormGroup) { }

	private createGroup(definition: YafeFormGroup): FormGroup {
		const group = this.formBuilder.group({});

		definition.items.forEach(def => {
			if (def.itemType === 'field') {
				const fieldDef = <YafeFieldDefinition>def;
				group.addControl(fieldDef.name, new FormControl(fieldDef.defaultValue ? fieldDef.defaultValue : null, this.buildValidators(fieldDef.validators)))
			}

			if (def.itemType === 'section') {
				const groupDef = <YafeFormGroup>def;
				const subGroup = FormAssambler.createGroup(this.formBuilder, groupDef, this.form);
				group.addControl(groupDef.name, subGroup);
				if (groupDef.condition) {
					this.form.valueChanges.subscribe(value => {
						this.checkCondition(groupDef.condition, value) ? subGroup.enable({ emitEvent: false }) : subGroup.disable({ emitEvent: false });
					})
				}
			}
		});

		return group;
	}

	private checkCondition(condition: string, formValue: any): boolean {
		const form = { ...formValue };
		return eval(condition);
	}

	private buildValidators(validatorDef: YafeValidator[]): ValidatorFn[] {
		if (isNil(validatorDef)) return [];
		return validatorDef.map(def => this.buildValidator(def)).filter(validator => !isNull(validator));
	}

	private buildValidator(validatorDef: YafeValidator): ValidatorFn {
		if (validatorDef.type === 'BuildIn') {
			if (validatorDef.name === 'required') {
				return Validators.required;
			}
		}
		return null;
	}
}
