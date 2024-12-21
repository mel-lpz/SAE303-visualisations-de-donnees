gsap.registerPlugin(ScrollTrigger);

// Récupère tous les éléments ayant la classe .panel sous la forme d'un tableau
let sections = gsap.utils.toArray(".panel");

// Crée un tween qui déplace les sections horizontalement
let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none", // <-- IMPORTANT!
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 0.1,
    end: "+=25000",
  },
});

// FIRST TITLE ANIMATION ======================================================================>
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".panel__main-title",
      start: "top 80%",
      end: "bottom 20%",
      scrub: false,
    },
    delay: 1,
  });

  var firstBg = document.querySelectorAll(".panel__text-bg--first"),
    secBg = document.querySelectorAll(".panel__text-bg--second"),
    word = document.querySelectorAll(".panel__word");

  tl.to(firstBg, { duration: 0.2, scaleX: 1 })
    .to(secBg, { duration: 0.2, scaleX: 1 })
    .to(word, { duration: 0.1, opacity: 1 }, "-=0.1")
    .to(firstBg, { duration: 0.2, scaleX: 0 })
    .to(secBg, { duration: 0.2, scaleX: 0 });
});

// ANIMATION COMPTEURS ========================================================>
// Les différents compteurs de la page
gsap.to("#counter1", {
  duration: 1,
  innerText: 3217458,
  snap: { innerText: 1 },
  ease: "power1.inOut",
  scrollTrigger: {
    trigger: "#counter1",
    containerAnimation: scrollTween,
    start: "center 100%%",
    end: "center 58%",
    toggleActions: "play none none reset",
    // markers: { startColor: "white", endColor: "white" },
  },
});

gsap.to("#counter2", {
  duration: 1,
  innerText: 38,
  snap: { innerText: 1 },
  ease: "power1.inOut",
  delay: 0.5,
  scrollTrigger: {
    trigger: "#counter1",
    containerAnimation: scrollTween,
    start: "center 100%%",
    end: "center 58%",
    toggleActions: "play none none reset",
    // markers: { startColor: "white", endColor: "white" },
  },
});

gsap.to("#counter3", {
  duration: 1,
  innerText: 38,
  snap: { innerText: 1 },
  ease: "power1.inOut",
  delay: 1,
  scrollTrigger: {
    trigger: "#counter1",
    containerAnimation: scrollTween,
    start: "center 100%%",
    end: "center 58%",
    toggleActions: "play none none reset",
    // markers: { startColor: "white", endColor: "white" },
  },
});

gsap.to("#counter4", {
  duration: 1,
  innerText: 24,
  snap: { innerText: 1 },
  ease: "power1.inOut",
  delay: 1.5,
  scrollTrigger: {
    trigger: "#counter1",
    containerAnimation: scrollTween,
    start: "center 100%%",
    end: "center 58%",
    toggleActions: "play none none reset",
    // markers: { startColor: "white", endColor: "white" },
  },
});
// Animation du camembert sur les profils d'utilisateurs
document.addEventListener("DOMContentLoaded", function () {
  gsap.fromTo(
    "#svg-piechart",
    { opacity: 0, scale: 0.5, rotation: 0, transformOrigin: "50% 50%" },
    {
      opacity: 1,
      scale: 1,
      rotation: 360,
      duration: 1.2,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: "#svg-piechart",
        containerAnimation: scrollTween,
        start: "0% 80%",
        end: "center 58%",
        toggleActions: "play none none reset",
        // markers: { startColor: "white", endColor: "white" },
      },
    }
  );
  // Animation ombre %
  document.addEventListener("DOMContentLoaded", function () {
    gsap.fromTo(
      ".shadow",
      { opacity: 0, scale: 0.5, y: -150 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".shadow",
          containerAnimation: scrollTween,
          start: "0% 100%",
          end: "center 58%",
          toggleActions: "play none none reset",
          // markers: { startColor: "white", endColor: "white" },
        },
      }
    );
  });
});

