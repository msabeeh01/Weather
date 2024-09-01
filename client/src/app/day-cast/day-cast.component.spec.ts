import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayCastComponent } from './day-cast.component';

describe('DayCastComponent', () => {
  let component: DayCastComponent;
  let fixture: ComponentFixture<DayCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayCastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
