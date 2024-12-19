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
});

// Les différents compteurs de la page
gsap.to("#counter1", {
  duration: 1,
  innerText: 3217458,
  snap: { innerText: 1 },
  ease: "power1.inOut",
});
gsap.to("#counter2", {
  duration: 1,
  innerText: 38,
  snap: { innerText: 1 },
  ease: "power1.inOut",
  delay: 0.5,
});
gsap.to("#counter3", {
  duration: 1,
  innerText: 38,
  snap: { innerText: 1 },
  ease: "power1.inOut",
  delay: 1,
});
gsap.to("#counter4", {
  duration: 1,
  innerText: 24,
  snap: { innerText: 1 },
  ease: "power1.inOut",
  delay: 1.5,
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
gsap.fromTo(
  "#CarteDeFrance path",
  { strokeDasharray: 1000, strokeDashoffset: 1000 },
  {
    strokeDashoffset: 10,
    duration: 2,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true,
  }
);
