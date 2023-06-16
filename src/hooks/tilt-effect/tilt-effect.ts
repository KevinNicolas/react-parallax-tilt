"use client";

import { useEffect } from "react";

export function useTiltEffect(className: string) {
  useEffect(() => {
    const parallax_el = document.querySelectorAll(`.${className}`) as NodeListOf<HTMLElement>;

    let xValue = 0,
      yValue = 0;

    function handleMouseMove(e: MouseEvent) {
      // console.info(parallax_el);
      xValue = e.clientX;
      yValue = e.clientY;

      parallax_el.forEach((element) => {
        let speedX = Number.parseFloat(element.dataset.speedx ?? "0");
        let speedY = Number.parseFloat(element.dataset.speedy ?? "0");

        console.info(element.dataset);

        let zValue = 100;

        element.style.transform = `translateX(calc(-50% + ${-xValue * speedX}px)) translateY(calc(-50% + ${yValue * speedY}px)) perspective(2300px) translateZ(${zValue}px)`;
      });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
}

export default useTiltEffect;
