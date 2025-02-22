/**!SECTION
 * gsap.to("#box", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "blue",
  repeat: 2,
  //   repeat: -1, // infinite
  yoyo: true,
});
 */

/**!SECTION
 * gsap.to("#box1", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "blue",
  borderRadius: "50%",
//   scale: 0.5,
});

gsap.from("#box2", {
  x: 500,
  y: 100,
  duration: 2,
  delay: 1,
});
 */

/**!SECTION
 * gsap.from("h1", {
  opacity: 0,
  duration: 2,
  delay: 1,
  y: -20,
  stagger: -1,
  //   y: 20,
  //   stagger: 0.5,
});
 */

/**!SECTION
 * 
gsap.to("#box1", {
  x: 1000,
  duration: 2,
  delay: 1,
});

gsap.to("#box2", {
  x: 1000,
  rotate: 360,
  duration: 2,
  delay: 1,
});

gsap.to("#box3", {
  x: 1000,
  rotate: 360,
  duration: 2,
  delay: 1,
  backgroundColor: "blue",
  borderRadius: "50%",
});
 */

/**!SECTION
 * var tl = gsap.timeline();

tl.to("#box1", {
  x: 1000,
  duration: 2,
  delay: 1,
});

tl.to("#box2", {
  x: 1000,
  rotate: 360,
  duration: 2,
});

tl.to("#box3", {
  x: 1000,
  rotate: 360,
  duration: 2,
  backgroundColor: "blue",
  borderRadius: "50%",
}); */

var tl = gsap.timeline();

tl.from("h2", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});

tl.from("h4", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});

tl.from("h1", {
  y: 20,
  opacity: 0,
  duration: 1,
  scale: 0.2,
});
