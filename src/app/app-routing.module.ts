import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BoatComponent } from './components/boat/boat.component';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'boat', component: BoatComponent },
  { path: 'parent', component: ParentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
