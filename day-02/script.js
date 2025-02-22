// gsap.from("#page1 #box", {
//   scale: 0,
//   delay: 1,
//   duration: 2,
//   rotate: 360,
// });

/**!SECTION
 * gsap.from("#page2 #box", {
  scale: 0,
  opacity: 0,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 60%",
  },
});
 */

// gsap.from("#page2 #box", {
//   scale: 0,
//   opacity: 0,
//   duration: 2,
//   rotate: 720,
//   scrollTrigger: {
//     trigger: "#page2 #box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//     end: "top 30%",
//     // Using Scrub two way binding 1. boolean 2. value (0-5)
//     // scrub: true, // it's totally when you are scrolling the page otherwise it's stop
//     scrub: 2,
//     pin: true,

//   },
// });

/**!SECTION
 * gsap.from("#page2 h1", {
  opacity: 0,
  duration: 2,
  x: 500,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    markers: true,
    start: "top 50%",
  },
});

gsap.from("#page2 h2", {
  opacity: 0,
  duration: 2,
  x: -500,
  scrollTrigger: {
    trigger: "#page2 h2",
    scroller: "body",
    markers: true,
    start: "top 50%",
  },
});
 */

gsap.to("#page2 h1", {
  transform: "translateX(-100%)",
  scrollTrigger: {
    trigger: "#page2", // If you want to trigger the animation when the element is in viewport
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -100%",
    scrub: 2,
    pin: true,
  },
});
