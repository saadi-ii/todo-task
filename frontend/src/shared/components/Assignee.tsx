"use client";

import { useRef, useState } from "react";
import { FiUser } from "react-icons/fi";
import { useClickOutside } from "@/hooks/useClickOutside";

export const Assignee = () => {
  const [visible, setVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  useClickOutside(panelRef, () => setVisible(false));

  return (
    <div className="border rounded-lg p-0.5 border-gray-400 relative">
      <FiUser className="text-gray-600" onClick={() => setVisible((v) => !v)} />
      <div
        ref={panelRef}
        className={`${visible ? "visible" : "hidden"} absolute left-0 top-12 bg-gray-500 text-white w-fit rounded-xl p-2`}
      >
        Saad
      </div>
    </div>
  );
};
