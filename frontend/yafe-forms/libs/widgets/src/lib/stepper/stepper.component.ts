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
export class StepperComponent implements AfterViewInit {
	private readonly factory = this.resolver.resolveComponentFactory(FormComponent);

	@ViewChildren('stepForm', { read: ViewContainerRef })
	stepFormContainers: QueryList<ViewContainerRef>;

	constructor(private resolver: ComponentFactoryResolver, public formsService: FormsService, private changeDetector: ChangeDetectorRef) { }

	public ngAfterViewInit() {

		this.stepFormContainers.forEach((eRef, index) => {
			eRef.clear();
			const form: ComponentRef<FormComponent> = eRef.createComponent(this.factory);
			const group = this.formsService.groups[index];
			form.instance.formGroup = group;
			form.instance.formDefinition = this.formsService.groupDefinitions[index];

			console.log("Formular gebaut: " + this.formsService.groupDefinitions[index].title);
		})

		this.changeDetector.detectChanges();
	}

	public isLastStep(idx: number): boolean {
		return idx + 1 >= this.formsService.groupDefinitions.length
	}
}

