import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterlinksComponent } from './routerlinks.component';

describe('RouterlinksComponent', () => {
  let component: RouterlinksComponent;
  let fixture: ComponentFixture<RouterlinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterlinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterlinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
