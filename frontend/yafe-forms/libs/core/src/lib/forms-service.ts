import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class FormsService {
	public form: FormGroup;
	private formDefinition: any;
	public groupDefinitions: any[] = [];
	public groups: FormGroup[] = [];

	constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

	public initForm(formDefinition: any): void {
		this.formDefinition = formDefinition;
		this.form = this.formBuilder.group({});
		this.groupDefinitions = [];
		this.groups = [];

		formDefinition.groups.forEach(def => {
			this.groups.push(this.createGroup(def));
			this.groupDefinitions.push(def);
		});


	}

	private createGroup(definition: any): FormGroup {
		const group = this.formBuilder.group({});
		this.form.addControl(definition.title, group);

		definition.fields.forEach(def => {
			group.addControl(def.name, new FormControl(null))
		});

		return group;
	}

	public submit(): void {
		console.log(JSON.stringify(this.form.value));

		this.httpClient.post(this.formDefinition.metadata.target, this.form.value).subscribe(() => {
			console.log("sent!");
		});
	}
}
