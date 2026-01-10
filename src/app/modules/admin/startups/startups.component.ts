import {
  Component,
  computed,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { Router } from '@angular/router';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { SlicePipe } from '@angular/common';
import {
  StartupsService,
  Startup,
} from './../../../core/services/startups.service';

@Component({
  selector: 'app-startups',
  standalone: true,
  templateUrl: './startups.component.html',
  styleUrls: ['./startups.component.css'],
  imports: [NzPaginationModule, SlicePipe],
})
export class StartupsComponent implements OnInit {
  router = inject(Router);
  startupsService = inject(StartupsService);

  pageIndex = 1;
  pageSize = 6;
  displayedStartups = signal<Startup[]>([]);
  startups = this.startupsService.startups;

  constructor() {
    // Update displayedStartups whenever the main list changes
    effect(() => {
      this.updateDisplayedStartups(this.startupsService.startups());
    });
  }

  ngOnInit(): void {
    if (this.startupsService.startups().length === 0) {
      this.startupsService.loadStartups();
    }
  }

  updateDisplayedStartups(allStartups: Startup[]): void {
    const startIndex = (this.pageIndex - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedStartups.set(allStartups.slice(startIndex, endIndex));
  }

  onPageChange(page: number): void {
    this.pageIndex = page;
    this.updateDisplayedStartups(this.startupsService.startups());
  }

  openStartupProfile(id: number): void {
    this.router.navigate(['/startups/profile', id]);
  }
}
