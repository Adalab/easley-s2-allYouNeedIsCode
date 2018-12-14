'use strict';

/* eslint-disable strict */
// When 'click'-ing checkbox, add the class corresponding to the selected palette and remove others

function choosePalette() {

    if ((this.value) === 'green-palette') {
        cardNameSelector.classList.add('preview__name--green');
        decoRectangleSelector.classList.add('preview__decoration-rectangle--green');

        localStorage.setItem('palette', '1');
        jsonObject.palette = 1;

        for (let i = 0; i < socialIconSelector.length; i++) {
            socialIconSelector[i].classList.add('social-icon--green');
        }

        for (let i = 0; i < skillIconSelector.length; i++) {
            skillIconSelector[i].classList.add('skill--green');
        }

        const skillContainer = document.querySelector('.preview__skills-icons');
        skillContainer.classList.add('icons__container--green');
        skillContainer.classList.remove('icons__container--red');
        skillContainer.classList.remove('icons__container--grey');

        cardNameSelector.classList.remove('preview__name--red', 'preview__name--grey');
        decoRectangleSelector.classList.remove('preview__decoration-rectangle--red', 'preview__decoration-rectangle--grey');
        for (let i = 0; i < socialIconSelector.length; i++) {
            socialIconSelector[i].classList.remove('social-icon--red', 'social-icon--grey');
        }
    }

    else if ((this.value) === 'red-palette') {
        cardNameSelector.classList.add('preview__name--red');
        decoRectangleSelector.classList.add('preview__decoration-rectangle--red');

        localStorage.setItem('palette', '2');
        jsonObject.palette = 2;

        for (let i = 0; i < socialIconSelector.length; i++) {
            socialIconSelector[i].classList.add('social-icon--red');
        }
        for (let i = 0; i < skillIconSelector.length; i++) {
            skillIconSelector[i].classList.add('skill--red');
        }

        const skillContainer = document.querySelector('.preview__skills-icons');
        skillContainer.classList.add('icons__container--red');
        skillContainer.classList.remove('icons__container--green');
        skillContainer.classList.remove('icons__container--grey');

        cardNameSelector.classList.remove('preview__name--green', 'preview__name--grey');
        decoRectangleSelector.classList.remove('preview__decoration-rectangle--green', 'preview__decoration-rectangle--grey');
        for (let i = 0; i < socialIconSelector.length; i++) {
            socialIconSelector[i].classList.remove('social-icon--green', 'social-icon--grey');
        }
    }

    else if ((this.value) === 'grey-palette') {
        cardNameSelector.classList.add('preview__name--grey');
        decoRectangleSelector.classList.add('preview__decoration-rectangle--grey');

        localStorage.setItem('palette', '3');
        jsonObject.palette = 3;

        for (let i = 0; i < socialIconSelector.length; i++) {
            socialIconSelector[i].classList.add('social-icon--grey');
        }
        for (let i = 0; i < skillIconSelector.length; i++) {
            skillIconSelector[i].classList.add('skill--grey');
        }

        const skillContainer = document.querySelector('.preview__skills-icons');
        skillContainer.classList.add('icons__container--grey');
        skillContainer.classList.remove('icons__container--green');
        skillContainer.classList.remove('icons__container--red');

        cardNameSelector.classList.remove('preview__name--green', 'preview__name--red');
        decoRectangleSelector.classList.remove('preview__decoration-rectangle--green', 'preview__decoration-rectangle--red');
        for (let i = 0; i < socialIconSelector.length; i++) {
            socialIconSelector[i].classList.remove('social-icon--green', 'social-icon--red');
        }
    }
}

checkboxPaletteGreen.addEventListener('click', choosePalette);
checkboxPaletteRed.addEventListener('click', choosePalette);
checkboxPaletteGrey.addEventListener('click', choosePalette);
