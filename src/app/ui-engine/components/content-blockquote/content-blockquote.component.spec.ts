import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBlockquoteComponent } from './content-blockquote.component';

describe('ContentBlockquoteComponent', () => {
  let component: ContentBlockquoteComponent;
  let fixture: ComponentFixture<ContentBlockquoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentBlockquoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentBlockquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
