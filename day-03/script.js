var initialPath = `M 10 100 Q 500 100 990 100`;

var finalPath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector("#string");

// string.addEventListener("mouseenter", function (e) {
//   console.log("Entered");
//   // var rect = string.getBoundingClientRect();
//   // var x = e.clientX - rect.left;
//   // var y = e.clientY - rect.top;
//   // initialPath = `M 10 100 Q 500 ${y} 990 100`;
//   // string.querySelector("path").setAttribute("d", initialPath);
// });

// string.addEventListener("mouseleave", function (e) {
//   console.log("Leaved");
//   // var rect = string.getBoundingClientRect();
//   // var x = e.clientX - rect.left;
//   // var y = e.clientY - rect.top;
//   // initialPath = `M 10 100 Q 500 ${y} 990 100`;
//   // string.querySelector("path").setAttribute("d", initialPath);
// });

string.addEventListener("mousemove", function (e) {
  var rect = string.getBoundingClientRect();
  // var x = e.clientX - rect.left;
  // var y = e.clientY - rect.top;
  initialPath = `M 10 100 Q ${e.x} ${e.y} 990 100`;

  gsap.to("svg path", {
    attr: { d: initialPath },
    duration: 0.3,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", function (e) {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});
