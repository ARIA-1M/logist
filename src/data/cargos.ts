import type { Cargo } from "../types/game";

//Импорт картинок груза
import book from '../assets/cargo/book.png';
import engine from '../assets/cargo/engine.png';
import gloves from '../assets/cargo/gloves.png';
import medicines from '../assets/cargo/medicines.png';
import milky from '../assets/cargo/milky.png';
import screen from '../assets/cargo/screen.png';
import service from '../assets/cargo/service.png';
import washing_machine from '../assets/cargo/washing_machine.png';


//Создание груза для распределения 
export const cargos: Cargo[] = [
    {
        id: "book",
        name: "Книга",
        icon: book,
        correct:{
            type:"light",
            package:"courier",
            filler:"none",
        },
    },
    {
        id: "glass",
        name: "Сервиз",
        icon: service,
        correct:{
            type:"fragile",
            package:"box",
            filler:"bubble",
        },
    },
    {
        id: "electronics",
        name: "Монитор",
        icon: screen,
        correct:{
            type:"fragile",
            package:"box",
            filler:"foam",
        },
    },
    {
        id: "engine",
        name: "Двигатель",
        icon: engine,
        correct:{
            type:"heavy",
            package:"wood",
            filler:"none",
        },
    },
    {
        id: "milk",
        name: "Молочные продукты",
        icon: milky,
        correct:{
            type:"temperature",
            package:"thermo",
            filler:"cold",
        },
    },
    {
        id: "medicine",
        name: "Лекарства",
        icon: medicines,
        correct:{
            type:"temperature",
            package:"thermo",
            filler:"cold",
        },
    },
    {
        id: "washingmachine",
        name: "Стиральная машинка",
        icon: washing_machine,
        correct:{
            type:"heavy",
            package:"wood",
            filler:"none",
        },
    },
    {
        id: "gloves",
        name: "Перчатки",
        icon: gloves,
        correct:{
            type:"light",
            package:"courier",
            filler:"none",
        },
    },
];