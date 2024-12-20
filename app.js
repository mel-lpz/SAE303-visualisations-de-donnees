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
    end: "+=25000"
  },
});

// section 1 : Simple Animation
gsap.to(".box-1", {
  y: -130,
  duration: 2,
  ease: "elastic",
  scrollTrigger: {
    trigger: ".box-1",
    containerAnimation: scrollTween,
    start: "center 80%",
    end: "center 58%",
    toggleActions: "play none none reset",
    // markers: { startColor: "white", endColor: "white" },
  },
});

gsap.to(".boxb-1", {
  y: -130,
  duration: 2,
  ease: "elastic",
  scrollTrigger: {
    trigger: ".boxb-1",
    containerAnimation: scrollTween,
    start: "center 20%",
    end: "center 30%",
    toggleActions: "play none none reset",
    // markers: { startColor: "black", endColor: "black" },
  },
});

// section 2 : Animation with scrub
gsap.to(".box-2", {
  y: -120,
  backgroundColor: "#1e90ff",
  ease: "none",
  scrollTrigger: {
    trigger: ".box-2",
    containerAnimation: scrollTween,
    scrub: true,
    start: "center 80%",
    end: "center 58%",
    // markers: { startColor: "white", endColor: "white" },
  },
});

// section 3 : Toggle class
ScrollTrigger.create({
  trigger: ".box-3",
  containerAnimation: scrollTween,
  toggleClass: "active",
  start: "center 80%",
  end: "center 58%",
  // markers: { startColor: "white", endColor: "white" },
});

// section 4 : Custom function
ScrollTrigger.create({
  trigger: ".panel--purple",
  containerAnimation: scrollTween,
  start: "center 80%",
  end: "center 58%",
  onEnter: () => console.log("enter"),
  onLeave: () => console.log("leave"),
  onEnterBack: () => console.log("enterBack"),
  onLeaveBack: () => console.log("leaveBack"),
  onToggle: (self) => console.log("active", self.isActive),
  // markers: { startColor: "white", endColor: "white" },
});

// first title animation
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


// Cinema 1st title animation
gsap.fromTo(
  ".cinema-h2", 
  { 
    opacity: 0, 
    scale: 0.8, 
    rotation: -10, 
    x: -200 // Position initiale en dehors de l'écran
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
      start: "left center", // Débute quand l'élément entre au centre
      end: "right center", // Se termine quand l'élément quitte le centre
      // markers: true
    }
  }
);

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
    }
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
    }
  }
);


// Cinema choice title animation
gsap.fromTo(
  ".cinema-intro__title",
  { 
    opacity: 0, 
    y: 50 // Légère translation vers le bas
  },
  { 
    opacity: 1, 
    y: 0, // Position finale
    ease: "power2.out", // Transition fluide
    duration: 1.2, // Durée raisonnable pour une apparence naturelle
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
    x: -200 // Position initiale en dehors de l'écran
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
    }
  }
);

gsap.fromTo(
  ".cinema-intro__secondline", 
  { 
    opacity: 0, 
    scale: 0.8, 
    x: 200 // Position initiale en dehors de l'écran
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
    }
  }
);


// Books first title animation
// Cinema 1st title animation
gsap.fromTo(
  ".book-h2", 
  { 
    opacity: 0, 
    scale: 0.8, 
    rotation: -10, 
    x: -200 // Position initiale en dehors de l'écran
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
      start: "left center", // Débute quand l'élément entre au centre
      end: "right center", // Se termine quand l'élément quitte le centre
      // markers: true
    }
  }
);



// Compteurs animation
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
    }
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
    }
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
    }
  }
);


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
});

document.addEventListener("DOMContentLoaded", function () {
  gsap.fromTo(
    ".shadow",
    { opacity: 0, scale: 0.5, y: -150, },
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




document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Sélectionner tous les éléments path dans le SVG avec l'ID "FranceCard"
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
        duration: 0.5,
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
        }
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
        }
      }
    );
  });
});