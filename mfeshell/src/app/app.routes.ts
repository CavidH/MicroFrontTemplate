import {Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {loadRemoteModule} from "@angular-architects/native-federation";

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'mfeone',
    loadChildren: () =>
      loadRemoteModule('mfeone', './Routes').then((m) => m.routes)
  },
  {
    path: 'mfetwo',
    loadChildren: () =>
      loadRemoteModule('mfetwo', './Routes').then((m) => m.routes)
  }
];
