import { TestBed } from '@angular/core/testing';

import { OpenWeatherappService } from './open-weatherapp.service';

describe('OpenWeatherappService', () => {
  let service: OpenWeatherappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenWeatherappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
