import { Component, ComponentFactoryResolver, ComponentRef, Input, OnChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormsService } from '@yafe-forms/core';
import { StepperComponent } from '@yafe-forms/widgets';


@Component({
	selector: 'yafe-forms-form-player',
	templateUrl: './form-player.component.html',
	styleUrls: ['./form-player.component.scss']
})
export class FormPlayerComponent implements OnChanges {

	@Input() formDefinition: any;

	@ViewChild('yafeforms', { read: ViewContainerRef, static: true })
	formsContainer: ViewContainerRef;

	readonly formConfig: FormlyFieldConfig[] = [{
		key: 'name',
		type: 'input',
		templateOptions: {
			label: 'Nachname',
			required: true
		}
	}]

	constructor(public formsService: FormsService, private resolver: ComponentFactoryResolver) { }


	ngOnChanges() {
		// this.formsService.initForm(this.formDefinition);
	}

	public buildForm(definition: any): void {
		// this.formsService.initForm(definition);
		// this.createForm();
	}

	private createForm(): void {
		this.createStepper();
	}

	private createStepper(): ComponentRef<StepperComponent> {
		const factory = this.resolver.resolveComponentFactory(StepperComponent);

		this.formsContainer.clear();
		const stepper = this.formsContainer.createComponent(factory);
		return stepper;
	}
}
