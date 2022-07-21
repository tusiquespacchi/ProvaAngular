import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicaviComponent } from './ricavi.component';

describe('RicaviComponent', () => {
  let component: RicaviComponent;
  let fixture: ComponentFixture<RicaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RicaviComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RicaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
