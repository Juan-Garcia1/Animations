const navBtn = document.querySelector(".nav-btn")
const sideNav = document.querySelector("nav .side-nav")
const sideNavLi = document.querySelectorAll("nav .side-nav li")

navBtn.addEventListener("click", function() {
  // get nav button icon
  const icon = this.querySelector("i")
  // toggle icon
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars")
    icon.classList.add("fa-times")
  } else if (icon.classList.contains("fa-times")) {
    icon.classList.remove("fa-times")
    icon.classList.add("fa-bars")
  }
  // init TimelineMax
  if (!this.tl) {
    this.tl = new TimelineMax({
      paused: true,
      onReverseComplete: function() {
        sideNav.classList.remove("open")
      }
    })
    // slide side-nav when nav button is clicked
    this.tl
      .to(sideNav, 0.3, { x: 0 })
      .staggerFrom(sideNavLi, 0.3, { x: "-30px", opacity: 0 }, 0.3)
  }

  if (!sideNav.classList.contains("open")) {
    sideNav.classList.add("open")
    this.tl.play()
  } else {
    this.tl.reverse()
  }
})
