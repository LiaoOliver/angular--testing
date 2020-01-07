/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';
import { AppService } from './app.service';
import { DataService } from './data.service';
import { demo } from './demoData';

describe('Service: App', () => {

  let withoutTestBedService: AppService;
  let withoutTestBedBringRely: AppService;
  let testBedService: AppService;
  // ## 建立間諜物件
  let testBedDataServiceSpy: jasmine.SpyObj<DataService>;

  beforeEach(() => {
    // # 不帶測試機床的協助
    withoutTestBedService = new AppService(null);

    // ## 測試機床帶依賴服務，建立間諜物件
    const testBedSpy = jasmine.createSpyObj('DataService', ['getData']);

    // ## 測試機床 TestBed 的 TestBed.configureTestingModule 載入依賴的來源
    // Provide both the service-to-test and its (spy) dependency
    TestBed.configureTestingModule({
      // 在 providers 屬性上注入服務 ( service )
      providers: [
        AppService,
        // 在 providers 注入模擬物件，是一個間諜（spy）物件
        { provide: DataService, useValue: testBedSpy }
      ]
    });

    // 透過呼叫 TestBed.get(引數為一個 service) 存入到區域變數上 給測試取用
    testBedService = TestBed.get(AppService);
    testBedDataServiceSpy = TestBed.get(DataService);

  });

  // # 不帶測試機床的協助
  it('# without TestBed getValue', ()=>{
    expect(withoutTestBedService.getValue(4,5)).toBe(9);
  })

  // # 帶有依賴的服務，手動建立注入依賴，直接注入真實的服務容易出現意外的問題，改用模擬依賴的方法
  it('# without TestBed Bring Rely', ()=>{
    // 注入依賴的服務
    withoutTestBedBringRely = new AppService(new DataService);
    expect(withoutTestBedBringRely.getData()).toBeTruthy();
  })

  // # 帶有依賴的服務，用間諜 (SPY) 在相關的服務上建立模擬依賴
  it('# without TestBed Bring Rely By Jasmine Spy', ()=>{
    // create `getValue` spy on an object 建立間諜物件
    const dataServiceSpy = jasmine.createSpyObj('DataService', ['getData']);
    // set the value to return when the `getValue` spy is called. 當作輸入的值
    const stubValue = demo;
    // 輸入函式
    dataServiceSpy.getData.and.returnValue(stubValue);
    // 模擬實體
    let dataService = new AppService(dataServiceSpy);
    expect(dataService.getData().length).toBe(4);
  })

  // ## 測試機床
  it('## From TestBed result', ()=>{
    // 取用區域變數得到服務的方法
    expect(testBedService.getValue(6,7)).toBe(13);
  })

  // ## 測試機床 用間諜物件模擬帶有依賴的情境
  it('## From TestBed , mock data', ()=>{
    const stubValue = demo;
    testBedDataServiceSpy.getData.and.returnValue(stubValue);
    expect(testBedDataServiceSpy.getData().length).toBe(4)
  })

});
