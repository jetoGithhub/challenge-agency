import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyRoutingModule } from './agency-routing.module';
import { AgencyComponent } from './agency.component';
import { HttpClientModule } from '@angular/common/http';
import { AgencyStateService } from 'src/app/data/state/agency-state.service';
import { ListComponent } from 'src/app/features/agency/views/list/list.component';
import { UiModule } from './ui/ui.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AgencyComponent,
    ListComponent,
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
    AgencyStateService,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AgencyModule { }
