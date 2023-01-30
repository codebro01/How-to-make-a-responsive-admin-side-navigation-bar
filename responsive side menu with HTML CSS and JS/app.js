const body = document.querySelector('body');
const sidebar = document.querySelector('.sidebar');
const toggle = document.querySelector('.toggle');
const searchBtn = document.querySelector('.search-box');
const navLink = document.querySelectorAll('.nav-link');
const modeSwitch = document.querySelector('.toggle-switch');
const modeText = document.querySelector('.mode-text');


let functionalities = () => {
    document.addEventListener('mouseover', e => {
        const navItem = e.target.matches('[data-nav-item]');

        if(!navItem) {
            sidebar.classList.add('close');
        }
    })

    searchBtn.addEventListener('click', () => {
        sidebar.classList.remove('close');
    });

    navLink.forEach(navlink => {
        navlink.addEventListener('mouseover', () => {
            sidebar.classList.remove('close');
        })
    })

    modeSwitch.addEventListener('click', ()=> {
        body.classList.toggle('dark');

        if(body.classList.contains('dark')) {
            modeText.innerText = 'Light Mode';
        }
        else {
            modeText.innerText = 'Dark Mode';
        }
    })
}

functionalities();