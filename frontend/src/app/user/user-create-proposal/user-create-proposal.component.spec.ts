import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateProposalComponent } from './user-create-proposal.component';

describe('UserCreateProposalComponent', () => {
  let component: UserCreateProposalComponent;
  let fixture: ComponentFixture<UserCreateProposalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreateProposalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCreateProposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
