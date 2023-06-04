import { Component, Output, EventEmitter} from '@angular/core';
import { KalkulatorService } from "../components/kalkulator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [KalkulatorService]

})
export class AppComponent {
  title = 'komponenty';
  dodawanie: number=0;
  constructor(kalkulator: KalkulatorService){
    this.dodawanie=kalkulator.dodaj(3,6,7,9,2);
  }
  zmiennaExport:string[]=["17:00","pływalnia"];
  onOdpowiedz(otrzymane: string){
    alert(otrzymane);
  }
}
