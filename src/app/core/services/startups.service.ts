import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../utils/API_URLS';

export interface Startup {
  id: number;
  title: string;
  description: string;
  image: string;
  industry: string;
  founded: string;
  employees: string;
  revenue: number;
  profitMargin: string;
  funding: number;
  location: string;
  website: string;
}

@Injectable({
  providedIn: 'root',
})
export class StartupsService {
  startups = signal<Startup[]>([]);
  loading = signal<boolean>(true);

  constructor(private http: HttpClient) {
    this.loadStartups();
  }

  loadStartups(): void {
    this.loading.set(true);
    this.http.get<Startup[]>(API_URLS.Startups.getStartups).subscribe({
      next: (data) => {
        this.startups.set(data);
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Failed to load startups', err);
        this.loading.set(false);
      },
    });
  }

  getStartupById(id: number): Startup | undefined {
    return this.startups().find((s) => s.id === id);
  }
}
