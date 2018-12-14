'use strict';

// name field

const fillNameSelector = document.querySelector('#full-name');

fillNameSelector.addEventListener('keyup', function(e) {
    const writer = e.currentTarget;

    localStorage.setItem('name', writer.value);

    cardNameSelector.innerHTML = writer.value;
    jsonObject.name = writer.value;
});

// occupation field

const fillOccupationSelector = document.querySelector('#occupation');

fillOccupationSelector.addEventListener('keyup', function(e) {
    const writer = e.currentTarget;

    localStorage.setItem('ocuppation', writer.value);

    cardOccupationSelector.innerHTML = writer.value;
    jsonObject.job = writer.value;
});


// profile image field

const fakeUploadImage = document.querySelector('.fake__upload-image');
const uploadImage = document.querySelector('.upload-image');
const fakeCheckUploadImage = document.querySelector('.fake__check-upload-image');
const previewImage = document.querySelector('.preview__image');
const fr = new FileReader();

//fakeUploadImage activates UploadImage

const uploadClick = () => {
    uploadImage.click();
};

//clicking fakeUploadImage event listener
fakeUploadImage.addEventListener('click', uploadClick);


//UploadImage is drawn on previewImage
const writeImage = () => {
    previewImage.style.backgroundImage = `url(${fr.result})`;
    fakeCheckUploadImage.style.backgroundImage = `url(${fr.result})`;
    localStorage.setItem('image', JSON.stringify(fr.result));
    jsonObject.photo = fr.result;
};

//obtaining the image via fakeCheckUploadImage
function getImage(event) {
    const myFile = event.currentTarget.files[0];

    fr.addEventListener('load', writeImage);
    fr.readAsDataURL(myFile);

}

//Upload complete event listener
uploadImage.addEventListener('change', getImage);

/* Social icons */

// email field

const fillEmailSelector = document.querySelector('#email');
const cardSelector = document.querySelector('.preview__social-icons');
const liEmail = document.querySelector('.li__email');
const liPhone = document.querySelector('.li__phone');
const liLinkedin = document.querySelector('.li__linkedin');
const liGithub = document.querySelector('.li__github');

fillEmailSelector.addEventListener('keyup', function(e) {
    const writer = e.currentTarget;

    localStorage.setItem('email', writer.value);

    liEmail.innerHTML = `<a href="mailto:${writer.value}"><div class="social-icon social-icon--green icon__mail"><span class="far fa-envelope"></span></div></a>`;
    jsonObject.email = writer.value;
});


//phone number field

const fillPhoneSelector = document.querySelector('#phone');

fillPhoneSelector.addEventListener('keyup', function(e) {
    const writer = e.currentTarget;

    localStorage.setItem('phone', writer.value);

    liPhone.innerHTML = `<a href="tel:${writer.value}"><div class="social-icon social-icon--green icon__phone"><span class="fas fa-mobile-alt"></span></div></a>`;
    jsonObject.phone = writer.value;
});


//LinkedIn field

const fillLinkedInSelector = document.querySelector('#linkedin');

fillLinkedInSelector.addEventListener('keyup', function(e) {
    const writer = e.currentTarget;

    localStorage.setItem('linkedin', writer.value);

    liLinkedin.innerHTML = `<a href="https://www.linkedin.com/in/${writer.value}"><div class="social-icon social-icon--green icon__linkedin"><span class="fab fa-linkedin-in"></span></div></a>`;
    jsonObject.linkedin = writer.value;
});

//Github field

const fillGithubSelector = document.querySelector('#github');

fillGithubSelector.addEventListener('keyup', function(e) {
    const writer = e.currentTarget;

    localStorage.setItem('github', writer.value);

    liGithub.innerHTML = `<a href="https://github.com/${writer.value}"><div class="social-icon social-icon--green icon__github"><span class="fab fa-github-alt"></span></div></a>`;
    jsonObject.github = writer.value;
});
