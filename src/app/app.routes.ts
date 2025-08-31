import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'comming-soon', component: ComingSoonComponent },
  { path: '**', redirectTo: '' } 
];
