import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tariff } from '../model/tariff';
import { HttpClient } from '@angular/common/http';
import { ApiConstants } from '../constants/api-url.constant';

@Injectable({
  providedIn: 'root'
})
export class TariffService {

 constructor(private http: HttpClient) { }

  getTariffs(): Observable<Tariff[]> {
    return this.http.get<Tariff[]>(ApiConstants.GET_TARIFF_PLANS);
  }

}
