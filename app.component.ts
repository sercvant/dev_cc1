import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ExempleComponent} from './exemple/exemple.component';
import {Exemple} from './models/exemple';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ExempleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  monExemple1!: Exemple;
  monExemple2!: Exemple;
  monExemple3!: Exemple;

  ngOnInit(){
    this.monExemple1 = new Exemple(
    'Test',
    'https://img.freepik.com/photos-gratuite/lion-feroce-3d-fond-nature_23-2150800701.jpg?w=360&t=st=1725974758~exp=1725975358~hmac=c8086919ea889534826a07265e0c12d32b63cb01ab7b9565060d2165bb4401b0',
    'Ceci est un test !',
    new Date(),
    2
    );
    this.monExemple2 = new Exemple(
      'Test',
      'https://img.freepik.com/photos-gratuite/lion-feroce-3d-fond-nature_23-2150800701.jpg?w=360&t=st=1725974758~exp=1725975358~hmac=c8086919ea889534826a07265e0c12d32b63cb01ab7b9565060d2165bb4401b0',
      'Ceci est un test !',
      new Date(),
      2
      );
      this.monExemple3 = new Exemple(
        'Test',
        'https://img.freepik.com/photos-gratuite/lion-feroce-3d-fond-nature_23-2150800701.jpg?w=360&t=st=1725974758~exp=1725975358~hmac=c8086919ea889534826a07265e0c12d32b63cb01ab7b9565060d2165bb4401b0',
        'Ceci est un test !',
        new Date(),
        2
    );
  }
}
