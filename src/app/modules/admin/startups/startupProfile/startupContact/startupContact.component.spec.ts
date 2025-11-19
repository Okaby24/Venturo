/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StartupContactComponent } from './startupContact.component';

describe('StartupContactComponent', () => {
  let component: StartupContactComponent;
  let fixture: ComponentFixture<StartupContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartupContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartupContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
