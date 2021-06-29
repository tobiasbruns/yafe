import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule, Routes } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { WidgetsModule } from '@yafe-forms/widgets';
import { FormListComponent } from './form-list/form-list.component';
import { FormPlayerContainerComponent } from './form-player-container/form-player-container.component';
import { FormPlayerComponent } from './form-player/form-player.component';

const routes: Routes = [{
	path: 'form/:formName',
	component: FormPlayerContainerComponent,
	pathMatch: 'full'
}]

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		MatButtonModule,
		MatIconModule,
		MatSlideToggleModule,
		FormlyModule,
		WidgetsModule
	],
	declarations: [FormPlayerComponent, FormPlayerContainerComponent, FormListComponent],
	exports: [FormPlayerContainerComponent]
})
export class YafeFormPlayerModule { }
