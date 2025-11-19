import { Route } from '@angular/router';
import { HomeComponent } from './modules/admin/home/home.component';
import { StartupsComponent } from './modules/admin/startups/startups.component';
import { RegisterComponent } from './modules/admin/register/register.component';
import { ReviewsComponent } from './modules/admin/reviews/reviews.component';
import { ContactComponent } from './modules/admin/contact/contact.component';
import { CareersComponent } from './modules/admin/careers/careers.component';


// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [
  // Redirect empty path to '/example'
  { path: '', pathMatch: 'full', redirectTo: 'home' },

  // Admin routes
  {
    path: '',
    data: {
      layout: 'empty',
    },
    // component: LayoutShellComponent,
    children: [
      
        {path: 'home', loadComponent: () => import('./modules/admin/home/home.component').then(m => m.HomeComponent)}
      ,
      // { path: 'home', component: HomeComponent, 
        
      // },
    
       {path: 'startups', loadChildren: () => import('./modules/admin/startups/startups.routes').then(m => m.STARTUPS_ROUTES)},
   
      {
        path: 'register' , loadComponent: () => import('./modules/admin/register/register.component').then(m => m.RegisterComponent)
      },
      
      {
        path: 'reviews' , loadComponent: () => import('./modules/admin/reviews/reviews.component').then(m => m.ReviewsComponent)
      },
      
      {
        path: 'contact' , loadComponent: () => import('./modules/admin/contact/contact.component').then(m => m.ContactComponent)
      },
      
      {
        path: 'careers' , loadComponent: () => import('./modules/admin/careers/careers.component').then(m => m.CareersComponent)
      },
    ],
  },
];
