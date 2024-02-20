import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVideosComponent } from './table-videos.component';

describe('TableVideosComponent', () => {
  let component: TableVideosComponent;
  let fixture: ComponentFixture<TableVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableVideosComponent]
    });
    fixture = TestBed.createComponent(TableVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
