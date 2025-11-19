import { Component, computed, HostListener, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { SidebarComponent } from "./modules/admin/sidebar/sidebar.component";
import { CommonModule } from '@angular/common';
import { sidebarService } from './modules/admin/sidebar/sidebar.service';
import { NavbarMobileComponent } from './modules/admin/navbar-mobile/navbar-mobile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    RouterOutlet,
    SidebarComponent,
    NavbarMobileComponent,
    CommonModule
],
})
export class AppComponent implements OnInit {

  sidebarService = inject(sidebarService);
  logged = false;
  screenWidth = signal(window.innerWidth);

  private applyResponsiveRules() {
  const width = this.screenWidth();
  this.sidebarService.isHiddenOnMobile.set(false)

  // hide sidebar on very small screens
  if(width <=500){

    this.sidebarService.isHiddenOnMobile.set(true);
    this.sidebarService.isCollapsed.set(false);
  }

  // collapse sidebar on mobile/tablet
  if(width <=800){
    this.sidebarService.isCollapsed.set(true);
    this.sidebarService.isHiddenOnMobile.set(false)

  }
}

  @HostListener('window:resize')
onResize() {
  this.screenWidth.set(window.innerWidth);
  this.applyResponsiveRules();
}


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
