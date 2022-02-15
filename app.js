const words = ["Hoyeon.", "A Student.", "A Hard Learner.", "A Enthusiast."]
//These words are going to show up

let cursor = gsap.to('.cursor', {opacity: 0, ease:
"power2.inOut", repeat: -1}) //cursor blinks(goes to opacity 0) infinitely.

let boxTL = gsap.timeline() //timeline function makes thing simpler to control

boxTL.to('.box', {duration: 1, width:"25vw",
delay: 0.5, ease: "power4.easeIn"}) //box goes to 25 vw for 1 second
 .from('.hi', {duration: 1, y:"8.5vw", ease: "power3.out", onComplete: () => masterTL.play()})
 //y:start lower
 //from: define where the values should START,it animates to the current state
 .to('.box', {duration: 1, height:"8.5vw", ease: "elastic.out"}) //box fill out the '.hi'
 .to('.box', {duration: 2, autoAlpha: 0.5, yoyo: true, repeat: -1,})
 //to: define the destination values
 //autoAlpha controls opacity

let masterTL = gsap.timeline({repeat: -1}).pause()//want to pause it before '.hi' is done

words.forEach(word => {
    let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1})
    //yoyo makes text looks like it's deleting(backspace)
    tl.to('.text', {duration: 1, text: word})
    masterTL.add(tl) //make words coming out infinitely
})
