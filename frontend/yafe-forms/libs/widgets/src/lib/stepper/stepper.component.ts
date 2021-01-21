import {
	AfterViewInit,
	ChangeDetectorRef,
	Component,
	ComponentFactoryResolver,
	ComponentRef,
	QueryList,
	ViewChildren,
	ViewContainerRef
} from '@angular/core';
import { FormsService } from '@yafe-forms/core';
import { FormComponent } from '../form/form.component';

@Component({
	selector: 'yafe-forms-stepper',
	templateUrl: './stepper.component.html',
	styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
	private readonly factory = this.resolver.resolveComponentFactory(FormComponent);

	@ViewChildren('stepForm', { read: ViewContainerRef })
	stepFormContainers: QueryList<ViewContainerRef>;

	constructor(private resolver: ComponentFactoryResolver, public formsService: FormsService, private changeDetector: ChangeDetectorRef) { }

	public isLastStep(idx: number): boolean {
		return idx + 1 >= this.formsService.groupDefinitions.length
	}
}

