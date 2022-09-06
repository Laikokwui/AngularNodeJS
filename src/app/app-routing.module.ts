import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BoatComponent } from './components/boat/boat.component';
import { ParentComponent } from './components/parent/parent.component';
import { CustomerlistComponent } from './components/customerlist/customerlist.component';
import { CustomercreateComponent } from './components/customercreate/customercreate.component';
import { CustomerupdateComponent } from './components/customerupdate/customerupdate.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'boat', component: BoatComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'customer', component: CustomerlistComponent },
  { path: 'customer/create', component: CustomercreateComponent },
  { path: 'customer/:id', component: CustomerupdateComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
