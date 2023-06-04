import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { KalkulatorService } from "./kalkulator.service";

@Component({
    selector: 'app-syn',
    templateUrl: './syn.html',
    styleUrls: ['syn.component.css']
})

export class SynComponent implements OnInit{
    @Input() zmiennaInput!: string[];

    @Output() odpowiedz=new EventEmitter<string>();
    dodawanie: number=0;
    odejmowanie: number=0;
    mnozenie: number=0;
    dzielenie: number=0;
    constructor(kalkulator:KalkulatorService){
        this.dodawanie=kalkulator.dodaj(1,2,3,4,5); //15
        this.odejmowanie=kalkulator.odejmij(10,3,1); //6
        this.mnozenie=kalkulator.pomnoz(2,2,4); //16
        this.dzielenie=kalkulator.podziel(20,5,2); //2
    }

    ngOnInit(): void {}

    wyslanie(){
        this.odpowiedz.emit('Będę czekał');
    }


}