import { Component, computed, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { SidebarComponent } from "./modules/admin/sidebar/sidebar.component";
import { CommonModule } from '@angular/common';
import { sidebarService } from './modules/admin/sidebar/sidebar.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
    SidebarComponent,
    CommonModule
],
})
export class AppComponent implements OnInit {

  sidebarService = inject(sidebarService);
  logged = false;

  


  isCollapsed = computed(() => this.sidebarService.isCollapsed());
  isHiddenOnMobile = computed(() => this.sidebarService.isHiddenOnMobile());

window: any;
  constructor() {
    console.log('AppComponent initialized in mfe2');
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.logged = true;
      console.log('User logged in!');
    }, 3000);
  }
}
