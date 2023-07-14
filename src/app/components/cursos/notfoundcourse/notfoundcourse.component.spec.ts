import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundcourseComponent } from './notfoundcourse.component';

describe('NotfoundcourseComponent', () => {
  let component: NotfoundcourseComponent;
  let fixture: ComponentFixture<NotfoundcourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotfoundcourseComponent]
    });
    fixture = TestBed.createComponent(NotfoundcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
