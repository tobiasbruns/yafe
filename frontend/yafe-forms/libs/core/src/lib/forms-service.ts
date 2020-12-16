import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validator, ValidatorFn, Validators } from '@angular/forms';
import { YafeFormDefinition } from '@yafe-forms/core';
import { YafeFormGroup, YafeValidator } from './yafe-form.model';
import { isNull, isNil } from '@yafe-forms/core';

@Injectable()
export class FormsService {
	public form: FormGroup;
	private formDefinition: YafeFormDefinition;
	public groupDefinitions: YafeFormGroup[] = [];
	public groups: FormGroup[] = [];

	constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

	public initForm(formDefinition: YafeFormDefinition): void {
		this.formDefinition = formDefinition;
		this.form = this.formBuilder.group({});
		this.groupDefinitions = [];
		this.groups = [];

		formDefinition.groups.forEach(def => {
			this.groups.push(this.createGroup(def));
			this.groupDefinitions.push(def);
		});
	}

	private createGroup(definition: YafeFormGroup): FormGroup {
		const group = this.formBuilder.group({});
		this.form.addControl(definition.title, group);

		definition.fields.forEach(def => {
			group.addControl(def.name, new FormControl(null, this.buildValidators(def.validators)))
		});

		return group;
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

	public submit(): void {
		console.log(JSON.stringify(this.form.value));

		// this.httpClient.post(this.formDefinition.metadata.target, this.form.value).subscribe(() => {
		// 	console.log("sent!");
		// });
	}
}
