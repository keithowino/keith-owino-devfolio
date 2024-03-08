"use strict";

const appName = "devfolio";
const appAuthor = "keith owino";

document.title = (appAuthor + " | " + appName).toUpperCase();

const titleElement = document.querySelector("#js-s-t-s");
const siteTileRefElement = document.querySelector(".js-site-title-ref");

titleElement.innerHTML = appName;
siteTileRefElement.innerHTML = appName;

const goToAboutSectionArr = document.querySelectorAll("#js-about-btn")
const goToHomeSectionArr = document.querySelectorAll("#js-home-btn")
const goToProgressSectionArr = document.querySelectorAll("#js-progress-btn")
const goToContactSectionArr = document.querySelectorAll("#js-contact-btn")

const homeElement = document.getElementById("js-home")
const aboutElement = document.getElementById("js-about")
const progressElement = document.getElementById("js-progress")
const contactElement = document.getElementById("js-contact")

goToAboutSectionArr.forEach(element => {
  element.addEventListener('click', () => {
    homeElement.style.display = "none";
    progressElement.style.display = "none";
    contactElement.style.display = "none";
    aboutElement.style.display = "block";
  });
});

goToHomeSectionArr.forEach(element => {
  
  element.addEventListener('click', () => {
    aboutElement.style.display = "none";
    progressElement.style.display = "none";
    contactElement.style.display = "none";
    homeElement.style.display = "block";
  });
});

goToProgressSectionArr.forEach(element => {
  element.addEventListener('click', () => {
    aboutElement.style.display = "none";
    homeElement.style.display = "none";
    contactElement.style.display = "none";
    progressElement.style.display = "flex";
  });
});

goToContactSectionArr.forEach(element => {
  element.addEventListener('click', () => {
    aboutElement.style.display = "none";
    homeElement.style.display = "none";
    progressElement.style.display = "none";
    contactElement.style.display = "block";
  });
});
