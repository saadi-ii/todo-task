"use client";

import { useEffect, useState } from "react";
import { getBoxes } from "@/lib/api/box/get";
import { Box } from "@/lib/types/box.types";
import { BoxSummaryCard } from "./BoxSummaryCard";

export const BoxList = () => {
  const [boxes, setBoxes] = useState<Box[]>([]);

  useEffect(() => {
    getBoxes().then((res) => setBoxes(res.data.boxes));
  }, []);

  return (
    <div className="flex flex-col gap-5 p-5">
      {boxes.map((box) => (
        <BoxSummaryCard key={box._id} boxname={box.boxname} />
      ))}
      <BoxSummaryCard boxname="COMPLETE" />
    </div>
  );
};
