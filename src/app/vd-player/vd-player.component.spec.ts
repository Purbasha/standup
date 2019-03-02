import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VdPlayerComponent } from './vd-player.component';

describe('VdPlayerComponent', () => {
  let component: VdPlayerComponent;
  let fixture: ComponentFixture<VdPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VdPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VdPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
