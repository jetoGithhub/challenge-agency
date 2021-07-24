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
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 42,
    minZoom: 6,
  }
  center: google.maps.LatLngLiteral = {} as google.maps.LatLngLiteral;
  markers: any = [];
  constructor(
    private editController: EditControllerService,
  ) { }

  ngOnInit(): void {
    this.agency = { ...this.editController.agency };
    if(!this.agency.lat || !this.agency.lon) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }
      });
    }

    if(this.agency) {
      this.addMarker();
      this.center = {
        lat: Number(this.agency.lon),
        lng: Number(this.agency.lat),
      }
    }
  }
  addMarker() {
    this.markers.push({
      position: {
        lat: Number(this.agency.lon),
        lng: Number(this.agency.lat),
      },
      label: {
        color: 'red',
        text: this.agency.agencia,
      },
      title: this.agency.direccion,
      options: { animation: google.maps.Animation.BOUNCE },
    });
  }

  submitAgency(evt: any) {
    this.editController.upsert(evt);
    this.goToList();
  }

  goToList() {
    this.editController.destroy()
    this.editController.goToList();
  }

}
