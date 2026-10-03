import type { Option } from "../types/game";

import img from '../assets/hero.png';

//Создание типа груза
export const cargoTypeOptions: Option[] = [
    {
        id:"light",
        label:"Легкий",
        icon:img,
        category:"cargoType"
    },
    {
        id:"fragile",
        label:"Хрупкий",
        icon:img,
        category:"cargoType"
    },
    {
        id:"heavy",
        label:"Тяжелый",
        icon:img,
        category:"cargoType"
    },
    {
        id:"temperature",
        label:"Температурный",
        icon:img,
        category:"cargoType"
    },

];

//Создание типов упаковки
export const packageOptions: Option[] =[
    {
        id:"courier",
        label:"Курьерский пакет",
        icon:img,
        category:"package"
    },
    {
        id:"courier",
        label:"Курьерский пакет",
        icon:img,
        category:"package"
    },
    {
        id:"box",
        label:"Коробка",
        icon:img,
        category:"package"
    },
    {
        id:"thermo",
        label:"Термоконтейнер",
        icon:img,
        category:"package"
    },
];

//Создание типов наполнителя
export const fillerOptions: Option[] =[
    {
        id:"none",
        label:"Без наполнителя",
        icon:img,
        category:"filler",
    },
    {
        id:"bubble",
        label:"Пузырчитая пленка",
        icon:img,
        category:"filler",
    },
    {
        id:"foam",
        label:"Пенопласт",
        icon:img,
        category:"filler",
    },
    {
        id:"cold",
        label:"Хладоэлемент",
        icon:img,
        category:"filler",
    },
];