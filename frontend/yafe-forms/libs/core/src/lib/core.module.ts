import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDefinitionService } from './form-definition/form-definition.service';
import { FormDefinitionRepository } from './form-definition/form-definition.repository';

@NgModule({
	imports: [CommonModule,
		FormsModule,
		ReactiveFormsModule],
	providers: [FormDefinitionService, FormDefinitionRepository]
})
export class CoreModule { }
