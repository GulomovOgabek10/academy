let close = document.querySelector(".cross");
let seachSec = document.querySelector(".soverlay");
let seachIco = document.querySelector(".search");

var tl = gsap.timeline({defaults: {ease: Expo.easeInOut}});
tl.paused(true);

tl.to(".icon", 1, {
  scale: 4,
});

tl.to(
  seachSec,
  {
    clipPath: "circle(128.4% at 90% 8%)",
    zIndex: "9999",
  },
  "-=.7"
);

tl.from(
  "input",
  {
    x: -200,
    opacity: 0,  
  },
  "start"
);

tl.from(
  ".img",
  {
    x: 200,
    opacity: 0,  
  },
  "start"
);

let isOpen = false; 

seachIco.addEventListener("click", () => {
  if (!isOpen) {
    tl.play(); 
  } else {
    tl.reverse(); 
  }
  isOpen = !isOpen; 
});

gsap.from(".search",2,{
  y: -2000,
  delay: 3.6,
});



gsap.from(".search .icon",1,{
  delay: 5.6,
  scale: 0,
});


gsap.from(".search .span",1,{
  delay: 5.6,
  scale: 0,
});



let tabs = document.querySelectorAll(".btn"),
  contect_all = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  console.log(tab);
  tab.addEventListener("click", (e) => {
    tabs.forEach((item) => item.classList.remove("active"));

    contect_all.forEach((item) => item.classList.remove("active"));
    contect_all[index].classList.add("active");
  });
});













gsap.registerPlugin(ScrollTrigger);


gsap.from("body .firstchild1", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power2.out",
    delay: 0.5
});

gsap.from("body .firstchild2", {
    opacity: 0,
    x: -50,
    duration: 1.5,
    ease: "power2.out",
    delay: 1
});


gsap.from(".secondpage", {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".secondpage",
        start: "top 80%", 
        toggleActions: "play none none none"
    }
});

gsap.from(".thirdpage", {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".thirdpage",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".fourthpage", {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".fourthpage",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

gsap.from(".fifthpage", {
    opacity: 0,
    y: 100,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".fifthpage",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});





















