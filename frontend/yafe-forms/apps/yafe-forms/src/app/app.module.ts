import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HttpClientModule } from '@angular/common/http';
import { WidgetsModule } from '@yafe-forms/widgets';
import { YafeFormBuilderModule } from '@yafe-forms/yafe-form-builder';

import { CoreModule } from '@yafe-forms/core';
import { YafeFormPlayerModule } from '@yafe-forms/yafe-form-player';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { FormListComponent } from 'libs/yafe-form-player/src/lib/form-list/form-list.component';

const routes: Routes = [{
	path: '',
	component: FormListComponent
}];

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		YafeFormPlayerModule,
		RouterModule.forRoot(routes),
		WidgetsModule,
		CoreModule,
		MatGridListModule, FormsModule, ReactiveFormsModule,
		MatDividerModule,
		YafeFormBuilderModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }

