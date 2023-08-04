import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonEffectComponent } from './common-effect.component';

describe('CommonEffectComponent', () => {
  let component: CommonEffectComponent;
  let fixture: ComponentFixture<CommonEffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonEffectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
