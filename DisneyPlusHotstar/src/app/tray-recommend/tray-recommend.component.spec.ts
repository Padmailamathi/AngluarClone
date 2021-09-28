import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrayRecommendComponent } from './tray-recommend.component';

describe('TrayRecommendComponent', () => {
  let component: TrayRecommendComponent;
  let fixture: ComponentFixture<TrayRecommendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrayRecommendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrayRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
