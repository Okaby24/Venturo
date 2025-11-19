import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class sidebarService{
    isCollapsed = signal(false);
    isHiddenOnMobile = signal(false);

}