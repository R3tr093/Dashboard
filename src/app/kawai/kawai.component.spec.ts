import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KawaiComponent } from './kawai.component';

describe('KawaiComponent', () => {
  let component: KawaiComponent;
  let fixture: ComponentFixture<KawaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KawaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KawaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
