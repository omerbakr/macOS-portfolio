"use client";

import { useRef } from "react";
import Image from "next/image";

import { Tooltip } from "react-tooltip";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import useWindowStore from "@/store/window";
import { dockApps } from "@/constants";
import { DockAppToggle } from "@/types";

const Dock = () => {
  const { openWindow, closeWindow, windows } = useWindowStore();
  const dockRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll(".dock-icon");

    const animateIcons = (mouseX: number) => {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);

        const intensity = Math.exp(-(distance ** 2.5) / 20000);

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { left } = dock.getBoundingClientRect();

      animateIcons(e.clientX - left);
    };

    const resetIcons = () =>
      icons.forEach((icon) =>
        gsap.to(icon, { scale: 1, y: 0, duration: 0.3, ease: "power1.out" }),
      );

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, []);

  const toggleApp = (app: DockAppToggle) => {
    if (!app.canOpen || !app.id) return;

    const window = windows[app.id];
    if (!window) return;

    if (window.isOpen) {
      closeWindow(app.id);
    } else {
      openWindow(app.id);
    }

    console.log(windows);
  };

  return (
    <section
      id="dock"
      className="absolute bottom-4 left-1/2 z-50 -translate-x-1/2 select-none max-sm:hidden"
    >
      <div
        ref={dockRef}
        className="flex items-end justify-between gap-1.5 rounded-[20px] border border-white/20 bg-neutral-900/20 p-1.5 shadow-lg shadow-black/20 backdrop-blur-sm"
      >
        {dockApps.map(({ id, name, icon, canOpen }) => (
          <div key={id ?? name} className="relative flex justify-center">
            <button
              type="button"
              className="dock-icon 3xl:size-20 size-14 cursor-pointer max-sm:size-full"
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              onClick={() => toggleApp({ id, canOpen })}
            >
              <Image
                src={`/images/${icon}`}
                alt={name}
                fill
                loading="lazy"
                className={canOpen ? " " : "opacity-60"}
              />
            </button>
          </div>
        ))}

        <Tooltip
          id="dock-tooltip"
          place="top"
          className="bg-dark-green text-light-green w-fit rounded-xl! px-3! py-1! text-center! text-xs! shadow-2xl!"
        />
      </div>
    </section>
  );
};

export default Dock;
