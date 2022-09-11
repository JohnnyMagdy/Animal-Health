import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesandpostsListComponent } from './articlesandposts-list.component';

describe('ArticlesandpostsListComponent', () => {
  let component: ArticlesandpostsListComponent;
  let fixture: ComponentFixture<ArticlesandpostsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesandpostsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlesandpostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
