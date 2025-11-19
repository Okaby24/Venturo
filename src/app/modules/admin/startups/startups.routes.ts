import { Routes } from '@angular/router';
import { StartupsComponent } from './startups.component';
import { StartupProfileComponent } from './startupProfile/startupProfile.component';
import { StartupContactComponent } from './startupProfile/startupContact/startupContact.component';


export const STARTUPS_ROUTES: Routes = [
  { path: '', component: StartupsComponent },
  { path: 'profile/:id', component: StartupProfileComponent },
  {path:'profile/:id/contact' , component: StartupContactComponent}
];
