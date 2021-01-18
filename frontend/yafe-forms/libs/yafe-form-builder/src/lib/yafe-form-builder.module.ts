import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonInputComponent } from './json-input/json-input.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { YafeBuilderComponent } from './yafe-builder/yafe-builder.component';
import { RouterModule, Routes } from '@angular/router';
import { BuilderPreviewComponent } from './yafe-builder/builder-preview/builder-preview.component';
import { WidgetsModule } from '@yafe-forms/widgets';

const routes: Routes = [{
	path: 'form/:formName/editor',
	component: YafeBuilderComponent,
	pathMatch: 'full'
}]

@NgModule({
	imports: [CommonModule,
		RouterModule.forChild(routes),
		FormsModule,
		MatIconModule,
		MatTabsModule,
		MatButtonModule,
		BrowserAnimationsModule,
		WidgetsModule],
	declarations: [JsonInputComponent, YafeBuilderComponent, BuilderPreviewComponent],
	exports: [JsonInputComponent]
})
export class YafeFormBuilderModule { }
