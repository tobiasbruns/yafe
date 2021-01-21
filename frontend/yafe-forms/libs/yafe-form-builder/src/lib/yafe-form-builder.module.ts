import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { WidgetsModule } from '@yafe-forms/widgets';
import { JsonInputComponent } from './json-input/json-input.component';
import { BuilderPreviewComponent } from './yafe-builder/builder-preview/builder-preview.component';
import { GroupSelectorComponent } from './yafe-builder/group-selector/group-selector.component';
import { YafeBuilderComponent } from './yafe-builder/yafe-builder.component';

const routes: Routes = [{
	path: 'form/:formName/editor',
	component: YafeBuilderComponent,
	pathMatch: 'full'
}]

@NgModule({
	imports: [CommonModule,
		RouterModule.forChild(routes),
		ReactiveFormsModule,
		MatFormFieldModule,
		MatIconModule,
		MatTabsModule,
		MatButtonModule,
		MatButtonToggleModule,
		BrowserAnimationsModule,
		WidgetsModule],
	declarations: [JsonInputComponent, YafeBuilderComponent, BuilderPreviewComponent, GroupSelectorComponent],
	exports: [JsonInputComponent]
})
export class YafeFormBuilderModule { }
