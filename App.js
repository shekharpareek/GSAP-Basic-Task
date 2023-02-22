// var element = document.querySelectorAll(".img-container");

window.addEventListener("load", function () {
  console.log("All assets are loaded");

  gsap.to(".img-container", {
    ease: Expo.easeInOut,
    width: "100%",
    duration: 2,
    stagger: 2,
    repeat: 0,
  });

  gsap.to(".text-container h1", {
    ease: Expo.easeInOut,
    top: 0,
    duration: 2.5,
    stagger: 2,
    repeat: 0,
  });

  gsap.to(".text-container h1", {
    delay: 2,
    ease: Expo.easeInOut,
    stagger: 2,
    top: "-100%",
    repeat: 0,
  });
});
