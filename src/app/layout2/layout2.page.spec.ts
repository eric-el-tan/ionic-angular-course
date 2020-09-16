import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Layout2Page } from './layout2.page';

describe('Layout2Page', () => {
  let component: Layout2Page;
  let fixture: ComponentFixture<Layout2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Layout2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Layout2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
