const words = ["Hoyeon.", "A Student.", "A Hard Learner.", "A Enthusiast."]

let cursor = gsap.to('.cursor', {opacity: 0, ease:
"power2.inOut", repeat: -1})

let boxTL = gsap.timeline()

boxTL.to('.box', {duration: 1, width:"25vw",
delay: 0.5, ease: "power4.easeIn"})
 .from('.hi', {duration: 1, y:"8.5vw", ease: "power3.out", onComplete: () => masterTL.play()})
 //y:start lower
 .to('.box', {duration: 1, height:"8.5vw", ease: "elastic.out"})
 .to('.box', {duration: 2, autoAlpha: 0.5, yoyo: true, repeat: -1,})
 //autoAlpha controls opacity

let masterTL = gsap.timeline({repeat: -1}).pause()

words.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
    tl.to('.text', {duration: 1, text: word})
    masterTL.add(tl)
})
