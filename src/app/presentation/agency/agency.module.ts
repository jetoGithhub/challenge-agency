import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyRoutingModule } from './agency-routing.module';
import { AgencyComponent } from './agency.component';
import { ListComponent } from './pages/list/list.component';
import { EditComponent } from './pages/edit/edit.component';
import { AgencyCardComponent } from './components/agency-card/agency-card.component';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AgencyToolbarComponent } from './components/agency-toolbar/agency-toolbar.component';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { AgencyFormComponent } from './components/agency-form/agency-form.component';


@NgModule({
  declarations: [
    AgencyComponent,
    ListComponent,
    EditComponent,
    AgencyCardComponent,
    AgencyToolbarComponent,
    AgencyFormComponent
  ],
  imports: [
    CommonModule,
    AgencyRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline '}}
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AgencyModule { }
