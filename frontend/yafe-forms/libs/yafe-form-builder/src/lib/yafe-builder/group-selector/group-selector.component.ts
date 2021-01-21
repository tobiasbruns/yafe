import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { YafeFormDefinition, YafeFormGroup } from '@yafe-forms/core';
import { EditableGroupDefinition } from '../builder-preview/builder-preview.component';

@Component({
	selector: 'yafe-forms-group-selector',
	templateUrl: './group-selector.component.html',
	styleUrls: ['./group-selector.component.scss']
})
export class GroupSelectorComponent {

	@Input() editableDefinitions: EditableGroupDefinition[];

	@Input() currentGroupDefinition: YafeFormGroup;
	@Output() currentGroupDefinitionChange: EventEmitter<EditableGroupDefinition> = new EventEmitter();

	constructor() { }

}
