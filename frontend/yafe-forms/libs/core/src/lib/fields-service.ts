import { ComponentRef, Injectable } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver, Type } from '@angular/core';
import { FormFieldComponent, YafeFieldDefinition, YafeFormGroup } from './yafe-form.model';
import { FormSectionComponent } from '@yafe-forms/widgets';

@Injectable()
export class FieldsService {
	constructor(private resolver: ComponentFactoryResolver) { }


	public createSubForm<T extends FormSectionComponent>(definition: YafeFormGroup, container: ViewContainerRef, type: Type<T>): ComponentRef<T> {
		const factory = this.resolver.resolveComponentFactory(type);

		const subForm = container.createComponent(factory);
		subForm.instance.definition = definition;
		return subForm;
	}

	public createField<T extends FormFieldComponent>(definition: YafeFieldDefinition, type: Type<T>, container: ViewContainerRef): ComponentRef<T> {
		const factory = this.resolver.resolveComponentFactory(type);
		const field = container.createComponent(factory);
		field.instance.definition = definition;

		return field;
	}


}
