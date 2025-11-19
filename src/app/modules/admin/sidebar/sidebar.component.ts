import { CommonModule } from '@angular/common';
import { Component, computed, effect, HostListener, inject, OnInit, signal } from '@angular/core';
import {
  Building2,
  CircleChevronLeft,
  ClipboardList,
  FileText,
  LayoutDashboard,
  LucideAngularModule,
  PenLine,
  Phone
} from 'lucide-angular';
import { sidebarService } from './sidebar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [LucideAngularModule, CommonModule],
})
export class SidebarComponent implements OnInit {
  readonly sidebarSqueeze = CircleChevronLeft;
  sidebarService = inject(sidebarService);
 isHiddenOnMobile = this.sidebarService.isHiddenOnMobile;
isCollapsed = this.sidebarService.isCollapsed;

screenWidth = signal(window.innerWidth);
private router = inject(Router);


menuItems = [
  { label: 'Dashboard', icon: LayoutDashboard, route: '/home' },
  { label: 'Startups', icon: Building2, route: '/startups' },
  { label: 'Register a Startup', icon: PenLine, route: '/register' },
  { label: 'Reviews', icon: ClipboardList, route: '/reviews' },
  { label: 'Contact Us', icon: Phone, route: '/contact' },
  { label: 'Careers', icon: FileText, route: '/careers' },
];

activeRoute = signal(this.router.url);

constructor() {
  this.router.events.subscribe(() => {
    this.activeRoute.set(this.router.url);
  });
}

ngOnInit() {
  this.applyResponsiveRules();
  console.log(this.isHiddenOnMobile());
  
}

@HostListener('window:resize')
onResize() {
  this.screenWidth.set(window.innerWidth);
  this.applyResponsiveRules();
}

private applyResponsiveRules() {
  const width = this.screenWidth();

  // hide sidebar on very small screens
  this.sidebarService.isHiddenOnMobile.set(width <= 500);

  // collapse sidebar on mobile/tablet
  this.sidebarService.isCollapsed.set(width <= 800);
}

get isToggleDisabled() {
  return this.screenWidth() <= 768;
}

squeeze() {
  if (!this.isToggleDisabled) {
    this.sidebarService.isCollapsed.set(!this.sidebarService.isCollapsed());
  }
}

expand() {
  if (!this.isToggleDisabled) {
    this.sidebarService.isCollapsed.set(false);
  }
}

navigateTo(route: string) {
  this.activeRoute.set(route);
  this.router.navigate([route]);
}
}
