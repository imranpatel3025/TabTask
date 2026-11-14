import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabTaskNgForComponent } from './tab-task-ng-for.component';

describe('TabTaskNgForComponent', () => {
  let component: TabTaskNgForComponent;
  let fixture: ComponentFixture<TabTaskNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabTaskNgForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabTaskNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
