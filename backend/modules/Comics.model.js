import {Schema, model} from "mongoose";

const esquemaComics = new Schema({
    IdComic:Number,
    Autor:String,
    Titulo:String,
    Editorial:String,
    Precio:Number,
    Genero:String,
    Stock:Number
})

export const TablaComics = new model("Comics",esquemaComics);