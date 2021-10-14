export interface NetflixModel {
    nav: Nav;
    hero: Hero;
    film: ComedyFilm;
    film2: ActionFilm;

}

export interface Nav{
    title: string;
    img: Img;
    search: string;
}

export interface Hero{
    title: string;
    imgGallery: Img[];
}

export interface ComedyFilm{
    title: string;
    imgGallery: Img[];
}

export interface ActionFilm{
    title: string;
    imgGallery: Img[];
}

export interface Img {
    src: string;
    alt: string;
}

export interface Gallery {
    img: Img;
}

