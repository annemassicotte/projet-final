import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCompletComponent } from './video-complet.component';

describe('VideoCompletComponent', () => {
  let component: VideoCompletComponent;
  let fixture: ComponentFixture<VideoCompletComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideoCompletComponent]
    });
    fixture = TestBed.createComponent(VideoCompletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
