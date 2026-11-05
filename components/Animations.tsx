"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Animations() {
  useGSAP(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const desktop = window.innerWidth > 900;
    if (desktop) {
      gsap.from(".hero-kicker", {
        y: -80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
      gsap.from(".hero-title", {
        scale: 1.22,
        opacity: 0,
        duration: 1.3,
        ease: "power3.out",
      });
      gsap.from(".hero .cta", {
        y: 70,
        opacity: 0,
        duration: 1,
        delay: 0.25,
        ease: "power3.out",
      });
    }
    const heroScroll = {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
    };
    gsap.to(".hero-bg", {
      scale: 1.18,
      ease: "none",
      scrollTrigger: heroScroll,
    });
    gsap.set(".floating-nav", { autoAlpha: 1, y: 0 });
    gsap.utils
      .toArray<HTMLElement>("[data-reveal]")
      .forEach((el) =>
        gsap.from(el, {
          y: 55,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        }),
      );
    gsap.utils
      .toArray<HTMLElement>("[data-parallax]")
      .forEach((el) =>
        gsap.to(el, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }),
      );
    const words = gsap.utils.toArray<HTMLElement>(".manifesto span");
    gsap.to(words, {
      color: "#fff",
      stagger: 0.12,
      scrollTrigger: {
        trigger: ".manifesto",
        start: "top 78%",
        end: "bottom 42%",
        scrub: true,
      },
    });
  }, []);
  return null;
}
