import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AgencyEntity } from 'src/app/core/entities/angency.entity';
import { ListControllerService } from '../../controllers/list-controller.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  showOption = true;
  agency: AgencyEntity[] = [];

  constructor(
    private agencyController: ListControllerService,
  ) { }

  async ngOnInit() {
    this.agencyController.getAgency().subscribe(agencies => this.agency = agencies);
  }

  editAgency(agency: AgencyEntity) {
    this.agencyController.goToAgencyform(agency);
  }

  createAgency() {
    this.agencyController.goToAgencyform();
  }

  filterAgency(evt: String) {
    this.agency = this.agencyController.filterAngency(evt)
  }
}
