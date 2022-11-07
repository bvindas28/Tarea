import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  mostrar = true;

  frase: any = {
    mensaje: 'La grandeza nace de pequeños comienzos',
    autor:'Sir Francis Drake'
  }
}
