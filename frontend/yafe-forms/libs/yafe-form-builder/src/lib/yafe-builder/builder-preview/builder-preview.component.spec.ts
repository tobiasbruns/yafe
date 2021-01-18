import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { FormComponent } from 'libs/widgets/src/lib/form/form.component';
import { JsonInputComponent } from '../../json-input/json-input.component';

import { BuilderPreviewComponent } from './builder-preview.component';

describe('BuilderPreviewComponent', () => {
	let component: BuilderPreviewComponent;
	let fixture: ComponentFixture<BuilderPreviewComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MatTabsModule, FormsModule],
			declarations: [BuilderPreviewComponent, FormComponent, JsonInputComponent]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(BuilderPreviewComponent);
		component = fixture.componentInstance;
		component.formDefinition = { title: 'test', name: 'test', groups: [] }
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
