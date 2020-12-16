import { AfterContentInit, Component, Input, OnChanges, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { StepperComponent, TextInputComponent } from '@yafe-forms/widgets';
import { isNil, FormsService } from '@yafe-forms/core';
import { ComponentRef } from '@angular/core';
import { ComponentFactoryResolver } from '@angular/core';


@Component({
	selector: 'yafe-forms-form-player',
	templateUrl: './form-player.component.html',
	styleUrls: ['./form-player.component.scss']
})
export class FormPlayerComponent implements OnChanges {

	@Input() formDefinition: any;

	@ViewChild('yafeforms', { read: ViewContainerRef, static: true })
	formsContainer: ViewContainerRef;

	constructor(private formsService: FormsService, private resolver: ComponentFactoryResolver) { }


	ngOnChanges() {
		if (!isNil(this.formDefinition)) {
			this.formsService.initForm(this.formDefinition);
			this.createForm();
		}
	}

	public buildForm(definition: any): void {
		this.formsService.initForm(definition);
		this.createForm();
	}

	private createForm(): void {
		const stepper = this.createStepper();
	}

	private createStepper(): ComponentRef<StepperComponent> {
		const factory = this.resolver.resolveComponentFactory(StepperComponent);

		this.formsContainer.clear();
		const stepper = this.formsContainer.createComponent(factory);
		return stepper;
	}
}
