import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeSimpleComponent } from './poke-simple.component';

describe('PokeSimpleComponent', () => {
  let component: PokeSimpleComponent;
  let fixture: ComponentFixture<PokeSimpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokeSimpleComponent]
    });
    fixture = TestBed.createComponent(PokeSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
