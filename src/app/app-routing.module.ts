import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './About/about.component';
import {HomeComponent} from './Home/home.component';
import { AppComponent } from './app.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'about',
		component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
