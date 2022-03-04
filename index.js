gsap.registerPlugin(ScrollTrigger);
gsap.from(".title",{
    opacity:0,
    duration:2,
    y:100,
    scrollTrigger: {
        trigger : ".title",
        start:200,
    },
})
gsap.from(".description",{
    opacity:0,
    duration:2,
    y:100,
    scrollTrigger: ".description"
})
gsap.from(".image-1",{
    opacity:0,
    duration:2,
    y:100,
    scrollTrigger: ".image-1"
})
gsap.from(".fa-laptop-code",{
    opacity:0,
    duration:2,
    y:100,
    scrollTrigger: ".fa-laptop-code"
})
gsap.from(".title-2",{
    opacity:0,
    duration:2,
    y:100,
    scrollTrigger: {
        trigger:".title-2",
    }
})
gsap.from(".paragraph-1",{
    opacity:0,
    duration:2,
    y:100,
    scrollTrigger: ".paragraph-1",
    delay:1,
})
gsap.from(".title-3",{
    opacity:0,
    duration:2,
    y:100,
    scrollTrigger: ".title-3"
})
gsap.from(".list-1",{
    opacity:0,
    duration:2,
    y:100,
    scrollTrigger: ".list-1",
    delay:0.4,
})
gsap.from(".title-4",{
    opacity:0,
    duration:2,
    y:50,
    scrollTrigger: ".title-4",
})
gsap.from(".paragraph-2",{
    opacity:0,
    duration:2,
    y:50,
    scrollTrigger: ".paragraph-2",
})
gsap.from(".footer-title",{
    opacity:0,
    duration:2,
    y:100,
    scrollTrigger: ".footer-div",
})
gsap.from(".paragraph-footer",{
    opacity:0,
    duration:2,
    y:100,
    scrollTrigger: ".footer-div",
})
gsap.from(".btn-3",{
    opacity:0,
    duration:2,
    scrollTrigger: ".footer-div",
})
gsap.from(".animate",{
    opacity:0,
    duration:2,
    y:100,
    scrollTrigger: ".animate",
})