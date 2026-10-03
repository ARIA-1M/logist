import type { Cargo } from "../types/game";

import img from '../assets/hero.png';

//Создание груза для распределения 
export const cargos: Cargo[] = [
    {
        id: "book",
        name: "Книга",
        icon: img,
        correct:{
            type:"light",
            package:"courier",
            filler:"none",
        },
    },
    {
        id: "glass",
        name: "Сервиз",
        icon: img,
        correct:{
            type:"fragile",
            package:"box",
            filler:"bubble",
        },
    },
    {
        id: "electronics",
        name: "Монитор",
        icon: img,
        correct:{
            type:"fragile",
            package:"box",
            filler:"foam",
        },
    },
    {
        id: "engine",
        name: "Двигатель",
        icon: img,
        correct:{
            type:"heavy",
            package:"wood",
            filler:"none",
        },
    },
    {
        id: "milk",
        name: "Молочные продукты",
        icon: img,
        correct:{
            type:"temperature",
            package:"thermo",
            filler:"cold",
        },
    },
    {
        id: "medicine",
        name: "Лекарства",
        icon: img,
        correct:{
            type:"temperature",
            package:"thermo",
            filler:"cold",
        },
    },
    {
        id: "washingmachine",
        name: "Стиральная машинка",
        icon: img,
        correct:{
            type:"heavy",
            package:"wood",
            filler:"none",
        },
    },
    {
        id: "gloves",
        name: "Перчатки",
        icon: img,
        correct:{
            type:"light",
            package:"courier",
            filler:"none",
        },
    },
];