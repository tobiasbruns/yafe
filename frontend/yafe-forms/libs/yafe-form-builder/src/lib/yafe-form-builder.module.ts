import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonInputComponent } from './json-input/json-input.component';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, FormsModule, MatIconModule, MatButtonModule, BrowserAnimationsModule],
  declarations: [JsonInputComponent],
  exports: [JsonInputComponent]
})
export class YafeFormBuilderModule { }
