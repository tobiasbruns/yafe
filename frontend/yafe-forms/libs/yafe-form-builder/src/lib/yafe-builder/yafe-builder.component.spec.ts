import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterTestingModule } from '@angular/router/testing';
import { FormDefinitionService } from '@yafe-forms/core';
import { FormComponent } from 'libs/widgets/src/lib/form/form.component';
import { of } from 'rxjs';
import { JsonInputComponent } from '../json-input/json-input.component';
import { BuilderPreviewComponent } from './builder-preview/builder-preview.component';
import { GroupSelectorComponent } from './group-selector/group-selector.component';
import { YafeBuilderComponent } from './yafe-builder.component';

describe('YafeBuilderComponent', () => {
	let component: YafeBuilderComponent;
	let fixture: ComponentFixture<YafeBuilderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule,
				MatTabsModule,
				MatButtonToggleModule,
				ReactiveFormsModule],
			declarations: [YafeBuilderComponent,
				BuilderPreviewComponent,
				JsonInputComponent,
				FormComponent,
				GroupSelectorComponent
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
