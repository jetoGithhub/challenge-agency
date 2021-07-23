import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AgencyEntity } from 'src/app/core/entities/angency.entity';

@Component({
  selector: 'app-agency-form',
  templateUrl: './agency-form.component.html',
  styleUrls: ['./agency-form.component.scss']
})
export class AgencyFormComponent {

  agencyForm = new FormGroup({
    agencia: new FormControl('', [Validators.required]),
    distrito: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    lat: new FormControl('', [Validators.required]),
    lon: new FormControl('', [Validators.required]),
  });

  @Input()
  set agency(value: AgencyEntity | null | undefined) {
    console.log(value);
    if(value) {
      this.agencyForm.patchValue(value);
    }
  }

  @Output() back: EventEmitter<void> = new EventEmitter();
  @Output() submit: EventEmitter<any> = new EventEmitter();

  constructor() { }
  backClicked() {
    this.back.emit();
  }
  sendForm() {
    if(this.agencyForm.valid) {
      return this.submit.emit({...this.agencyForm.value})
    }

    this.agencyForm.markAsDirty()
  }
}
