"use client";

import { useRef, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { deleteBox } from "@/lib/api/box/delete";
import { deleteTask } from "@/lib/api/task/delete";
import { deleteSubtask } from "@/lib/api/subtask/delete";
import { useClickOutside } from "@/hooks/useClickOutside";

type DeleteButtonProps =
  | { mode: "box"; boxname: string; onSuccess: () => void }
  | { mode: "task"; taskname: string; boxname: string; onSuccess: () => void }
  | { mode: "subtask"; taskname: string; subtaskname: string; onSuccess: () => void };

export const DeleteButton = (props: DeleteButtonProps) => {
  const [visible, setVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  useClickOutside(panelRef, () => setVisible(false));

  const handleDelete = async () => {
    try {
      if (props.mode === "box") {
        await deleteBox(props.boxname);
      } else if (props.mode === "task") {
        await deleteTask({ taskname: props.taskname, boxname: props.boxname });
      } else {
        await deleteSubtask({ taskname: props.taskname, subtaskname: props.subtaskname });
      }
      setVisible(false);
      props.onSuccess();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative">
      <MdDeleteOutline onClick={() => setVisible(true)} />
      <div
        ref={panelRef}
        className={`${visible ? "visible" : "hidden"} p-1 w-30 absolute top-7 right-0 rounded-2xl flex flex-col justify-center items-center border border-gray-400 bg-gray-100 z-10`}
      >
        <div>Are You Sure</div>
        <button onClick={handleDelete} className="bg-red-700 text-white rounded-2xl px-2">
          Delete
        </button>
      </div>
    </div>
  );
};
