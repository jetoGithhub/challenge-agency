import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyRoutingModule } from './agency-routing.module';
import { AgencyComponent } from './agency.component';
import { HttpClientModule } from '@angular/common/http';
import { UiModule } from './ui/ui.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ListComponent } from './views/list/list.component';
import { EditComponent } from './views/edit/edit.component';
import { AgencyStateService } from './models/agency-state.service';


@NgModule({
  declarations: [
    AgencyComponent,
    ListComponent,
    EditComponent,
  ],
  imports: [
    CommonModule,
    AgencyRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    UiModule,
  ],
  providers: [
    AgencyStateService
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AgencyModule { }
