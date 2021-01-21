import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsService } from '@yafe-forms/core';
import { WidgetsModule } from '@yafe-forms/widgets';
import { FormComponent } from 'libs/widgets/src/lib/form/form.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

import { FormPlayerComponent } from './form-player.component';

describe('FormPlayerComponent', () => {
	let component: FormPlayerComponent;
	let fixture: ComponentFixture<FormPlayerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MatIconModule, MatSlideToggleModule, WidgetsModule],
			declarations: [FormPlayerComponent],
			providers: [{
				provide: FormsService,
				useValue: {}
			}]
		}).overrideModule(BrowserDynamicTestingModule, { set: { entryComponents: [FormComponent] } })
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FormPlayerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
