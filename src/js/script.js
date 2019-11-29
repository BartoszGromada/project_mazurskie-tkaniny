import {select, className} from './settings.js';

function activeClass(event) {
  event.preventDefault();
  const clickedElement = event.target;
  const section = clickedElement.getAttribute(select.data.section);
  const background = clickedElement.getAttribute(select.data.background);
  const sectionArray = section.split(' ');
  const activeSections = document.querySelectorAll(select.all.activeSection);
  const activeLinks = document.querySelectorAll(select.all.activeLinks);
  const splash = document.querySelector(select.splash);

  for (let activeSection of activeSections) {
    activeSection.classList.remove(className.active);
    activeSection.classList.add(className.deactive);
  }

  for (let sectionItem of sectionArray) {
    const sectionSelect = document.querySelectorAll('.' + sectionItem);
    for (let select of sectionSelect) {
      select.classList.remove(className.deactive);
      select.classList.add(className.active);
    }
  }

  for (let link of activeLinks) {
    link.classList.remove(className.active);
  }

  clickedElement.classList.add(className.active);

  if (background === className.splash.one) {
    splash.classList.remove(className.splash.two, className.splash.three);
  }
  if (background === className.splash.two) {
    splash.classList.remove(className.splash.one, className.splash.three);
  }
  if (background === className.splash.three) {
    splash.classList.remove(className.splash.one, className.splash.two);
  }

  splash.classList.add(background);
}

function addClickListenersToMenu() {

  const menuItems = document.querySelectorAll(select.listOf.menuItem);
  for (let item of menuItems) {
    item.addEventListener('click', activeClass);
  }
}

addClickListenersToMenu();