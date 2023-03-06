import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyReserveComponent } from './daily-reserve.component';

describe('DailyReserveComponent', () => {
  let component: DailyReserveComponent;
  let fixture: ComponentFixture<DailyReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyReserveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
