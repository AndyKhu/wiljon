import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TandaterimaComponent } from './tandaterima.component';

describe('TandaterimaComponent', () => {
  let component: TandaterimaComponent;
  let fixture: ComponentFixture<TandaterimaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TandaterimaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TandaterimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
