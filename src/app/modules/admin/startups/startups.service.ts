import { Injectable, signal } from '@angular/core';

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

  constructor() {
    this.loadStartups();
  }

  loadStartups(): void {
    this.loading.set(true);

    setTimeout(() => {
      const mockData: Startup[] = [
        {
          id: 1,
          title: 'TechVision',
          description: `An AI-driven analytics startup providing insights for businesses worldwide. An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          validAn AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          valid
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          I-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          validAn AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          valid
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.
          An AI-driven analytics startup providing insights for businesses worldwide.`,
          image: 'assets/startupExample.svg',
          industry: 'e-commerce',
          founded: '2012',
          employees: '30',
          revenue: 20000000,
          profitMargin: '30',
          funding: 50000000,
          location: 'Sheikh Zayed',
          website: 'https://chatgpt.com/c/690b3c1f-2404-832e-a222-c7735b1adb32',
        },
        {
          id: 2,
          title: 'GreenLeaf',
          description:
            'A sustainable agriculture startup focused on organic food solutions.',
          image: 'assets/startupExample.svg',
          industry: '',
          founded: '',
          employees: '',
          revenue: 0,
          profitMargin: '',
          funding: 0,
          location: '',
          website: '',
        },
        {
          id: 3,
          title: 'HealthPlus',
          description:
            'A telemedicine startup offering virtual healthcare consultations.',
          image: 'assets/startupExample.svg',
          industry: '',
           founded: '',
          employees: '',
          revenue: 0,
          profitMargin: '',
          funding: 0,
          location: '',
          website: '',
        },
        {
          id: 4,
          title: 'EcoWave',
          description:
            'A renewable energy startup specializing in tidal power generation.',
          image: 'assets/startupExample.svg',
          industry: '',
           founded: '',
          employees: '',
          revenue: 0,
          profitMargin: '',
          funding: 0,
          location: '',
          website: '',
        },
        {
          id: 5,
          title: 'FinSmart',
          description:
            'A fintech company simplifying personal finance through smart budgeting apps.',
          image: 'assets/startupExample.svg',
          industry: '',
           founded: '',
          employees: '',
          revenue: 0,
          profitMargin: '',
          funding: 0,
          location: '',
          website: '',
        },
        {
          id: 6,
          title: 'NextGen Robotics',
          description:
            'A robotics startup automating industrial manufacturing processes.',
          image: 'assets/startupExample.svg',
          industry: '',
           founded: '',
          employees: '',
          revenue: 0,
          profitMargin: '',
          funding: 0,
          location: '',
          website: '',
        },
        {
          id: 7,
          title: 'NextGen',
          description:
            'A robotics startup automating industrial manufacturing processes.',
          image: 'assets/startupExample.svg',
          industry: '',
           founded: '',
          employees: '',
          revenue: 0,
          profitMargin: '',
          funding: 0,
          location: '',
          website: '',
        },
        {
          id: 8,
          title: 'Robotics',
          description:
            'A robotics startup automating industrial manufacturing processes.',
          image: 'assets/startupExample.svg',
          industry: '',
           founded: '',
          employees: '',
          revenue: 0,
          profitMargin: '',
          funding: 0,
          location: '',
          website: '',
        },
        {
          id: 9,
          title: 'tics',
          description:
            'A robotics startup automating industrial manufacturing processes.',
          image: 'assets/startupExample.svg',
          industry: '',
           founded: '',
          employees: '',
          revenue: 0,
          profitMargin: '',
          funding: 0,
          location: '',
          website: '',
        },
      ];

      // Set data and stop loading
      this.startups.set(mockData);
      this.loading.set(false);
    }, 1500); // Simulate 1 second delay
  }

  getStartupById(id: number): Startup | undefined {
    return this.startups().find((s) => s.id === id);
  }
}
