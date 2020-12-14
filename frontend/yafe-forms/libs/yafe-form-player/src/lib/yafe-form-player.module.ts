import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPlayerComponent } from './form-player/form-player.component';
import { FormPlayerContainerComponent } from './form-player-container/form-player-container.component';
import { RouterModule, Routes } from '@angular/router';
import { FormListComponent } from './form-list/form-list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

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
		MatIconModule
	],
	declarations: [FormPlayerComponent, FormPlayerContainerComponent, FormListComponent],
	exports: [FormPlayerContainerComponent]
})
export class YafeFormPlayerModule { }