// animation de lapremière carte de France (les tracés autour des régions)
gsap.fromTo(
  "#CarteDeFrance path",
  { strokeDasharray: 1000, strokeDashoffset: 1000 },
  {
    strokeDashoffset: 10,
    duration: 2,
    ease: "power2.inOut",
    repeat: -1,
  }
);
// animation de la légende la première carte de France
gsap.fromTo(
  ".blue-map-legend",
  { y: 800 },
  {
    y: 0,
    duration: 1,
    ease: "back.out(1)",
    scrollTrigger: {
      trigger: ".blue-map-legend",
      containerAnimation: scrollTween,
      start: "0% 100%",
      end: "center 58%",
      toggleActions: "play none none reset",
      // markers: { startColor: "black", endColor: "black" },
    },
  }
);
// Animation de SVG situé entre les deux carte de France
gsap.fromTo(
  ".map-pin-svg",
  {
    opacity: 0,
    scale: 0.8,
    rotation: -20,
  },
  {
    opacity: 1,
    scale: 1,
    rotation: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".map-pin-svg",
      containerAnimation: scrollTween,
      scrub: false,
      start: "left 90%",
      end: "right center",
      toggleActions: "play none none reset",
      // markers: true
    },
  }
);

gsap.fromTo(
  ".mapmonde-svg",
  {
    opacity: 0,
    scale: 0.8,
    rotation: -20,
  },
  {
    opacity: 1,
    scale: 1,
    rotation: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".mapmonde-svg",
      containerAnimation: scrollTween,
      scrub: false,
      start: "left 90%",
      end: "right center",
      toggleActions: "play none none reset",
      // markers: true
    },
  }
);

// Animation de la deuxième carte de France (La carte violette)
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Sélectionner tous les éléments path dans le SVG avec l'ID "FranceCard"
  const paths = document.querySelectorAll("#FranceCard path");

  // Animer chaque path individuellement
  paths.forEach((path, index) => {
    const originalColor = path.getAttribute("fill");

    gsap.fromTo(
      path,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        fill: gsap.utils.random([
          "#FF0000",
          "#00FF00",
          "#0000FF",
          "#FFFF00",
          "#FF00FF",
          "#00FFFF",
        ]),
        duration: 0.5,
        ease: "back.out(1.7)",
        delay: index * 0.1, // Décalage pour animer les paths les uns après les autres
        onComplete: function () {
          gsap.to(path, {
            fill: originalColor,
            duration: 1.5,
            ease: "power2.inOut",
          });
        },
        scrollTrigger: {
          trigger: "#FranceCard",
          containerAnimation: scrollTween,
          start: "0% 90%",
          end: "center 58%",
          toggleActions: "play none none reset",
          // markers: { startColor: "white", endColor: "white" },
        },
      }
    );
  });
});
// Légende de la deuxième carte de France
gsap.fromTo(
  ".map-purple-legend",
  { y: 800 },
  {
    y: 0,
    duration: 1,
    delay: 1.5,
    ease: "back.out(1)",
    scrollTrigger: {
      trigger: ".map-purple-legend",
      containerAnimation: scrollTween,
      start: "0% 100%",
      end: "center 58%",
      toggleActions: "play none none reset",
      // markers: { startColor: "black", endColor: "black" },
    },
  }
);
// Animation du graphique concernant l'utilisation du pass culture
gsap.fromTo(
  ".UsingChart",
  {
    opacity: 0,
    scale: 0.8,
    x: 200, // Position initiale en dehors de l'écran
  },
  {
    opacity: 1,
    scale: 1,
    x: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".UsingChart",
      containerAnimation: scrollTween,
      scrub: true,
      start: "left 70%",
      end: "left left",
      // markers: true
    },
  }
);
// Section CINEMA ======================================================================>

