import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';

//-------------------------------------------
import { MockComponent } from 'ng-mocks';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterTestingModule } from '@angular/router/testing';



describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LayoutComponent, MockComponent(HeaderComponent), MockComponent(FooterComponent)]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe("Testing for imperative pieces of the page", () => {
    it('should make sure router-outlet is present', () => {
      //Arrage
      const emailInput = fixture.nativeElement.querySelector("router-outlet");
      //assert
      expect(emailInput).toBeTruthy();
    });

    it('header should be present ', () => {
      //Arrage
      const emailInput = fixture.nativeElement.querySelector("app-header");

      //assert
      expect(emailInput).toBeTruthy();

    });


    it('footer should be present ', () => {
      //Arrage
      const emailInput = fixture.nativeElement.querySelector("app-footer");

      //assert
      expect(emailInput).toBeTruthy();

    });

  })

});
