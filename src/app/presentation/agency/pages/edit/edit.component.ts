import { Component, OnInit } from '@angular/core';
import { AgencyEntity } from 'src/app/core/entities/angency.entity';
import { EditControllerService } from '../../controllers/edit-controller.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  agency: AgencyEntity = {} as AgencyEntity;
  constructor(
    private editController: EditControllerService,
  ) { }

  ngOnInit(): void {
    console.log(this.editController.agency);
    this.agency = { ...this.editController.agency }
  }

  submitAgency(evt: any) {
    this.editController.upsert(evt);
  }

  goToList() {
    this.editController.goToList();
  }

}
