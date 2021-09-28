import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeBodyComponent } from './subscribe-body.component';

describe('SubscribeBodyComponent', () => {
  let component: SubscribeBodyComponent;
  let fixture: ComponentFixture<SubscribeBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
