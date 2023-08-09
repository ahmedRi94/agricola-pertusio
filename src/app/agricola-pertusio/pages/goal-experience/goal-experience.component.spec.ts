import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalExperienceComponent } from './goal-experience.component';

describe('GoalExperienceComponent', () => {
  let component: GoalExperienceComponent;
  let fixture: ComponentFixture<GoalExperienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoalExperienceComponent]
    });
    fixture = TestBed.createComponent(GoalExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
