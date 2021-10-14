
import { Component, OnInit } from '@angular/core';
//model interface
import { NetflixModel } from './models/netflix-model';


@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {
  public netflixData: NetflixModel;
  constructor() { 
    this.netflixData = {
      nav: {
        title: "Warner Live",
        img: {
          src: "https://i.imgur.com/WP8vbaB.png",
          alt: "logo warner"
        },
        search: "Inicio   Buscar"
      },
      hero: {
        title: "Los 5 Más Populares De Hoy",
        imgGallery: [
          {
            src: "https://i.imgur.com/4DFBHSz.jpg",
            alt:"pelicula1top"
          },
          {
            src: "https://i.imgur.com/wsMvN42.jpg",
            alt:"pelicula2top"
          },
          {
            src: "https://i.imgur.com/lJBKZBZ.jpg",
            alt:"pelicula3top"
          },
          {
            src: "https://i.imgur.com/E0Rr3MF.jpg",
            alt:"pelicula4top"
          },
          {
            src: "https://i.imgur.com/vxO0gPr.jpg",
            alt:"pelicula5top"
          }
        ]      
    },
    film: {
      title: "ACCIÓN",
      imgGallery: [
        {
          src: "https://i.imgur.com/V08dw3Z.jpg",
          alt:"peliculacomedia1"
        },
        {
          src: "https://i.imgur.com/0DxzTg6.jpg",
          alt:"peliculacomedia2"
        },
        {
          src: "https://i.imgur.com/BOhiaYf.jpg",
          alt:"peliculacomedia3"
        },
        {
          src: "https://i.imgur.com/VSL47uG.jpg",
          alt:"peliculacomedia4"
        },
        {
          src: "https://i.imgur.com/n7bEHY4.jpg",
          alt:"peliculacomedia5"
        }
      ]      
  },
  film2: {
    title: "COMEDIAS",
    imgGallery: [
      {
        src: "https://i.imgur.com/hEwSB0Y.jpg",
        alt:"peliculaAccion1"
      },
      {
        src: "https://i.imgur.com/fgs5Cp8.jpg",
        alt:"PeliculaAccion2"
      },
      {
        src: "https://i.imgur.com/0idb0OS.jpg",
        alt:"PeliculaAccion3"
      },
      {
        src: "https://i.imgur.com/M24qUo4.jpg",
        alt:"PeliculaAccion4"
      },
      {
        src: "https://i.imgur.com/rMbjWke.jpg",
        alt:"PeliculaAccion5"
      }
    ]      
  }
  }
  }
  ngOnInit(): void {

  }

}
