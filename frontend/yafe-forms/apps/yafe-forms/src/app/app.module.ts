import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatGridListModule } from '@angular/material/grid-list'
import { HttpClientModule } from '@angular/common/http';
import { WidgetsModule } from '@yafe-forms/widgets';
import { YafeFormBuilderModule } from '@yafe-forms/yafe-form-builder';

import { CoreModule } from '@yafe-forms/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule,
    WidgetsModule, CoreModule, MatGridListModule, FormsModule, ReactiveFormsModule,
    YafeFormBuilderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
