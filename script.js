document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  var tl = new TimelineLite({ delay: 1 }),
    firstBg = document.querySelectorAll(".text__first-bg"),
    secBg = document.querySelectorAll(".text__second-bg"),
    word = document.querySelectorAll(".text__word");

  tl.to(firstBg, 0.2, { scaleX: 1 })
    .to(secBg, 0.2, { scaleX: 1 })
    .to(word, 0.1, { opacity: 1 }, "-=0.1")
    .to(firstBg, 0.2, { scaleX: 0 })
    .to(secBg, 0.2, { scaleX: 0 });

  document.querySelector(".restart").addEventListener("click", function () {
    tl.restart();
  });
});

const fullContainer = document.querySelector(".full__container");
const sections = document.querySelectorAll(".full__container > section");
let totalWidth = 0;

sections.forEach((section) => {
  totalWidth += section.offsetWidth;
});

fullContainer.style.width = `${totalWidth}px`;

gsap.to(".full__container", {
  x: () =>
    -(
      document.querySelector(".full__container").offsetWidth - window.innerWidth
    ),
  ease: "none",
  scrollTrigger: {
    trigger: ".full__container",
    start: "top top",
    end: () => "+=" + document.querySelector(".full__container").offsetWidth,
    scrub: 1,
    pin: true,
  },
});
