import style from './style.css';
import sass from './scss/main.scss';
import data from './data.json';
import logo from './img/js-logo.png';
import {
    HelloWorld
} from './App';

const d = document,
    app = d.getElementById('app'),
    h1 = d.createElement('h1'),
    p = d.createElement('p'),
    img = d.createElement('img'),
    nav = d.createElement('nav'),
    hi = new HelloWorld('Vanilla JS')


let menu = '';

data.links.forEach(link => menu += `<a href="${link[1]}">${link[0]}</a>`);

h1.textContent = 'Webpack + Vanillajs';
p.textContent = hi.greet();

img.src = logo;
nav.classList.add('Menu');
nav.innerHTML = menu;

app.appendChild(h1);
app.appendChild(p);
app.appendChild(nav);
app.appendChild(img);