import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleconsultationsListComponent } from './teleconsultations-list.component';

describe('TeleconsultationsListComponent', () => {
  let component: TeleconsultationsListComponent;
  let fixture: ComponentFixture<TeleconsultationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeleconsultationsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeleconsultationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
