import { QueryList, ViewChildren } from '@angular/core';
import { AfterViewInit, Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { YafeFormDefinition } from '@yafe-forms/core';

@Component({
	selector: 'yafe-forms-builder-preview',
	templateUrl: './builder-preview.component.html',
	styleUrls: ['./builder-preview.component.scss']
})
export class BuilderPreviewComponent implements AfterViewInit {

	@Input() formDefinition: YafeFormDefinition;

	@ViewChildren('tapArea', { read: ViewContainerRef })
	stepFormContainers: QueryList<ViewContainerRef>;

	constructor() { }

	public ngAfterViewInit() {

	}

}
