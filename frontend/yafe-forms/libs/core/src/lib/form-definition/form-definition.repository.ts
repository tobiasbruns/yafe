import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YafeFormDefinition } from '@yafe-forms/core';
import { Observable } from 'rxjs';

@Injectable()
export class FormDefinitionRepository {

	constructor(private httpClient: HttpClient) { }

	loadFormDefinition(name: string): Observable<YafeFormDefinition> {
		return <Observable<YafeFormDefinition>>this.httpClient.get("http://localhost:4200/forms/" + name + ".yml");
	}
}
