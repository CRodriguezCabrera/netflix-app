import { ActionFilm } from './../models/netflix-model';
import { Component, Input, OnInit } from '@angular/core';
import { ComedyFilm } from '../models/netflix-model';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  @Input() public film!: ComedyFilm
  @Input() public film2!: ActionFilm

  constructor() { }

  ngOnInit(): void {
  }

}
