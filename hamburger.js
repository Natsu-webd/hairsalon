const hamburger = document.getElementById("js-hamburger");
const nav = document.getElementById("js-nav");
const links = nav.querySelectorAll("a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  nav.classList.toggle("is-open");
});

// メニュークリックで閉じる
links.forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("is-active");
    nav.classList.remove("is-open");
  });
});