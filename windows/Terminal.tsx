"use client";

import { Check, Flag } from "lucide-react";
import WindowWrapper from "@/hoc/WindowWrapper";
import WindowControls from "@/components/WindowControls";
import { techStack } from "@/constants";

const Terminal = () => {
  return (
    <>
      <div className="bg-light-gray flex items-center justify-between rounded-t-lg border-b border-gray-100/10 px-4 py-3 text-sm text-gray-400 select-none">
        <WindowControls target="terminal" />
        <h2>TechStack</h2>
      </div>

      <div className="font-roboto p-5 text-sm text-white">
        <p>
          <span className="font-bold">omer@MacBook-Air ~ %</span> show tech
          stack
        </p>

        <div className="ms-10 mt-7 flex items-center">
          <p className="w-32">Category</p>
          <p className="w-32">Technologies</p>
        </div>

        <ul className="my-5 space-y-1 border-y border-dashed py-5">
          {techStack.map(({ category, items }) => (
            <li key={category} className="flex items-center gap-3">
              <Check className="w-5 text-[#00A154]" size={20} />
              <h3 className="ms-5 w-32 font-semibold text-[#00A154]">
                {category}
              </h3>
              <ul className="flex items-center gap-3">
                {items.map((item, i) => (
                  <li key={i}>
                    {item} {i < items.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="space-y-2 text-[#00A154]">
          <p className="flex items-center">
            <Check className="me-5 w-5" size={20} /> 5 of 5 stacks loaded
            successfully (100%)
          </p>

          <p className="mt-2 flex items-center gap-2 text-white">
            <Flag size={15} fill="white" /> Render time: 6ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
