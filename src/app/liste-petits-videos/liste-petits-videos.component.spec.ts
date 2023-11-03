import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePetitsVideosComponent } from './liste-petits-videos.component';

describe('ListePetitsVideosComponent', () => {
  let component: ListePetitsVideosComponent;
  let fixture: ComponentFixture<ListePetitsVideosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListePetitsVideosComponent]
    });
    fixture = TestBed.createComponent(ListePetitsVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
