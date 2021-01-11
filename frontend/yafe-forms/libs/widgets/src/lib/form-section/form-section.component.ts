import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { YafeFormGroup } from '@yafe-forms/core';
import { FormSectionComponent as SectionComponent } from '@yafe-forms/core';

@Component({
	selector: 'yafe-forms-form-section',
	templateUrl: './form-section.component.html',
	styleUrls: ['./form-section.component.scss']
})
export class FormSectionComponent implements SectionComponent {

	@Input() definition: YafeFormGroup;
	@Input() formGroup: FormGroup;

	constructor(public container: ViewContainerRef) { }

}
