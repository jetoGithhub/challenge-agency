import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AgencyCardComponent } from './agency-card/agency-card.component';
import { AgencyFormComponent } from './agency-form/agency-form.component';
import { AgencyToolbarComponent } from './agency-toolbar/agency-toolbar.component';

@NgModule({
  declarations: [
    AgencyCardComponent,
    AgencyToolbarComponent,
    AgencyFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    GoogleMapsModule
  ],
  exports: [
    AgencyCardComponent,
    AgencyToolbarComponent,
    AgencyFormComponent,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline ' },
    },
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class UiModule {}
