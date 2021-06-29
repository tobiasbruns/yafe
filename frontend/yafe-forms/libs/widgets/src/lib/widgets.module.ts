import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '@yafe-forms/core';
import { CardWrapperComponent } from './card-wrapper/card-wrapper.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormSectionComponent } from './form-section/form-section.component';
import { FormComponent } from './form/form.component';
import { SelectComponent } from './select/select.component';
import { StepperComponent } from './stepper/stepper.component';
import { TextInputComponent } from './text-input/text-input.component';

@NgModule({
	imports: [
		CommonModule,
		CoreModule,
		MatFormFieldModule,
		MatInputModule,
		MatStepperModule,
		MatButtonModule,
		MatSelectModule,
		MatCheckboxModule,
		MatCardModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
	],
	declarations: [TextInputComponent, StepperComponent, FormComponent, SelectComponent, CheckboxComponent, FormFieldComponent, FormSectionComponent, CardWrapperComponent],
	exports: [TextInputComponent, StepperComponent, FormSectionComponent, FormComponent],
})
export class WidgetsModule { }
