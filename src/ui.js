import './styles.css'
import { project } from './project.js';

//create button logic
let createButton = document.querySelector(".createButton");
let createMenu = document.querySelector(".menu");

function openCloseMenu() {
    createMenu.classList.toggle('open')
}
createButton.addEventListener('click', openCloseMenu);