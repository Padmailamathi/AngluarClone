import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeHeaderComponent } from './subscribe-header.component';

describe('SubscribeHeaderComponent', () => {
  let component: SubscribeHeaderComponent;
  let fixture: ComponentFixture<SubscribeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
