import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthResolveComponent } from './auth-resolve.component';

describe('AuthResolveComponent', () => {
  let component: AuthResolveComponent;
  let fixture: ComponentFixture<AuthResolveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthResolveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthResolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
