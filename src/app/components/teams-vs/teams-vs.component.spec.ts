import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsVsComponent } from './teams-vs.component';

describe('TeamsVsComponent', () => {
  let component: TeamsVsComponent;
  let fixture: ComponentFixture<TeamsVsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsVsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsVsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
