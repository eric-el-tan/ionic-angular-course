import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IonLabelPage } from './ion-label.page';

describe('IonLabelPage', () => {
  let component: IonLabelPage;
  let fixture: ComponentFixture<IonLabelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonLabelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IonLabelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
