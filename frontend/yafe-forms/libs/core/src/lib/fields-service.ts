import { ComponentRef, Injectable } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver, Type } from '@angular/core';
import { FormFieldComponent, YafeFieldDefinition } from './yafe-form.model';

@Injectable()
export class FieldsService {
	constructor(private resolver: ComponentFactoryResolver) { }

	public createField<T extends FormFieldComponent>(definition: YafeFieldDefinition, type: Type<T>, container: ViewContainerRef): ComponentRef<T> {
		const factory = this.resolver.resolveComponentFactory(type);
		const field = container.createComponent(factory);
		field.instance.definition = definition;

		return field;
	}
}
