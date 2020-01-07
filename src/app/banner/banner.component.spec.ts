import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {
  // 宣告共用變數
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      // 宣告要測試的元件
      declarations: [BannerComponent]
    });

    fixture = TestBed.createComponent(BannerComponent); // fixture 建立一個 BannerComponent 的例項
    component = fixture.componentInstance; // componentInstance => TestBed.createComponent 建立的元件類例項
  })
  
  describe('BannerComponent (minimal)', () => {
    it('should create', () => {
      expect(component).toBeDefined();
    });

    it('should contain banner work!!', ()=>{
      // 從 fixture.nativeElement 中獲取元件的元素
      const bannerElement: HTMLElement = fixture.debugElement.nativeElement;
      const tagContent = bannerElement.querySelector('p').textContent;
      expect(tagContent).toContain('banner works!')
    })
  });

});
