import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ViewPage } from './view.page';

describe('ViewPage', () => {
  let component: ViewPage;
  let fixture: ComponentFixture<ViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
