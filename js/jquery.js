// loading
window.addEventListener("load", () => {
  document.querySelector(".loading").classList.add("hide");
});
//OR
// window.onload = () => {
//   document.querySelector(".loading").classList.add("hide");
// };
////////////////////////////////////////
let openBtn = document.querySelector("#openBtn");
let closeBtn = document.querySelector("#closeBtn");
let nav = document.querySelector(".links");

openBtn.addEventListener("click", () => {
  nav.style.display = "block";
  openBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
});
let closeNav = () => {
  nav.style.display = "none";
  openBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
};
closeBtn.addEventListener("click", closeNav);
//OR
// openBtn.addEventListener("click", () => {
//   openBtn.classList.toggle("fa-times");
// });
// nav.classList.toggle("active");==> //and take active to acsess in css
///////////////////////////////////
// change nav bar color
let header = document.getElementById("header");
window.addEventListener("scroll", () => {
  document
    .querySelector("header")
    .classList.toggle("changeColorNav", scrollY > 0);
});
///////////////////////////////
// show scroll in nav
let ele = document.querySelector(".scroll");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scroller = document.documentElement.scrollTop;
  ele.style.width = `${(scroller / height) * 100}%`;
});
////////////////////////////////////////////
//scroll to top btn
let btn = document.querySelector(".scrollTop");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});
btn.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});
//////////////////////////
let links = document.querySelectorAll(`a [href^="#"]`);
links.forEach((link) => {
  link.addEventListener("click", (el) => {
    el.preventDefault();
    let attr = document.querySelector(this.getAttribute(href));
    attr.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
});
///////////////////////////
//show behavior section
let wow = document.querySelector(".wow");
let i = 0;
window.addEventListener("scroll", () => {
  for (let i = 0; i < wow.length; i++) {
    if (wow[i].getBoundingClientRect().top < window.innerHeight - 200) {
      wow.classList.add("show");
    } else {
      wow.classList.remove("show");
    }
  }
});
