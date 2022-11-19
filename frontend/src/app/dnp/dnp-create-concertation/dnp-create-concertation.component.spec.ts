import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnpCreateConcertationComponent } from './dnp-create-concertation.component';

describe('DnpCreateConcertationComponent', () => {
  let component: DnpCreateConcertationComponent;
  let fixture: ComponentFixture<DnpCreateConcertationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DnpCreateConcertationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DnpCreateConcertationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
