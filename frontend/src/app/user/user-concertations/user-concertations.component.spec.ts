import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConcertationsComponent } from './user-concertations.component';

describe('UserConcertationsComponent', () => {
  let component: UserConcertationsComponent;
  let fixture: ComponentFixture<UserConcertationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserConcertationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserConcertationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
