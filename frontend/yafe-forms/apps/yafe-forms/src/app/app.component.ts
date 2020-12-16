import {
	Component
} from '@angular/core';
import { FieldsService, FormsService, YafeFormDefinition } from '@yafe-forms/core';

@Component({
	selector: 'yafe-forms-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	providers: [FormsService, FieldsService]
})
export class AppComponent {

	title = 'yafe-forms';

	constructor() { }
}
