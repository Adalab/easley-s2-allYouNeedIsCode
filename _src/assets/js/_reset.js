'use strict';

/* Reset button */

function resetForm() {

    formData.reset();
    cardNameSelector.innerHTML = 'Nombre Apellido';
    cardOccupationSelector.innerHTML = 'Front-end developer';
    previewImage.style.backgroundImage = `url(https://placehold.it/200x200/ffcc00/0000ff/?text=TEXT)`;
    fakeCheckUploadImage.style.backgroundImage = ``;
    cardSelector.innerHTML = '';
    cardNameSelector.classList.add('preview__name--green');
    decoRectangleSelector.classList.add('preview__decoration-rectangle--green');
    for (let i = 0; i < socialIconSelector.length; i++) {
        socialIconSelector[i].classList.add('social-icon--green');
    }
    for (let i = 0; i < skillIconSelector.length; i++) {
        skillIconSelector[i].classList.add('skill--green');
    }
    cardNameSelector.classList.remove('preview__name--red', 'preview__name--grey');
    decoRectangleSelector.classList.remove('preview__decoration-rectangle--red', 'preview__decoration-rectangle--grey');
    for (let i = 0; i < socialIconSelector.length; i++) {
        socialIconSelector[i].classList.remove('social-icon--red', 'social-icon--grey');
    }
    for (let i = 0; i < skillIconSelector.length; i++) {
        skillIconSelector[i].classList.remove('skill--red', 'skill--grey');
    }
    cardTextSelector.classList.add('comic-sans');
    cardTextSelector.classList.remove('ubuntu', 'montserrat');

    //Reset skills from preview and re-add event listener
    const skillsContainer = document.querySelector('.preview__skills-icons');
    skillsContainer.innerHTML = '';

    //Reset jsonObject
    jsonObject.palette = 1;
    jsonObject.typography = 2;
    jsonObject.name = '';
    jsonObject.job = '';
    jsonObject.phone = '';
    jsonObject.email = '';
    jsonObject.linkedin = '';
    jsonObject.github = '';
    jsonObject.photo = '';
    jsonObject.skills.length = 0;

    //Reset local storage
    localStorage.clear();

    //Reset link
    responseURL.href= '';

    //Hidden twitter
    boxTwitter.classList.add('hidden');

    //Reset drop-down
    boxDesign.classList.add('hidden');
    boxFill.classList.add('hidden');
    shareButton.classList.add('hidden');
    boxShare.classList.add('hidden');
}

buttonReset.addEventListener('click', resetForm);
