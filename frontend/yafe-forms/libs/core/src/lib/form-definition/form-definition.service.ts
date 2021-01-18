import { Injectable } from '@angular/core';
import { YafeFormDefinition } from '@yafe-forms/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FormDefinitionRepository } from './form-definition.repository';

@Injectable()
export class FormDefinitionService {

	readonly formDefinition$: BehaviorSubject<YafeFormDefinition> = new BehaviorSubject<YafeFormDefinition>(null);

	constructor(private repository: FormDefinitionRepository) { }

	getFormDefinition(formName: string): Observable<YafeFormDefinition> {
		this.repository.loadFormDefinition(formName).subscribe(form => {
			if (form !== null) this.formDefinition$.next(form);
		});
		return this.formDefinition$;
	}
}
