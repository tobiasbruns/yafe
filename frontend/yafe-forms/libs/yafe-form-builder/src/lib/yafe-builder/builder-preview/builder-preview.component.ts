import { group } from '@angular/animations';
import { OnChanges, QueryList, ViewChildren } from '@angular/core';
import { AfterViewInit, Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { YafeFormDefinition, YafeFormGroup } from '@yafe-forms/core';

@Component({
	selector: 'yafe-forms-builder-preview',
	templateUrl: './builder-preview.component.html',
	styleUrls: ['./builder-preview.component.scss']
})
export class BuilderPreviewComponent implements OnChanges {

	@Input() formDefinition: YafeFormDefinition;

	@ViewChildren('tapArea', { read: ViewContainerRef })
	stepFormContainers: QueryList<ViewContainerRef>;

	currentDefinition: EditableGroupDefinition;

	readonly editorControl: FormGroup;
	readonly editableDefinitions: EditableGroupDefinition[];

	constructor() {
		const settingsControl = new FormControl(null);
		this.editorControl = new FormGroup({ formSettings: settingsControl });
		// this.editableDefinitions = [{ formControl: settingsControl, name: 'settings', type: 'settings' }];
	}

	public ngOnChanges() {
		this.formDefinition.groups.map(groupDefinition => {
			const json = JSON.stringify(groupDefinition, null, 5);
			const formControl = new FormControl(json);
			this.editorControl.addControl(groupDefinition.name, formControl);
			// this.editableDefinitions.push({ formControl, name: groupDefinition.name, type: 'group' });
		});

		// this.currentDefinition = this.editableDefinitions[0];
	}

	get parsedDefinition(): YafeFormGroup {
		return JSON.parse(this.currentDefinition.formControl.value);
	}

}

export interface EditableGroupDefinition {
	formControl: AbstractControl,
	name: string,
	type: 'group' | 'settings' | 'add'
}
