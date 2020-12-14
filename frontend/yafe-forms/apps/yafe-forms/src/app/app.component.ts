import { AfterContentInit, ComponentRef } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import {
	Component,
	ComponentFactoryResolver,
	ViewChild,
	ViewContainerRef,
} from '@angular/core';
import { FieldsService, FormsService } from '@yafe-forms/core';
import { StepperComponent, TextInputComponent } from '@yafe-forms/widgets';

@Component({
	selector: 'yafe-forms-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [FormsService, FieldsService]
})
export class AppComponent {

	title = 'yafe-forms';

	readonly sample = {
		groups: [
			{
				title: 'Kontakdaten',
				fields: [
					{
						type: 'text',
						name: 'vorname',
						label: 'Vorname',
					},
					{
						type: 'text',
						name: 'name',
						label: 'Name',
					},
					{
						type: 'text',
						subType: 'tel',
						name: 'telefon',
						label: 'Telefon',
					},
				],
			},
			{
				title: 'Anliegen',
				fields: [{ type: 'text', label: 'Anliegen' }],
			},
		]
	};

	readonly typeToClass = {
		text: TextInputComponent,
	};

	constructor(

	) { }


}
