

gsap.from(".Profile #same ",{
    y:20,
    duration:1,
    delay:0.4,
    opacity:0,
    stagger:0.3
})

gsap.from("#about .contant ",{
    x:100,
    duration:1,
    delay:0.3,
    opacity:0,
    scrollTrigger:{
        trigger:'#about .contant',
        scroller:'body',
        // markers:true,
        // start:"top 70%",
        // end:"top 30%",
        scrub:2

    }
})


gsap.from(".grid-container .item",{
    x:80,
    duration:1,
    opacity:0.3,
     scrollTrigger:{
        trigger:'.grid-container .item',
        scroller:'body',
        start:"top 70%",
        end:"top 30%",
        scrub:1

    }
})

gsap.from("#education",{
    x:100,
    duration:1,
    delay:0.2,
    opacity:0,
    scrollTrigger:{
        trigger:'#education',
        scroller:'body',
        start:"top 70%",
        end:"top 30%",
        scrub:2

    }

})

gsap.from(".project-container .project",{
    x:-500,
    y:-500,
    scale:0,
    rotate:360,
    duration:2,
    delay:0.2,
    opacity:0,
    stagger:0.5,
    scrollTrigger:{
        trigger:'.project-container',
        scroller:'body',
        start:"top 70%",
        end:"top 30%",
        scrub:3

    }

})


