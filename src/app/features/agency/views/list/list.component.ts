import { Component, OnInit } from '@angular/core';
import { AgencyEntity } from '../../core/domain/angency.entity';
import { ListAgencyPresenter } from './list-agency.presenter';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  showOption = true;

  constructor(
    public presenter: ListAgencyPresenter,
  ) { }

  ngOnInit() {
    this.presenter.loadAgencies();
  }
}
