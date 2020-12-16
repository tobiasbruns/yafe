import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsService } from '@yafe-forms/core';

import { FormPlayerComponent } from './form-player.component';

describe('FormPlayerComponent', () => {
	let component: FormPlayerComponent;
	let fixture: ComponentFixture<FormPlayerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MatIconModule, MatSlideToggleModule],
			declarations: [FormPlayerComponent],
			providers: [{
				provide: FormsService,
				useValue: {}
			}]
		})
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
