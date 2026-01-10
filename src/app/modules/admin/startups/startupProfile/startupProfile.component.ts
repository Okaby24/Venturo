import { Component, effect, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Startup,
  StartupsService,
} from '../../../../core/services/startups.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-startupProfile',
  templateUrl: './startupProfile.component.html',
  styleUrls: ['./startupProfile.component.css'],
  imports: [CurrencyPipe],
})
export class StartupProfileComponent implements OnInit {
  route = inject(ActivatedRoute);
  startupsService = inject(StartupsService);
  router = inject(Router);

  startup?: Startup;
  id = Number(this.route.snapshot.paramMap.get('id'));

  // Flag to indicate if the profile has loaded
  isProfileLoaded = false;

  constructor() {
    // Effect will reactively update startup if service data changes
    effect(() => {
      const data = this.startupsService.getStartupById(this.id);
      if (data) {
        this.startup = data;
        this.isProfileLoaded = true; // Profile is loaded
      } else {
        this.isProfileLoaded = false; // No data yet
      }
    });
  }

  goToContact() {
    this.router.navigate([`/startups/profile/${this.id}/contact`]);
  }

  ngOnInit(): void {
    // Initial fetch (in case effect hasn't triggered yet)
    const data = this.startupsService.getStartupById(this.id);
    if (data) {
      this.startup = data;
      this.isProfileLoaded = true;
    }
  }
}
