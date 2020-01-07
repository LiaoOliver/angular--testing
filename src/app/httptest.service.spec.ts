/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttptestService } from './httptest.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

describe('Service: Httptest', () => {

  const url = 'https://enigmatic-chamber-83707.herokuapp.com/air';
  let httpTestingController: HttpTestingController;
  let httpTestService: HttptestService;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttptestService]
    });

    // 測試中發起的這些請求會發給這些測試用的後端（testing backend），而不是標準的後端
    httpTestService = TestBed.get(HttptestService)
    httpTestingController = TestBed.get(HttpTestingController);
  })

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    // 確保有發出請求
    httpTestingController.verify();
  });

  it('Http Service testing', ()=>{
    // 等待 GET 請求並給出模擬響應
    const emsg = 'deliberate 404 error';
    httpTestService.getAPI().subscribe(data => {
      expect(data).toBe(22)
    }, (error: HttpErrorResponse) => {
      expect(error.status).toEqual(404, 'status')
    })
    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('GET');

    // 模擬回應的內容
    req.flush(emsg, { status: 404, statusText: 'Not Found' });
  })

});
