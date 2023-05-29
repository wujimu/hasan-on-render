import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api-service.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });

    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should make an API call and return data', (done) => {
    const mockData = { foo: 'bar' };
    const apiEndpoint = '/api/data';

    service.getData(apiEndpoint).subscribe((data) => {
      expect(data).toEqual(mockData);
      done();
    });

    const req = httpTestingController.expectOne(apiEndpoint);
    expect(req.request.method).toEqual('GET');
    req.flush(mockData);
  });

  it('should return cached data on subsequent calls', (done) => {
    const mockData = { foo: 'bar' };
    const apiEndpoint = '/api/data';

    service.getData(apiEndpoint).subscribe((data) => {
      expect(data).toEqual(mockData);

      service.getData(apiEndpoint).subscribe((cachedData) => {
        expect(cachedData).toEqual(mockData);
        done();
      });
    });

    const req = httpTestingController.expectOne(apiEndpoint);
    expect(req.request.method).toEqual('GET');
    req.flush(mockData);
  });

  it('should handle errors', (done) => {
    const apiEndpoint = '/api/data';

    service.getData(apiEndpoint).subscribe(
      () => {
        fail('should have thrown an error');
      },
      (error) => {
        expect(error).toBeTruthy();
        done();
      }
    );

    const req = httpTestingController.expectOne(apiEndpoint);
    expect(req.request.method).toEqual('GET');
    req.flush(null, { status: 500, statusText: 'Server Error' });
  });
});
