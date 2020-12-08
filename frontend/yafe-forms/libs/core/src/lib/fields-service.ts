import { ComponentRef, Injectable } from '@angular/core';
import { ViewContainerRef } from '@angular/core';
import { ComponentFactoryResolver, Type } from '@angular/core';

@Injectable()
export class FieldsService {
	constructor(private resolver: ComponentFactoryResolver) { }

	public createField<T>(definition, type: Type<T>, container: ViewContainerRef): ComponentRef<T> {
		const factory = this.resolver.resolveComponentFactory(type);

		const field = container.createComponent(factory);


		return field;
	}
}
