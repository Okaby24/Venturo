import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URLS } from '../utils/API_URLS';

export interface DashboardData {
  totalExistingStartups: number;
  underInvestigationStartups: number;
  totalUndergoingNegotiations: number;
  weeklySales: number[];
  categories: string[];
  topStartups: string[];
}

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private http: HttpClient) {}

  getDashboard(): Observable<DashboardData> {
    return this.http.get<DashboardData>(API_URLS.Dashboard.getDashboard);
  }
}
