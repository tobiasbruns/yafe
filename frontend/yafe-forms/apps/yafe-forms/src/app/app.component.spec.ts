import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { YafeFormBuilderModule } from '@yafe-forms/yafe-form-builder';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

	const formsService = {};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AppComponent],
			imports: [
				MatGridListModule,
				YafeFormBuilderModule,
				HttpClientTestingModule
			],
			providers: [
				FormBuilder
			]
		}).compileComponents();
	});

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'yafe-forms'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app.title).toEqual('yafe-forms');
	});


});
