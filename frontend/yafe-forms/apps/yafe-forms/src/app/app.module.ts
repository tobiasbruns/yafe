import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { CoreModule } from '@yafe-forms/core';
import { WidgetsModule } from '@yafe-forms/widgets';
import { YafeFormBuilderModule } from '@yafe-forms/yafe-form-builder';
import { YafeFormPlayerModule } from '@yafe-forms/yafe-form-player';
import { CardWrapperComponent } from 'libs/widgets/src/lib/card-wrapper/card-wrapper.component';
import { FormListComponent } from 'libs/yafe-form-player/src/lib/form-list/form-list.component';
import { AppComponent } from './app.component';

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
		YafeFormBuilderModule,
		FormlyModule.forRoot({
			extras: { lazyRender: true },
			wrappers: [{ name: 'card', component: CardWrapperComponent }]
		}
		),
		FormlyMaterialModule,
		MatNativeDateModule,
		FormlyMatDatepickerModule
	],

	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }

