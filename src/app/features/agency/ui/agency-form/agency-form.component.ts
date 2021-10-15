import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AgencyEntity } from '../../core/domain/angency.entity';

@Component({
  selector: 'app-agency-form',
  templateUrl: './agency-form.component.html',
  styleUrls: ['./agency-form.component.scss']
})
export class AgencyFormComponent {
  private _agency: AgencyEntity = {} as AgencyEntity;
  agencyForm = new FormGroup({
    agencia: new FormControl('', [Validators.required]),
    distrito: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    lat: new FormControl('', [Validators.required]),
    lon: new FormControl('', [Validators.required]),
  });

  @Input()
  set agency(value: AgencyEntity | null | undefined) {
    if(value) {
      this._agency = value;
      this.agencyForm.patchValue(value);
    }
  }

  @Output() back: EventEmitter<void> = new EventEmitter();
  @Output() submit: EventEmitter<any> = new EventEmitter();

  constructor() { }
  backClicked() {
    this.back.emit();
    this.reset();
  }
  sendForm() {
    if(this.agencyForm.valid) {
      this.submit.emit({
        ...this._agency,
        ...this.agencyForm.value
      });
      this.reset();
    }
  }

  reset() {
    this._agency = {} as AgencyEntity;
    this.agencyForm.reset();
  }
}
