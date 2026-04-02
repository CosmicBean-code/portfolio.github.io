import { ChangeFontH1 } from "./events.js";

function principalfontsize() {
    const area = window.innerWidth * window.innerHeight;
    const fontSize = 0.015 * window.innerWidth + 0.015 * window.innerHeight;  // Ajusta el tamaño de fuente según el área
    document.querySelector('#html').style.fontSize = fontSize + 'px';
}

function init() {
    principalfontsize();
    ChangeFontH1();

    window.addEventListener('resize', () => {
        principalfontsize();  // Recalcula área cada cambio
    });

    const moreButton = document.querySelector('.more');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');

    if (moreButton && nav) {
        moreButton.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                }
            });
        });
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}