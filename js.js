let button_1 = document.querySelector(".button");

button_1.addEventListener("click", () => {
    // window.open("https://open.spotify.com/track/76bcaYeKOKTrj9lEc9BZFU?si=06364f9f2eba47e2", target="_blank");
    window.open("sec_page.html", target="_self");
});

let spotify_button = document.querySelector('.spotify-button');

spotify_button.addEventListener('click', () => {
    window.open("https://open.spotify.com/track/76bcaYeKOKTrj9lEc9BZFU?si=06364f9f2eba47e2", target="_blank");
});
