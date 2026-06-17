import { TablaComics } from "../Models/Comics.model.js";

TablaComics.create(
    {
    IdComic: 1,
    Autor: "Frank Miller",
    Titulo: "Batman: Año Uno",
    Editorial: "DC Comics",
    Precio: 250,
    Genero: "Superhéroes",
    Stock: 15
}
,
{
    IdComic: 2,
    Autor: "Eiichiro Oda",
    Titulo: "One Piece Vol. 1",
    Editorial: "Shueisha",
    Precio: 180,
    Genero: "Manga",
    Stock: 20
}
,
{
    IdComic: 3,
    Autor: "Masashi Kishimoto",
    Titulo: "Naruto Vol. 1",
    Editorial: "Shueisha",
    Precio: 170,
    Genero: "Manga",
    Stock: 12
}
,
{
    IdComic: 4,
    Autor: "Alan Moore",
    Titulo: "Watchmen",
    Editorial: "DC Comics",
    Precio: 350,
    Genero: "Superhéroes",
    Stock: 8
}
,
{
    IdComic: 5,
    Autor: "Stan Lee",
    Titulo: "The Amazing Spider-Man",
    Editorial: "Marvel Comics",
    Precio: 220,
    Genero: "Superhéroes",
    Stock: 10
}

)

export const test = (()=>console.log("Si se esta llamando a la base de datos"));
