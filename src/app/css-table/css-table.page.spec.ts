import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CssTablePage } from './css-table.page';

describe('CssTablePage', () => {
  let component: CssTablePage;
  let fixture: ComponentFixture<CssTablePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssTablePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CssTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
