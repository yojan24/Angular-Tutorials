import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparateTaskComponent } from './separate-task.component';

describe('SeparateTaskComponent', () => {
  let component: SeparateTaskComponent;
  let fixture: ComponentFixture<SeparateTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeparateTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeparateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
