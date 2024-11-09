gsap.to("#head h2", {
    duration: 2,
    x:50,
    scrollTrigger: {
        trigger: "#head h2",
        scroller:"body"
    }
})

gsap.to("#head nav", {
    duration: 2,
    x:-30,
    scrollTrigger: {
        trigger: "#head h2",
        scroller:"body"
    }
})

