const crc = document.querySelector(".cursor");
const body = document.querySelector("body");

body.addEventListener("mousemove", (e) => {
  crc.style.left = e.x + "px";
  crc.style.top = e.y + "px";
});

// nav--------

gsap.from("nav", {
  opacity: 0,
  delay:1,
  duration: 1,
  y:"-50%",
  stagger:.3,
  // scrollTrigger: {
  //   trigger: ".page1 h1 ",
  //   scroller: "body",
  //   scrub: 1,
  //   start: "top 30%",
    // markers:true
  // },
});

// video---------

gsap.to("video", {
  // duration:2,
  opacity: 0,
  // y:"100%",
  scrollTrigger: {
    trigger: "video",
    scroller: "body",
    scrub: 1,
    start: "1% top",
     markers : true,
  },
});

// Page1 h1-------

gsap.from(".page1 h1", {
  opacity: 0,
  y: "30%",
  // scale:1,
  stagger: 0.3,
  duration: 1,
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: "body",
    // scrub:2,
    // start:'20% 50%',
    // markers: true,
  },
});

// Page1 p---------

gsap.from(".page1 p", {
  opacity: 0,
  y: "10%",
  // scale:1,
  // stagger:.3,
  duration: 1,
  scrollTrigger: {
    trigger: ".page1 p",
    scroller: "body",
    // scrub:2,
    // start:'20% 50%',
    // end:'top 0',
    // markers: true,
  },
});

// Page1 button--------

gsap.from(".page1 button", {
  opacity: 0,
  y: "10%",
  duration: 1,
  scrollTrigger: {
    trigger: ".page1 button",
    scroller: "body",
    end: "top 0",
  },
});

// Page1 images--------

gsap.from(".page1 .images ", {
  opacity: 0,
  y: "10%",

  duration: 1,
  scrollTrigger: {
    trigger: ".page1 .images",
    scroller: "body",
    scrub: 1,
  },
});

// Page2 p2-left img-----------

gsap.from(".page2 .p2-left img", {
  x: "-30%",
  opacity: 0,
  scrollTrigger: {
    trigger: ".page2 .p2-right h1",
    scroller: "body",
    scrub: 1,
  },
});

// Page2 p2-left----------

gsap.from(".page2 .p2-left ", {
  // y:"20%",
  opacity: 0,
  scrollTrigger: {
    trigger: ".page2 .p2-right h1",
    scroller: "body",
    scrub: 1,
  },
});

// Page2 p2-right --------------

gsap.from(".page2 .p2-right", {
  x: "10%",
  opacity: 0,
  stragger: 0.3,
  duration: 1,
  scrollTrigger: {
    trigger: ".page2 .p2-right h1",
    scroller: "body",
    scrub: 1,
  },
});

// Page3 p3-boxes boxes----------

gsap.from(".p3-boxes .boxes", {
  opacity: 0,
  duration: 2,
  y: "20%",
  stagger: 0.4,
  scrollTrigger: {
    trigger: ".p3-boxes .box1 ",
    scroller: "body",
    scrub: 1,
  },
});

// Page4 p4-left-----------

gsap.from(".p4-left", {
  opacity: 0,
  x: "-20%",
  duration: 1,
  scrollTrigger: {
    trigger: ".p4-left h1 ",
    scroller: "body",
    scrub: 1,
  },
});

// Page4 p4-right img-----------

gsap.from(".p4-right img", {
  opacity: 0,
  x: "20%",
  duration: 1,
  scrollTrigger: {
    trigger: ".p4-left h1 ",
    scroller: "body",
    scrub: 1,
  },
});

// Page5 p5-one-----------

gsap.from(".page5 #p5-one", {
  x: "-30%",
  scrollTrigger: {
    trigger: ".page5 #p5-one",
    scroller: "body",
    scrub: 2,
  },
});

// Page5 p5-two-----------

gsap.to(".page5 #p5-two", {
  x: "-30%",
  scrollTrigger: {
    trigger: ".page5 #p5-two",
    scroller: "body",
    scrub: 2,
  },
});

// Page5 p5-three-----------

gsap.from(".page5 #p5-three", {
  x: "-30%",
  scrollTrigger: {
    trigger: ".page5 #p5-three",
    scroller: "body",
    scrub: 2,
  },
});

// Page5 p5-four-----------


gsap.to(".page5 #p5-four", {
  x: "-30%",
  scrollTrigger: {
    trigger: ".page5 #p5-four",
    scroller: "body",
    scrub: 2,
  },
});

// ------END-----