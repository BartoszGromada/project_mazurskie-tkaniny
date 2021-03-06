/* eslint-disable linebreak-style */

const select = {
  all: {
    section: '.info',
    activeSection: '.post.active',
    activeLinks: '.menu_item a.active',
  },
  listOf: {
    menuItem: '.menu_item a',
    textLinks: '.textlink a',
  },
  data: {
    section: 'data-section',
    background: 'data-background',
  },
  splash: '.splash_image',
};

const className = {
  active: 'active',
  deactive: 'deactive',
  splash: {
    one: 'splash_one',
    two: 'splash_two',
    three: 'splash_three',
  }
};

const menuItems = document.querySelectorAll(select.listOf.menuItem);
const textLinks = document.querySelectorAll(select.listOf.textLinks);

function addClickListeners() {

  for (let item of menuItems) {
    item.addEventListener('click', activeClass);
  }

  for (let link of textLinks) {
    link.addEventListener('click', activeClass);
  }
}

function activeClass(event) {
  const clickedElement = event.target;
  const section = clickedElement.getAttribute(select.data.section);
  const checkBackground = clickedElement.getAttribute(select.data.background);
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

  if (checkBackground === className.splash.one) {
    splash.classList.remove(className.splash.two, className.splash.three);
    menuItems[0].classList.add(className.active);
  }
  if (checkBackground === className.splash.two) {
    splash.classList.remove(className.splash.one, className.splash.three);
    menuItems[1].classList.add(className.active);
  }
  if (checkBackground === className.splash.three) {
    splash.classList.remove(className.splash.one, className.splash.two);
    menuItems[2].classList.add(className.active);
  }

  splash.classList.add(checkBackground);
}

addClickListeners();