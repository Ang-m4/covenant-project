import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DnpHomeComponent } from './dnp-home.component';

describe('DnpHomeComponent', () => {
  let component: DnpHomeComponent;
  let fixture: ComponentFixture<DnpHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DnpHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DnpHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
