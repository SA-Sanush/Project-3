var btn1 = document.getElementById("btn1")
btn1.onclick = function () {
    window.location.href = "https://www.linkedin.com/in/sa-sanush/"
}

var btn1 = document.getElementById("btn2")
btn2.onclick = function () {
    window.location.href = "https://github.com/SA-Sanush"
}



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

gsap.from(".para", {
    duration: 1,
    y: 20,
    stagger:0.2,
    scrollTrigger: {
        trigger: ".para",
        scroller: "#main",
        scrub: 2
    }
})

gsap.from(".btn3 button", {
    duration: 1,
    y: 20,
    stagger:0.2,
    scrollTrigger: {
        trigger: ".btn button",
        scroller: "#main",
        scrub: 2
    }
})


// gsap.from("#head img", {
//     duration: 1,
//     y: 20,
//     stagger:0.2,
//     scrollTrigger: {
//         trigger: "#head img",
//         scroller: "#main",
//         scrub: 2
//     }
// })

