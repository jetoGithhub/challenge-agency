import { Component, OnInit } from '@angular/core';
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

    /**
     * Ejercicio entevista
     */
    const data = [89, 5, 21, 7, 144, 7, 34, 233, 55];
    let serieFibonacci = this.createFibonacci(100);
    let filterFibonacci = this.filterFibonacci(data, serieFibonacci);
    console.log(this.sortFibonacci(filterFibonacci));
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

  createFibonacci(maxLenght: number) {
    let next: number = 1;
    let serie: number[] = [];
    for(let i= 0; i <=maxLenght; i++) {
     if(next === 1) {
       serie.push(next)
       next ++;
     } else {
       serie.push(next);
       next = next + serie[serie.length - 2];
     }
    }

    return serie;
  }

  filterFibonacci(data: number[], serieFibonacci: number[]) {
    let finbonacci: number[] = [];
    data.forEach((value) => {
      if(serieFibonacci.indexOf(value) != -1) {
        finbonacci.push(value);
      }
   });

    return finbonacci;
  }

  sortFibonacci(data: number[]) {
    let aux;
    for(let i = 1; i<= data.length -1; i++) {
       for(let j = 0; j <= data.length - i -1; j++) {
         if(data[j] > data[j+1]) {
           aux = data[j];
           data[j] = data[j + 1];
           data[j +1] = aux;
         }
       }
    }

    return data;
  }
}
