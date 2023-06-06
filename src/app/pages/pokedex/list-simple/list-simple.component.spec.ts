import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSimpleComponent } from './list-simple.component';

describe('ListSimpleComponent', () => {
  let component: ListSimpleComponent;
  let fixture: ComponentFixture<ListSimpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSimpleComponent]
    });
    fixture = TestBed.createComponent(ListSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
