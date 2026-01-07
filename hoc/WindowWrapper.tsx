"use client";

import { useRef, ComponentType } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Draggable } from "gsap/all";
import useWindowStore from "@/store/window";

gsap.registerPlugin(Draggable);

const WindowWrapper = <P extends object>(
  Component: ComponentType<P>,
  windowKey: string,
) => {
  const Wrapped = (props: P) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef<HTMLElement | null>(null);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      if (isOpen) {
        gsap.fromTo(
          el,
          { scale: 0.9, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.2,
            ease: "power3.out",
            overwrite: true,
          },
        );
      } else {
        gsap.to(el, {
          scale: 0.98,
          opacity: 0,
          duration: 0.2,
          ease: "power4.out",
          overwrite: true,
        });
      }
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });

      return () => instance.kill();
    }, []);

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
        className="absolute opacity-0"
      >
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;
  return Wrapped;
};

export default WindowWrapper;
