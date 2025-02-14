import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoatExperienceComponent } from './goat-experience.component';

describe( 'GoatExperienceComponent', () => {
  let component: GoatExperienceComponent;
  let fixture: ComponentFixture<GoatExperienceComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule( {
      declarations: [GoatExperienceComponent]
    } );
    fixture = TestBed.createComponent( GoatExperienceComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
