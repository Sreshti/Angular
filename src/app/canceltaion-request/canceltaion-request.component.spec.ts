import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanceltaionRequestComponent } from './canceltaion-request.component';

describe('CanceltaionRequestComponent', () => {
  let component: CanceltaionRequestComponent;
  let fixture: ComponentFixture<CanceltaionRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanceltaionRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanceltaionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
