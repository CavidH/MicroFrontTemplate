import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {TestComponent} from "./test/test.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'test',
    component: TestComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: HomeComponent

  }
];
