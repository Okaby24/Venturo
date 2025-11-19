import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { sidebarService } from '../sidebar/sidebar.service';
import { LucideAngularModule } from 'lucide-angular';
import {
  Building2,
  CircleChevronLeft,
  ClipboardList,
  FileText,
  LayoutDashboard,
  PenLine,
  Phone
} from 'lucide-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-mobile',
  standalone: true,
  templateUrl: './navbar-mobile.component.html',
  styleUrls: ['./navbar-mobile.component.css'],
  imports: [CommonModule , LucideAngularModule]
})
export class NavbarMobileComponent {
  menuOpen = false;
  showNavbar = false;
  sidebarService = inject(sidebarService)
  isCollapsed = this.sidebarService.isCollapsed;
  private router = inject(Router);

  private lastScroll = 0;

  activeRoute = signal(this.router.url);

  constructor(){
     this.router.events.subscribe(() => {
    this.activeRoute.set(this.router.url);
  });
  }

  
menuItems = [
  { label: 'Dashboard', icon: LayoutDashboard, route: '/home' },
  { label: 'Startups', icon: Building2, route: '/startups' },
  { label: 'Register a Startup', icon: PenLine, route: '/register' },
  { label: 'Reviews', icon: ClipboardList, route: '/reviews' },
  { label: 'Contact Us', icon: Phone, route: '/contact' },
  { label: 'Careers', icon: FileText, route: '/careers' },
];

activeIndex = 0;
  activeIndicatorPosition = 0;

  selectItem(index: number, itemRef: ElementRef) {
    this.activeIndex = index;

    // Get the left position of the clicked item relative to parent
    const parent = itemRef.nativeElement.parentElement;
    const offsetLeft = itemRef.nativeElement.offsetLeft;

    this.activeIndicatorPosition = offsetLeft;
  }



  
navigateTo(route: string) {
  this.activeRoute.set(route);
  this.router.navigate([route]);
}
}
