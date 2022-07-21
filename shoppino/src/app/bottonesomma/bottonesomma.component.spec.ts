import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonesommaComponent } from './bottonesomma.component';

describe('BottonesommaComponent', () => {
  let component: BottonesommaComponent;
  let fixture: ComponentFixture<BottonesommaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottonesommaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonesommaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
