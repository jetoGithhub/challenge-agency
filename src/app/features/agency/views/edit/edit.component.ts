import { Component } from '@angular/core';
import { AgencyEntity } from '../../core/domain/angency.entity';
import { EditAgencyPresenter } from './edit-agency.presenter';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
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
    public presenter: EditAgencyPresenter,
  ) { }

  ngOnInit(): void {
    // this.agency = { ...this.editController.agency };
    // if(!this.agency.lat || !this.agency.lon) {
    //   navigator.geolocation.getCurrentPosition((position) => {
    //     this.center = {
    //       lat: position.coords.latitude,
    //       lng: position.coords.longitude,
    //     }
    //   });
    // }

    // if(this.agency) {
    //   this.addMarker();
    //   this.center = {
    //     lat: Number(this.agency.lon),
    //     lng: Number(this.agency.lat),
    //   }
    // }
  }
  addMarker() {
    // this.markers.push({
    //   position: {
    //     lat: Number(this.agency.lon),
    //     lng: Number(this.agency.lat),
    //   },
    //   label: {
    //     color: 'red',
    //     text: this.agency.agencia,
    //   },
    //   title: this.agency.direccion,
    //   options: { animation: google.maps.Animation.BOUNCE },
    // });
  }

}
