import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonItemPage } from './ion-item.page';

describe('IonItemPage', () => {
  let component: IonItemPage;
  let fixture: ComponentFixture<IonItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
