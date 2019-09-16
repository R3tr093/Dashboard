import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmdComponent } from './cmd.component';

describe('CmdComponent', () => {
  let component: CmdComponent;
  let fixture: ComponentFixture<CmdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
