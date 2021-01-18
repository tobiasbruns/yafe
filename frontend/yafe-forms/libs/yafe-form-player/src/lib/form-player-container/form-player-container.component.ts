import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YafeFormDefinition } from '@yafe-forms/core';
import { Observable } from 'rxjs';
import { FormDefinitionService } from '@yafe-forms/core';

import { map, share, tap } from 'rxjs/operators';

@Component({
	selector: 'yafe-forms-form-player-container',
	templateUrl: './form-player-container.component.html',
	styleUrls: ['./form-player-container.component.scss']
})
export class FormPlayerContainerComponent {

	private readonly FORM_NAME_PARAMTER = 'formName';

	public formDefinition$: Observable<YafeFormDefinition>;

	constructor(route: ActivatedRoute, service: FormDefinitionService) {
		const formName = route.snapshot.paramMap.get(this.FORM_NAME_PARAMTER);

		this.formDefinition$ = service.getFormDefinition(formName);
	}
}
