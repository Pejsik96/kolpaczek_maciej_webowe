import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Wlasne';
  imie:string="";
  ocena:number=0;
  status:string="";
  submit(){
    console.log(this.imie, this.ocena, this.status);
  }
}
