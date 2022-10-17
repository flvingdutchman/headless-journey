import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComercialStoryTellingComponent } from './comercial-story-telling.component';

describe('ComercialStoryTellingComponent', () => {
  let component: ComercialStoryTellingComponent;
  let fixture: ComponentFixture<ComercialStoryTellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComercialStoryTellingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComercialStoryTellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
