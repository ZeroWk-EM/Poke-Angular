import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidePageComponent } from './valide-page.component';

describe('ValidePageComponent', () => {
  let component: ValidePageComponent;
  let fixture: ComponentFixture<ValidePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidePageComponent]
    });
    fixture = TestBed.createComponent(ValidePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