// Cinéma camera roll animation from top
gsap.fromTo(
  ".camera-roll",
  { y: -300 },
  {
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".camera-roll",
      containerAnimation: scrollTween,
      scrub: true,
      start: "0% 60%",
      end: "50% 25%",
      // markers: true
    },
  }
);

// Cinema 1st title animation
gsap.fromTo(
  ".cinema-h2",
  {
    opacity: 0,
    scale: 0.8,
    rotation: -10,
    x: -200,
  },
  {
    opacity: 1,
    scale: 1,
    rotation: 0,
    x: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".cinema-h2",
      containerAnimation: scrollTween,
      scrub: true,
      start: "left center",
      end: "right center",
      // markers: true
    },
  }
);

// Cinéma camera animation from bottom
gsap.fromTo(
  ".cinema-camera",
  { y: 600 },
  {
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".cinema-camera",
      containerAnimation: scrollTween,
      scrub: true,
      start: "0% 80%",
      end: "100% 60%",
      // markers: true
    },
  }
);

// Cinema choice title animation
gsap.fromTo(
  ".cinema-intro__title",
  {
    opacity: 0,
    y: 50,
  },
  {
    opacity: 1,
    y: 0,
    ease: "power2.out",
    duration: 1.2,
    scrollTrigger: {
      trigger: ".cinema-intro__title",
      containerAnimation: scrollTween,
      start: "0% 100%",
      end: "center 58%",
      toggleActions: "play none none reset",
      // markers: { startColor: "white", endColor: "white" },
    },
  }
);

// Cinema choice first line animation
// Cinema 1st title animation
gsap.fromTo(
  ".cinema-intro__firstline",
  {
    opacity: 0,
    scale: 0.8,
    x: -200,
  },
  {
    opacity: 1,
    scale: 1,
    x: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".cinema-intro__firstline",
      containerAnimation: scrollTween,
      scrub: true,
      start: "left 70%",
      end: "left center",
      // markers: true
    },
  }
);

//
// Cinema choice second line animation
gsap.fromTo(
  ".cinema-intro__secondline",
  {
    opacity: 0,
    scale: 0.8,
    x: 200,
  },
  {
    opacity: 1,
    scale: 1,
    x: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".cinema-intro__secondline",
      containerAnimation: scrollTween,
      scrub: true,
      start: "left 70%",
      end: "left center",
      // markers: true
    },
  }
);

// Première animation du Billet de cinéma
gsap.fromTo(
  ".popcorn-wave1",
  { y: 0, x: 0, rotation: 20 },
  {
    y: -455,
    x: 970,
    rotation: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".popcorn-wave1",
      containerAnimation: scrollTween,
      scrub: true,
      start: "center center",
      end: "center 0%",
      // markers: true
    },
  }
);
// Deuxième animation du Billet de cinéma
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

// Définition de l'animation
gsap.fromTo(
  ".popcorn-wave2",
  {
    motionPath: { path: [{ x: 0, y: 0 }] }, // Point de départ (optionnel)
  },
  {
    motionPath: {
      path: [
        { x: 0, y: 0 },
        { x: 600, y: -200 },
        { x: 1800, y: -500 },
        { x: 2100, y: -100 },
        { x: 3200, y: -900 },
      ],
      curviness: 2, // Contrôle la courbure
      autoRotate: true,
    },
    duration: 1,
    ease: "power.out",
    scrollTrigger: {
      trigger: ".popcorn-wave2",
      containerAnimation: scrollTween,
      scrub: true,
      start: "center center",
      end: "center -200%",
      // markers: true
    },
  }
);

