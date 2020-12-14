import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { map, share, tap } from 'rxjs/operators';

@Component({
	selector: 'yafe-forms-form-player-container',
	templateUrl: './form-player-container.component.html',
	styleUrls: ['./form-player-container.component.scss']
})
export class FormPlayerContainerComponent {

	private readonly FORM_NAME_PARAMTER = 'formName';

	public formDefinition$: Observable<any>;

	constructor(route: ActivatedRoute, httpClient: HttpClient) {
		const formName = route.snapshot.paramMap.get(this.FORM_NAME_PARAMTER);
		// const formName = route.snapshot.paramMap.get('formName');

		this.formDefinition$ = httpClient.get("http://localhost:4200/forms/" + formName + ".yml").pipe(
			tap(loaded => console.log("loaded formdef: " + JSON.stringify(loaded)))
		);
	}
}
