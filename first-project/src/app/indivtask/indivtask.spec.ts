import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Indivtask } from './indivtask';

describe('Indivtask', () => {
  let component: Indivtask;
  let fixture: ComponentFixture<Indivtask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Indivtask]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Indivtask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
