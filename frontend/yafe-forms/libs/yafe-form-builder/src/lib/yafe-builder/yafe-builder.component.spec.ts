import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormDefinitionService } from '@yafe-forms/core';
import { of } from 'rxjs';
import { BuilderPreviewComponent } from './builder-preview/builder-preview.component';
import { YafeBuilderComponent } from './yafe-builder.component';
import { MatTabsModule } from '@angular/material/tabs';
import { JsonInputComponent } from '../json-input/json-input.component';
import { FormComponent } from 'libs/widgets/src/lib/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('YafeBuilderComponent', () => {
	let component: YafeBuilderComponent;
	let fixture: ComponentFixture<YafeBuilderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule, MatTabsModule, FormsModule],
			declarations: [YafeBuilderComponent,
				BuilderPreviewComponent,
				JsonInputComponent,
				FormComponent
			],
			providers: [
				{
					provide: FormDefinitionService,
					useValue: { getFormDefinition: () => of(null) }
				}
			]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(YafeBuilderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
