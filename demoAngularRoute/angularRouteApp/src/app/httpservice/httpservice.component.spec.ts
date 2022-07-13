import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpserviceComponent } from './httpservice.component';

describe('HttpserviceComponent', () => {
  let component: HttpserviceComponent;
  let fixture: ComponentFixture<HttpserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
