import { Component, Input} from '@angular/core';
import {Exemple} from '../models/exemple';

@Component({
  selector: 'app-exemple',
  standalone: true,
  imports: [],
  templateUrl: './exemple.component.html',
  styleUrl: './exemple.component.scss'
})
export class ExempleComponent {
  @Input() exemple!: Exemple;

  onaddlike():void {
    this.exemple.addlike();
  }

  /*
  ngOnInit(){
    this.title = 'Test';
    this.description = "Ceci est un test!";
    this.createdAt = new Date();
    this.like = 2;
    this.imageUrl = 'https://img.freepik.com/photos-gratuite/lion-feroce-3d-fond-nature_23-2150800701.jpg?w=360&t=st=1725974758~exp=1725975358~hmac=c8086919ea889534826a07265e0c12d32b63cb01ab7b9565060d2165bb4401b0';
  }
    */
}
