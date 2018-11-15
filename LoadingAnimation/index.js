let dots = document.querySelectorAll(".loading-dot")

let loadingAnimation = new TimelineMax({
  repeat: -1,
  repeatedDelay: 0.04,
  yoyo: true
})

loadingAnimation.staggerFromTo(dots, 0.3, { y: 10 }, { y: 0 }, -0.15)