// Animation de la card top (popcorn  )
gsap.fromTo(
  ".card-top",
  { y: -250 },
  {
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".card-top",
      containerAnimation: scrollTween,
      scrub: true,
      start: "0% 60%",
      end: "50% 25%",
      // markers: true
    },
  }
);
// Animation Texte 1ère card
gsap.fromTo(
  ".card__caption-container",
  {
    opacity: 0,
    scale: 0.8,
    x: 200, // Position initiale en dehors de l'écran
  },
  {
    opacity: 1,
    scale: 1,
    x: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".card__caption-container",
      containerAnimation: scrollTween,
      scrub: true,
      start: "left 70%",
      end: "left center",
      // markers: true
    },
  }
);

// Animation de la card bottom (billet  )
gsap.fromTo(
  ".card-bottom",
  { y: 250 },
  {
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".card-bottom",
      containerAnimation: scrollTween,
      scrub: true,
      start: "0% 60%",
      end: "50% 25%",
      // markers: true
    },
  }
);
// Animation Texte 2ème card
gsap.fromTo(
  ".card__caption-container2",
  {
    opacity: 0,
    scale: 0.8,
    x: 200, // Position initiale en dehors de l'écran
  },
  {
    opacity: 1,
    scale: 1,
    x: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".card__caption-container2",
      containerAnimation: scrollTween,
      scrub: true,
      start: "left 70%",
      end: "left center",
      // markers: true
    },
  }
);

// Animation de la card  (Clap de cinéma  )
gsap.fromTo(
  ".card-top2",
  { y: -250 },
  {
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".card-top2",
      containerAnimation: scrollTween,
      scrub: true,
      start: "0% 60%",
      end: "50% 25%",
      // markers: true
    },
  }
);

gsap.fromTo(
  ".card__caption-container3",
  {
    opacity: 0,
    scale: 0.8,
    x: 200, // Position initiale en dehors de l'écran
  },
  {
    opacity: 1,
    scale: 1,
    x: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".card__caption-container3",
      containerAnimation: scrollTween,
      scrub: true,
      start: "left 70%",
      end: "left center",
      // markers: true
    },
  }
);
// Section LIVRES ======================================================================>
// Animation du marque-page
gsap.fromTo(
  ".bookmark",
  { y: -300 },
  {
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".bookmark",
      containerAnimation: scrollTween,
      scrub: true,
      start: "0% 60%",
      end: "50% 25%",
      // markers: true
    },
  }
);
// Books first title animation

gsap.fromTo(
  ".book-h2",
  {
    opacity: 0,
    scale: 0.8,
    rotation: -10,
    x: -200,
  },
  {
    opacity: 1,
    scale: 1,
    rotation: 0,
    x: 0,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".book-h2",
      containerAnimation: scrollTween,
      scrub: true,
      start: "left 70%",
      end: "right center",
      // markers: true
    },
  }
);
// Animation de pourcentage gauche et droite (chiffre)
gsap.to(".books-percentages__subcolumn2", {
  rotation: 180,
  transformOrigin: "center center",
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".books-percentages__subcolumn2",
    containerAnimation: scrollTween,
    scrub: true,
    start: "0% center",
    end: "100% center",
    // markers: true
  },
});
// Animation du texte centre ainsi que le SVG
gsap.to(".books-percentages__subcolumn2--paragraph", {
  rotation: 180,
  transformOrigin: "center center",
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".books-percentages__subcolumn2--paragraph",
    containerAnimation: scrollTween,
    scrub: true,
    start: "0% center",
    end: "100% center",
    // markers: true
  },
});
// Animation livre bleu
gsap.fromTo(
  ".triple-book",
  { y: -300 },
  {
    y: 0,
    duration: 1,
    ease: "back.out(1)",
    scrollTrigger: {
      trigger: ".triple-book",
      containerAnimation: scrollTween,
      start: "0% 100%",
      end: "center 58%",
      toggleActions: "play none none reset",
      // markers: { startColor: "black", endColor: "black" },
    },
  }
);
// Animation du double marque-page
gsap.fromTo(
  ".pink-double-bookmark",
  { y: 400 },
  {
    y: 0,
    duration: 1,
    ease: "back.out(1)",
    delay: 0.5,
    scrollTrigger: {
      trigger: ".pink-double-bookmark",
      containerAnimation: scrollTween,
      start: "0% 100%",
      end: "center 58%",
      toggleActions: "play none none reset",
      // markers: { startColor: "black", endColor: "black" },
    },
  }
);

