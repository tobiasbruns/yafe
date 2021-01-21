import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterTestingModule } from '@angular/router/testing';
import { FormDefinitionService } from '@yafe-forms/core';
import { WidgetsModule } from '@yafe-forms/widgets';
import { of } from 'rxjs';
import { FormPlayerComponent } from '../form-player/form-player.component';
import { FormPlayerContainerComponent } from './form-player-container.component';

describe('FormPlayerContainerComponent', () => {
	let component: FormPlayerContainerComponent;
	let fixture: ComponentFixture<FormPlayerContainerComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MatIconModule,
				MatSlideToggleModule,
				MatIconModule,
				RouterTestingModule,
				HttpClientTestingModule,
				RouterTestingModule,
				WidgetsModule],
			declarations: [FormPlayerContainerComponent, FormPlayerComponent],
			providers: [
				{
					provide: FormDefinitionService,
					useValue: { getFormDefinition: () => of(null) }
				}
			]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(FormPlayerContainerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
