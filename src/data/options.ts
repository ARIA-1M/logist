import type { Option } from "../types/game";

//Импорт картинок для определения типа груза
import fragile from '../assets/cargoType/fragile.jpg';
import heavy from '../assets/cargoType/heavy.jpg';
import light from '../assets/cargoType/light.png';
import temperature from '../assets/cargoType/temperature.jpg';
//Импорт картинок для определения упаковки
import bag from '../assets/package/bag.png';
import box from '../assets/package/box.png';
import container from '../assets/package/container.png';
import cases from '../assets/package/cases.png';
//Импорт картинок для определения наполнителя
import bubble_wrap from '../assets/filler/bubble_wrap.png';
import chladoelement from '../assets/filler/chladoelement.png';
import none from '../assets/filler/none.png';
import styrofoam from '../assets/filler/styrofoam.png';

//Создание типа груза
export const cargoTypeOptions: Option[] = [
    {
        id:"light",
        label:"Легкий",
        icon:light,
        category:"cargoType"
    },
    {
        id:"fragile",
        label:"Хрупкий",
        icon:fragile,
        category:"cargoType"
    },
    {
        id:"heavy",
        label:"Тяжелый",
        icon:heavy,
        category:"cargoType"
    },
    {
        id:"temperature",
        label:"Температурный",
        icon:temperature,
        category:"cargoType"
    },

];

//Создание типов упаковки
export const packageOptions: Option[] =[
    {
        id:"courier",
        label:"Курьерский пакет",
        icon:bag,
        category:"package"
    },
    
    {
        id:"box",
        label:"Коробка",
        icon:box,
        category:"package"
    },
    {
        id:"wood",
        label:"Деревянный контейнер",
        icon: cases,
        category:"package"
    },
    {
        id:"thermo",
        label:"Термоконтейнер",
        icon:container,
        category:"package"
    },
];

//Создание типов наполнителя
export const fillerOptions: Option[] =[
    {
        id:"none",
        label:"Без наполнителя",
        icon:none,
        category:"filler",
    },
    {
        id:"bubble",
        label:"Пузырчитая пленка",
        icon:bubble_wrap,
        category:"filler",
    },
    {
        id:"foam",
        label:"Пенопласт",
        icon:styrofoam,
        category:"filler",
    },
    {
        id:"cold",
        label:"Хладоэлемент",
        icon:chladoelement,
        category:"filler",
    },
];