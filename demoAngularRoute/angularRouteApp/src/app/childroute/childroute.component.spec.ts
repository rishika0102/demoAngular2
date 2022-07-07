import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrouteComponent } from './childroute.component';

describe('ChildrouteComponent', () => {
  let component: ChildrouteComponent;
  let fixture: ComponentFixture<ChildrouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildrouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
