import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidentsCornerComponent } from './presidents-corner.component';

describe('PresidentsCornerComponent', () => {
  let component: PresidentsCornerComponent;
  let fixture: ComponentFixture<PresidentsCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresidentsCornerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidentsCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
