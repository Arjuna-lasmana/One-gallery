// Animation
const animation = () => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin)
    
    // initialitation
    let master = gsap.timeline()

    // scroll animation hero
    const heroAnimation = () => {
        gsap.from(".hero", {
            delay: 1.5,
            autoAlpha: 0,
            duration: 2,
            ease: "power1.in"
        })
        gsap.to("#image-bg", {
            scrollTrigger: {
                trigger: ".background",
                start: "20% 25%",
                end: "30% 30%",
                scrub: 3
            },
            y: "100",
            width: "700px",
            rotate: "0",
            xPercent: -30
        })
        gsap.to(".content", {
            scrollTrigger: {
                trigger: "#image-bg",
                start: "30% 25%",
                end: "40% 30%",
                scrub: 3
            },
            y: "100",
            rotate: "0"
        })
    }
    
    // about animation
    const aboutAnimation = () => {
        let animTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#judulAbout",
                start: "top 60%",
                end: "center center"
            },
            ease: "power2.inOut"
        })
        animTimeline.from(".content h2", {
            y: "50",
            autoAlpha: 0,
            duration: 2
        })
        animTimeline.from("#pAbout", {
            y: "30",
            autoAlpha: 0,
            delay: 0.5,
            duration: 2
        })
    }
    
    // Gallery animation
    const galleryAnimation = () => {
        let gallAnimTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".gallery",
                start: "top 60%",
                end: "10% 40%",
                scrub: 2
            }
        })
        gallAnimTimeline.from(".gallery", {
            backgroundColor: "#222831",
        })
    
        gsap.from("#galleryJudul", {
            scrollTrigger: {
                trigger: "#gallery",
                start: "top 60%",
                end: "1% 59%"
            },
            yPercent: "55",
            duration: 2,
            autoAlpha: 0
        })
        gsap.from("#index1 h3", {
            scrollTrigger: {
                trigger: "#index1",
                start: "top 60%",
                end: "1% 59%"
            },
            duration: 2.5,
            autoAlpha: 0,
        })
        gsap.from(".favorite .grid .box", {
            scrollTrigger: {
                trigger: "#index1",
                start: "top 60%",
                end: "1% 59%"
            },
            yPercent: "10",
            duration: 2.5,
            autoAlpha: 0,
            delay: .5,
            stagger: 0.2
        })
        gsap.from("#index2 h3", {
            scrollTrigger: {
                trigger: "#index2",
                start: "top 60%",
                end: "1% 59%"
            },
            duration: 2.5,
            autoAlpha: 0,
        })
        gsap.from(".photography .grid .box", {
            scrollTrigger: {
                trigger: "#index2",
                start: "top 60%",
                end: "1% 59%"
            },
            yPercent: "10",
            duration: 2.5,
            autoAlpha: 0,
            delay: .5,
            stagger: 0.2
        })
        gsap.from("#index3 h3", {
            scrollTrigger: {
                trigger: "#index3",
                start: "top 60%",
                end: "1% 59%"
            },
            duration: 2.5,
            autoAlpha: 0,
        })
        gsap.from(".design .grid .box", {
            scrollTrigger: {
                trigger: "#index3",
                start: "top 60%",
                end: "1% 59%"
            },
            yPercent: "10",
            duration: 2.5,
            autoAlpha: 0,
            delay: .5,
            stagger: 0.2
        })
        gsap.from("#index4 h3", {
            scrollTrigger: {
                trigger: "#index4",
                start: "top 60%",
                end: "1% 59%"
            },
            duration: 2.5,
            autoAlpha: 0,
        })
        gsap.from(".draw .grid .box", {
            scrollTrigger: {
                trigger: "#index4",
                start: "top 60%",
                end: "1% 59%"
            },
            yPercent: "10",
            duration: 2.5,
            autoAlpha: 0,
            delay: .5,
            stagger: 0.2
        })
    }

    // footer animation
    const footerAnimation = () => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: "footer",
                start: "top center",
                end: "1% 49%"
            }
        })

        tl.from(["footer h2", "footer section"], {
            autoAlpha: 0,
            y: "20",
            stagger: 0.3,
            duration: 2.5,
            ease: "power2.out"
        })
    }
    
    // return function
    master
        .add(heroAnimation())
        .add(aboutAnimation())
        .add(galleryAnimation())
        .add(footerAnimation())
}

// Navbar Change in Scroll
const navbarChange = () => {
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY
        const header = document.querySelector("header")

        if(scrollPosition > 1500) {
            header.style.backdropFilter = "blur(8px)"
            header.style.backgroundColor = "#222831ea"
        }
        if(scrollPosition < 1500) {
            header.style.backdropFilter = "blur(0)"
            header.style.backgroundColor = "transparent"
        }
    })
}

// Navbar Detail in Mobile
const navbarFunc = () => {
    const navToggleOpen = document.getElementById("mobile")
    const closeToggle = document.getElementById("close")
    const navDetail = document.querySelector(".navDetail")
    
    navToggleOpen.addEventListener("click", () => {
        navDetail.style.transform = "translateX(0)"
    })
    closeToggle.addEventListener("click", () => {
        navDetail.style.transform = "translateX(100%)"
    })
}

// modal image show
const modalShow = () => {
    document.querySelectorAll(".contentImage img").forEach(Image => {
        Image.onclick = () => {
            document.querySelector(".overlay").style.transform = "translateY(0)"
            document.querySelector(".overlay").style.opacity = "1"
            document.querySelector(".overlay").style.visibility = "visible"
            document.querySelector(".overlay .left img").src = Image.getAttribute("src")
        }
    })

    document.querySelector(".overlay .right").onclick = () => {
        document.querySelector(".overlay").style.opacity = "0"
        document.querySelector(".overlay").style.visibility = "hidden"
        document.querySelector(".overlay").style.transform = "translateY(100%)"
    }
}

// Return function
animation()
navbarChange()
navbarFunc()
modalShow()