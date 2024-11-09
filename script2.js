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

gsap.from(".btn button", {
    duration: 1,
    y: 20,
    stagger:0.2,
    scrollTrigger: {
        trigger: ".btn button",
        scroller: "#main",
        scrub: 2
    }
})

gsap.from(".container", {
    duration: 1,
    y: 20,
    stagger:0.25,
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 40%",
        end: "top 37%",
        scrub: 2
    }
})

function locoscroll() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

locoscroll()