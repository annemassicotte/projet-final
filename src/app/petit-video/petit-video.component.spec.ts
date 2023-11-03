import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitVideoComponent } from './petit-video.component';

describe('PetitVideoComponent', () => {
  let component: PetitVideoComponent;
  let fixture: ComponentFixture<PetitVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetitVideoComponent]
    });
    fixture = TestBed.createComponent(PetitVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
