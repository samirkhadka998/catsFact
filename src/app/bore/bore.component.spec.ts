import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoreComponent } from './bore.component';

describe('BoreComponent', () => {
  let component: BoreComponent;
  let fixture: ComponentFixture<BoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
