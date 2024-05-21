import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistnamesComponent } from './artistnames.component';

describe('ArtistnamesComponent', () => {
  let component: ArtistnamesComponent;
  let fixture: ComponentFixture<ArtistnamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistnamesComponent]
    });
    fixture = TestBed.createComponent(ArtistnamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
