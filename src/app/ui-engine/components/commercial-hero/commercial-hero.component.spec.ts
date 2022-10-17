import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialHeroComponent } from './commercial-hero.component';

describe('CommercialHeroComponent', () => {
  let component: CommercialHeroComponent;
  let fixture: ComponentFixture<CommercialHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialHeroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommercialHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
