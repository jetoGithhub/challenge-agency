import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './views/list/list.component';
import { AgencyComponent } from './agency.component';
import { EditComponent } from './views/edit/edit.component';

const routes: Routes = [
  { path: '', component: AgencyComponent, children: [
    { path: '', redirectTo: 'list', pathMatch: 'full'},
    { path: 'list', component: ListComponent },
    { path: 'edit', component: EditComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule { }
