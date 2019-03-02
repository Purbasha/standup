import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VdCardComponent } from './vd-card.component';

describe('VdCardComponent', () => {
  let component: VdCardComponent;
  let fixture: ComponentFixture<VdCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VdCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
