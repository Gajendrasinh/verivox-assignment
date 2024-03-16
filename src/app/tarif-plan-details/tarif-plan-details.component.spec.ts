import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifPlanDetailsComponent } from './tarif-plan-details.component';

describe('TarifPlanDetailsComponent', () => {
  let component: TarifPlanDetailsComponent;
  let fixture: ComponentFixture<TarifPlanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarifPlanDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarifPlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
