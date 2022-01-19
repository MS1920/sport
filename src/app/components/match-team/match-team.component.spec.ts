import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchTeamComponent } from './match-team.component';

describe('MatchTeamComponent', () => {
  let component: MatchTeamComponent;
  let fixture: ComponentFixture<MatchTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
