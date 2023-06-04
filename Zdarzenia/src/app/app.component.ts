import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zdarzenia_formularze_kolpaczek_maciej';

  imie: string="";
  email: string="Prosze podac email";
  produkt: string="";
  ilosc: number=0;
  wiadomosc: string="Jesli masz uwagi, wpisz je tu";
  onSubmit(){
    console.log(this.imie, 'dziekujemy za zamowienie', this.produkt, 'w ilosci', this.ilosc, 'Sczegoly zamowienia zostaly wyslane na adres email', this.email, 'Dziekujemy za uwagi:', this.wiadomosc);
  }
}
