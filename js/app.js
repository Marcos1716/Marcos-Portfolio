'use strict';

const navbar = document.querySelector('.nav');
const navBtn = document.querySelector('#nav-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('#sidebar');
const date = document.querySelector('#date');

const logo = document.querySelector('.logo');
const sections = document.querySelectorAll('.section');
const header = document.querySelector('.hero');

logo.addEventListener('click', (e) => {
  e.preventDefault();

  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// * Add fixed class to navbar
const navHeight = navbar.getBoundingClientRect().height;
const navCallback = (entries) => {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    navbar.classList.add('navbar-fixed');
    header.style.marginTop = `${navHeight}px`;
  } else {
    navbar.classList.remove('navbar-fixed');
    header.style.marginTop = 0;
  }
};
const navObserve = new IntersectionObserver(navCallback, {
  root: null,
  threshold: 0.5,
});

if (header) navObserve.observe(header);

// * PAGE ANIMATION
const pageCallback = (entries, observer) => {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section-hide');
  observer.unobserve(entry.target);
};

const pageObs = new IntersectionObserver(pageCallback, {
  root: null,
  threshold: 0.15,
});

sections.forEach((sec) => {
  sec.classList.add('section-hide');
  pageObs.observe(sec);
});

// show sidebar
navBtn.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar');
});
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});
// set year
date.innerHTML = new Date().getFullYear();
