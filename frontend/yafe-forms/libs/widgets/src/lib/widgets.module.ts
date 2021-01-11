import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from './text-input/text-input.component';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StepperComponent } from './stepper/stepper.component';
import { CoreModule } from '@yafe-forms/core';
import { FormComponent } from './form/form.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SelectComponent } from './select/select.component';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { FormSectionComponent } from './form-section/form-section.component';

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
		FormsModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
	],
	declarations: [TextInputComponent, StepperComponent, FormComponent, SelectComponent, CheckboxComponent, FormFieldComponent, FormSectionComponent],
	exports: [TextInputComponent, StepperComponent, FormSectionComponent],
})
export class WidgetsModule { }
