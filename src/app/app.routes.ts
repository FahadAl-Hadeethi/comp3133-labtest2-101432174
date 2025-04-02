import { Routes } from '@angular/router';
import { MissionboardComponent } from './components/missionboard/missionboard.component';
import { MissiondetailsComponent } from './components/missiondetails/missiondetails.component';

export const routes: Routes = [
  { path: '', component: MissionboardComponent },
  { path: 'mission/:id', component: MissiondetailsComponent },
  { path: '**', redirectTo: '' }
];
