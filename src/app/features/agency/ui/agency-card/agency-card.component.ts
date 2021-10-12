import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AgencyEntity } from 'src/app/core/entities/angency.entity';

@Component({
  selector: 'app-agency-card',
  templateUrl: './agency-card.component.html',
  styleUrls: ['./agency-card.component.scss']
})
export class AgencyCardComponent {
  @Input()
  agency: AgencyEntity = {} as AgencyEntity;
  @Output()
  clicked: EventEmitter<AgencyEntity> = new EventEmitter();
  onClicked() {
    this.clicked.emit(this.agency);
  }

}
