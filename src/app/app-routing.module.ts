import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'agency', pathMatch: 'full'},
  { path: 'agency', loadChildren: () => import('./features/agency/agency.module').then(m => m.AgencyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
