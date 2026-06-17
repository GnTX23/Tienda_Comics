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
,
{
    IdComic: 6,
    Autor: "Hajime Isayama",
    Titulo: "Attack on Titan Vol. 1",
    Editorial: "Kodansha",
    Precio: 190,
    Genero: "Manga",
    Stock: 18
}
,
{
    IdComic: 7,
    Autor: "Akira Toriyama",
    Titulo: "Dragon Ball Vol. 1",
    Editorial: "Shueisha",
    Precio: 160,
    Genero: "Manga",
    Stock: 25
}
,
{
    IdComic: 8,
    Autor: "Neil Gaiman",
    Titulo: "The Sandman",
    Editorial: "DC Comics",
    Precio: 400,
    Genero: "Fantasía",
    Stock: 7
}
)

export const test = (()=>console.log("Si se esta llamando a la base de datos"));
