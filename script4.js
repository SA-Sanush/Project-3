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

var btn = document.getElementById("btn")
btn.onclick = function () {
    window.location.href = "https://mail.google.com/mail/u/1/#inbox?compose=PNRMKjRmlKdVTnMkXhMdQdTdLtSXshclVMZWlqgGLjrCpCxNBMzRvrsqMnGqBsLnhkQwllLXmDtJQDq"
}
var btn1 = document.getElementById("btn1")
btn1.onclick = function () {
    window.location.href = "https://www.linkedin.com/in/sa-sanush/"
}
var btn2 = document.getElementById("btn2")
btn2.onclick = function () {
    window.location.href = "https://github.com/SA-Sanush"
}
