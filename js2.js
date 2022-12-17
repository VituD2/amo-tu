let jv_heart = document.querySelector('.jv-heart');
let iana_heart = document.querySelector('.iana-heart');

let jv_main_img = document.querySelector('#jv-main-img');
let jv_sec_img = document.querySelector('#jv-sec-img');

let iana_main_img = document.querySelector('#iana-main-img');
let iana_sec_img = document.querySelector('#iana-sec-img');


jv_heart.addEventListener('mouseover', () => {
    jv_main_img.classList.add('off-img');
    jv_sec_img.classList.remove('off-img');
});

jv_heart.addEventListener('mouseout', () => {
    jv_sec_img.classList.add('off-img');
    jv_main_img.classList.remove('off-img');
    }
);


iana_heart.addEventListener('mouseover', () => {
    iana_main_img.classList.add('off-img');
    iana_sec_img.classList.remove('off-img');
});

iana_heart.addEventListener('mouseout', () => {
    iana_sec_img.classList.add('off-img');
    iana_main_img.classList.remove('off-img');
    }
);





jv_heart.addEventListener('click', () => {
    window.open('https://instagram.com/vituud2', target="_blank");
})

iana_heart.addEventListener('click', () => {
    window.open('https://www.instagram.com/https_ianaa/', target="_blank");
})