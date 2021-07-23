import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { AgencyEntity } from 'src/app/core/entities/angency.entity';
import { EditControllerService } from '../../controllers/edit-controller.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements AfterViewInit {
  agency: AgencyEntity = {} as AgencyEntity;
  constructor(
    private editController: EditControllerService,
    private cd: ChangeDetectorRef,
  ) { }

  ngAfterViewInit() {
    this.editController.agency.subscribe(data => {
      this.agency = { ...data } as AgencyEntity;
      this.cd.detectChanges();
      console.log('kkkkk', data, this.agency);
    })
  }

  submitAgency(evt: any) {
    this.editController.upsert(evt);
  }

  goToList() {
    this.editController.goToList();
  }

}
