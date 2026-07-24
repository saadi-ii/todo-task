"use client";

import { TiTick } from "react-icons/ti";
import { markTaskComplete } from "@/lib/api/task/markCompletion";

type MarkCompleteProps = { mode: "task"; taskname: string; onSuccess: () => void } | { mode: "subtask" };

export const MarkComplete = (props: MarkCompleteProps) => {
  const handleClick = async () => {
    if (props.mode === "subtask") {
      alert("It can be submitted with parent Task");
      return;
    }

    try {
      await markTaskComplete({ taskname: props.taskname, boxname: "COMPLETE" });
      props.onSuccess();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <TiTick onClick={handleClick} />
    </div>
  );
};
