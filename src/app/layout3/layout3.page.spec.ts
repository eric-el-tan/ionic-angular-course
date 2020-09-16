import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Layout3Page } from './layout3.page';

describe('Layout3Page', () => {
  let component: Layout3Page;
  let fixture: ComponentFixture<Layout3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Layout3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Layout3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