gsap.fromTo(
  ".bookshelf-column--1",
  { y: 800 },
  {
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".bookshelf-column--1",
      containerAnimation: scrollTween,
      scrub: true,
      start: "0% 85%",
      end: "50% 25%",
      // markers: true
    },
  }
);

gsap.fromTo(
  ".bookshelf-column--2",
  { y: 800 },
  {
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".bookshelf-column--2",
      containerAnimation: scrollTween,
      scrub: true,
      start: "0% 85%",
      end: "center center",
      // markers: true
    },
  }
);

gsap.fromTo(
  ".bookshelf-column--3",
  { y: 800 },
  {
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".bookshelf-column--3",
      containerAnimation: scrollTween,
      scrub: true,
      start: "0% 85%",
      end: "100% 75%",
      // markers: true
    },
  }
);
gsap.fromTo(
  ".blue-books-svg",
  { y: 600 },
  {
    y: 0,
    duration: 1,
    ease: "back.out(1)",
    delay: 0.5,
    scrollTrigger: {
      trigger: ".blue-books-svg",
      containerAnimation: scrollTween,
      start: "0% 100%",
      end: "center 58%",
      toggleActions: "play none none reset",
      // markers: { startColor: "black", endColor: "black" },
    },
  }
);

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Sélectionner tous les personnage dans le SVG avec l'ID "first-people-svg"
  const paths = document.querySelectorAll("#first-people-svg path");

  // Animer chaque path individuellement
  paths.forEach((path, index) => {
    const originalColor = path.getAttribute("fill");

    gsap.fromTo(
      path,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        fill: gsap.utils.random([
          "#65026E",
          "#E70D98",
          "#EA6DC9",
          "#991FA6",
          "#6F85FD",
          "#2442E2",
        ]),
        duration: 1.5,
        ease: "back.out(1.7)",
        delay: index * 0.1, // Décalage pour animer les paths les uns après les autres
        onComplete: function () {
          gsap.to(path, {
            fill: originalColor,
            duration: 1,
            ease: "power2.inOut",
          });
        },
        scrollTrigger: {
          trigger: "#first-people-svg",
          containerAnimation: scrollTween,
          scrub: true,
          start: "0% 75%",
          end: "0% 60%",
          // markers: true
        },
      }
    );
  });
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Sélectionner tous les éléments path dans le SVG avec l'ID "FranceCard"
  const paths = document.querySelectorAll("#second-people-svg path");

  // Animer chaque path individuellement
  paths.forEach((path, index) => {
    const originalColor = path.getAttribute("fill");

    gsap.fromTo(
      path,
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        fill: gsap.utils.random([
          "#65026E",
          "#E70D98",
          "#EA6DC9",
          "#991FA6",
          "#6F85FD",
          "#2442E2",
        ]),
        duration: 1.5,
        ease: "back.out(1.7)",
        delay: index * 0.1, // Décalage pour animer les paths les uns après les autres
        onComplete: function () {
          gsap.to(path, {
            fill: originalColor,
            duration: 1,
            ease: "power2.inOut",
          });
        },
        scrollTrigger: {
          trigger: "#second-people-svg",
          containerAnimation: scrollTween,
          scrub: true,
          start: "0% 75%",
          end: "center 70%",
          // markers: true
        },
      }
    );
  });
});

gsap.fromTo(
  ".bookshelf",
  { y: 600 },
  {
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".bookshelf",
      containerAnimation: scrollTween,
      scrub: true,
      start: "0% 80%",
      end: "100% 60%",
      // markers: true
    },
  }
);
