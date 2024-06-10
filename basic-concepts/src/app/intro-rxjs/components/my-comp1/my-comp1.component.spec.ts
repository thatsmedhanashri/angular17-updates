import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1Component } from './my-comp1.component';

describe('MyComp1Component', () => {
  let component: MyComp1Component;
  let fixture: ComponentFixture<MyComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyComp1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
