import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-agency-toolbar',
  templateUrl: './agency-toolbar.component.html',
  styleUrls: ['./agency-toolbar.component.scss']
})
export class AgencyToolbarComponent {
  showForm = false;
  @Input()
  title: string = '';
  @Input()
  showOption: boolean = false;
  @Output()
  search: EventEmitter<string> = new EventEmitter();

  onInput(evt: any) {
    this.search.emit(evt?.target?.value);
  }

}
