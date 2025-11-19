import { Component, effect, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { Startup, StartupsService } from './startups.service';
import { SlicePipe } from '@angular/common';

@Component({
  selector: 'app-startups',
  templateUrl: './startups.component.html',
  styleUrls: ['./startups.component.css'],
  imports: [NzPaginationModule , SlicePipe],
})
export class StartupsComponent implements OnInit {
  startupsService = inject(StartupsService);
  router = inject(Router);

  displayedStartups: Startup[] = [];
  pageIndex = 1;
  pageSize = 6;

  constructor() {
    
    effect(() => {
      const startups = this.startupsService.startups();
      this.updateDisplayedStartups(startups);
    });
  }

  ngOnInit(): void {
    // Ensure startups load when the component mounts
    if (this.startupsService.startups().length === 0) {
      this.startupsService.loadStartups();
    }
  }

  updateDisplayedStartups(allStartups: Startup[]): void {
    const startIndex = (this.pageIndex - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedStartups = allStartups.slice(startIndex, endIndex);
  }

  onPageChange(page: number): void {
    this.pageIndex = page;
    this.updateDisplayedStartups(this.startupsService.startups());
  }

  openStartupProfile(id: number): void {
    this.router.navigate(['/startups/profile', id]);
  }
}
