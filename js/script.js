document.getElementById('current-year').textContent = new Date().getFullYear();

const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
if (window.pageYOffset > 300) {
backToTopButton.classList.add('visible');
} else {
backToTopButton.classList.remove('visible');
}
});

backToTopButton.addEventListener('click', (e) => {
e.preventDefault();
window.scrollTo({
top: 0,
behavior: 'smooth'
});
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const targetId = this.getAttribute('href');
if (targetId === '#') return;

const targetElement = document.querySelector(targetId);
if (targetElement) {
window.scrollTo({
top: targetElement.offsetTop - 80,
behavior: 'smooth'
});

const navbarCollapse = document.querySelector('.navbar-collapse');
if (navbarCollapse.classList.contains('show')) {
const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
bsCollapse.hide();
}
}
});
});


function animateProgressBars() {
const progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach(bar => {
const value = bar.getAttribute('aria-valuenow');
bar.style.width = '0%';

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
bar.style.width = value + '%';
observer.unobserve(entry.target);
}
});
}, { threshold: 0.5 });

observer.observe(bar);
});
}

document.addEventListener('DOMContentLoaded', function() {
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

let currentTheme = localStorage.getItem('theme') || (prefersDarkScheme.matches ? 'dark' : 'light');

function applyTheme(theme) {
document.documentElement.setAttribute('data-bs-theme', theme);
document.body.setAttribute('data-theme', theme);

if (theme === 'dark') {
themeIcon.classList.remove('bi-moon');
themeIcon.classList.add('bi-sun');
} else {
themeIcon.classList.remove('bi-sun');
themeIcon.classList.add('bi-moon');
}
}

applyTheme(currentTheme);

themeToggle.addEventListener('click', function() {
const newTheme = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
localStorage.setItem('theme', newTheme);
applyTheme(newTheme);
});

prefersDarkScheme.addEventListener('change', e => {
if (!localStorage.getItem('theme')) {
const newTheme = e.matches ? 'dark' : 'light';
applyTheme(newTheme);
} else {
const storedTheme = localStorage.getItem('theme');
applyTheme(storedTheme);
}
});

animateProgressBars();
initTimelineAnimations();

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
return new bootstrap.Tooltip(tooltipTriggerEl);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const targetId = this.getAttribute('href');
if (targetId === '#') return;

const targetElement = document.querySelector(targetId);
if (targetElement) {
window.scrollTo({
top: targetElement.offsetTop - 80,
behavior: 'smooth'
});

const navbarCollapse = document.querySelector('.navbar-collapse');
if (navbarCollapse.classList.contains('show')) {
const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
bsCollapse.hide();
}
}
});
});
});

function initTimelineAnimations() {
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.style.opacity = '1';
entry.target.style.transform = 'translateX(0)';
timelineObserver.unobserve(entry.target);
}
});
}, { threshold: 0.2 });

timelineItems.forEach((item, index) => {
item.style.opacity = '0';
item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
item.style.transitionDelay = `${index * 0.1}s`;

if (item.classList.contains('left')) {
item.style.transform = 'translateX(-50px)';
} else {
item.style.transform = 'translateX(50px)';
}

timelineObserver.observe(item);
});
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
contactForm.addEventListener('submit', (e) => {
e.preventDefault();

const formData = new FormData(contactForm);
const formObject = {};
formData.forEach((value, key) => {
formObject[key] = value;
});

console.log('Form submitted:', formObject);

const successAlert = `
<div class="alert alert-success alert-dismissible fade show" role="alert">
<strong>Mensagem enviada com sucesso!</strong> Entrarei em contato em breve.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`;

const formContainer = contactForm.parentElement;
formContainer.insertAdjacentHTML('beforebegin', successAlert);

contactForm.reset();

window.scrollTo({
top: formContainer.offsetTop - 100,
behavior: 'smooth'
});
});
}
