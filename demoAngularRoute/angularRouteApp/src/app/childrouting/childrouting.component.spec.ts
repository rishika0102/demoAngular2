import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildroutingComponent } from './childrouting.component';

describe('ChildroutingComponent', () => {
  let component: ChildroutingComponent;
  let fixture: ComponentFixture<ChildroutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildroutingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildroutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
