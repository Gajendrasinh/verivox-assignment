import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { TariffService } from './tariff.service';
import { Tariff } from '../model/tariff';
import { ApiConstants } from '../constants/api-url.constant';

const mockTariffs: Tariff[] = [
  {
     "id":1,
     "name":"Basic",
     "downloadSpeed":50,
     "uploadSpeed":10,
     "price":12345,
     "benefits":[
        "Tarif Benefit 1",
        "Tarif Benefit 2",
        "Tarif Benefit 3"
     ]
  },
  {
     "id":2,
     "name":"Standard",
     "downloadSpeed":100,
     "uploadSpeed":20,
     "price":12345,
     "benefits":[
        "Tarif Benefit 1",
        "Tarif Benefit 2",
        "Tarif Benefit 3"
     ]
  },
  {
     "id":3,
     "name":"Premium",
     "downloadSpeed":200,
     "uploadSpeed":50,
     "price":12345,
     "benefits":[
        "Tarif Benefit 1",
        "Tarif Benefit 2",
        "Tarif Benefit 3"
     ]
  }
];

describe('TariffService', () => {
  let service: TariffService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TariffService]
    });

    service = TestBed.inject(TariffService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure no outstanding HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected tariff plans', (done) => {

    service.getTariffs().subscribe((tariffs) => {
      expect(tariffs).toEqual(mockTariffs);
      done();
    });

    const req = httpMock.expectOne(ApiConstants.GET_TARIFF_PLANS);
    expect(req.request.method).toBe('GET');
    req.flush(mockTariffs);
  });
});
