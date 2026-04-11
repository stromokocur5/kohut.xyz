import { animate, inView } from "framer-motion/dom"

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    initAnimations()
}

function initAnimations() {
    const spring = [0.16, 1, 0.3, 1]
    const mobile = window.innerWidth < 1024

    // ── PAGE LOAD: HERO ───────────────────────────────────────────

    // Hero heading: cinematic clip-path wipe reveal
    const heroH2 = document.querySelector("[data-animate='hero-heading']")
    if (heroH2) {
        animate(
            heroH2,
            { opacity: [0, 1], clipPath: ["inset(0 0 100% 0)", "inset(0 0 0% 0)"], y: [16, 0] },
            { duration: 0.9, ease: spring }
        )
    }

    // Hero subtitle: simple fade up, delayed after heading
    const heroText = document.querySelector("[data-animate='hero-text']")
    if (heroText) {
        animate(
            heroText,
            { opacity: [0, 1], y: [8, 0] },
            { duration: 0.6, ease: spring, delay: 0.5 }
        )
    }

    // ── SCROLL: SECTION REVEALS ───────────────────────────────────

    document.querySelectorAll("[data-animate='section-reveal']").forEach(el => {
        inView(el, () => {
            animate(el, { opacity: [0, 1], y: [24, 0] }, { duration: 0.7, ease: spring })
        }, { margin: "-60px" })
    })

    // ── SCROLL: PORTFOLIO PANELS ──────────────────────────────────

    const slideLeft = document.querySelector("[data-animate='slide-left']")
    if (slideLeft) {
        inView(slideLeft, () => {
            const anim = mobile
                ? { opacity: [0, 1], y: [24, 0] }
                : { opacity: [0, 1], x: [-36, 0] }
            animate(slideLeft, anim, { duration: 0.75, ease: spring })
        }, { margin: "-80px" })
    }

    const slideRight = document.querySelector("[data-animate='slide-right']")
    if (slideRight) {
        inView(slideRight, () => {
            const anim = mobile
                ? { opacity: [0, 1], y: [24, 0] }
                : { opacity: [0, 1], x: [36, 0] }
            animate(slideRight, anim, { duration: 0.75, ease: spring, delay: 0.12 })
        }, { margin: "-80px" })
    }
}
