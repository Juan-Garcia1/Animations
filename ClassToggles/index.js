// INIT CONTROLLER
let controller = new ScrollMagic.Controller({
  globalSceneOptions: { duration: "100%" }
})

// BUILD SCENCES
new ScrollMagic.Scene({ triggerElement: "#home" })
  .setClassToggle("#high1", "active")
  .addIndicators()
  .addTo(controller)

new ScrollMagic.Scene({ triggerElement: "#about" })
  .setClassToggle("#high2", "active")
  .addIndicators()
  .addTo(controller)

new ScrollMagic.Scene({ triggerElement: "#services" })
  .setClassToggle("#high3", "active")
  .addIndicators()
  .addTo(controller)

new ScrollMagic.Scene({ triggerElement: "#contact" })
  .setClassToggle("#high4", "active")
  .addIndicators()
  .addTo(controller)
