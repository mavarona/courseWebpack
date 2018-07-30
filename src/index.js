import style from './style.css';
import sass from './scss/main.scss';
import data from './data.json';

const arr = [1, 2, 3],
    codeES6 = () => console.log(...arr)

codeES6()
console.log(data, data.name);