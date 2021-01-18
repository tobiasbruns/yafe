import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormDefinitionService, YafeFormDefinition } from '@yafe-forms/core';
import { Observable } from 'rxjs';

@Component({
	selector: 'yafe-forms-yafe-builder',
	templateUrl: './yafe-builder.component.html',
	styleUrls: ['./yafe-builder.component.scss']
})
export class YafeBuilderComponent {

	private readonly FORM_NAME_PARAMTER = 'formName';

	public formDefinition$: Observable<YafeFormDefinition>;

	constructor(route: ActivatedRoute, service: FormDefinitionService) {
		const formName = route.snapshot.paramMap.get(this.FORM_NAME_PARAMTER);

		this.formDefinition$ = service.getFormDefinition(formName);
	}

}
