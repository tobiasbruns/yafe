import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { GroupSelectorComponent } from './group-selector.component';

describe('GroupSelectorComponent', () => {
	let component: GroupSelectorComponent;
	let fixture: ComponentFixture<GroupSelectorComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [GroupSelectorComponent],
			imports: [MatButtonToggleModule]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(GroupSelectorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
