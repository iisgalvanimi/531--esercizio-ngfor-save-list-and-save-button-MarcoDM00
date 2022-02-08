import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  testo:string = "";
  elemento:Element;

  onClick() {
    if (!this.testo) return;
    this.elemento = document.createElement("p");
    this.elemento.textContent = this.testo;
    document.getElementsByTagName("div")[0].appendChild(this.elemento);
    this.testo = "";
  }
}
