"use client";

import { Subtask } from "@/lib/types/subtask.types";
import { ItemName } from "@/shared/components/ItemName";
import { MarkComplete } from "@/shared/components/MarkComplete";
import { RenameButton } from "@/shared/components/RenameButton";
import { DeleteButton } from "@/shared/components/DeleteButton";
import { Assignee } from "@/shared/components/Assignee";
import { DueDate } from "@/shared/components/DueDate";
import { Priority } from "@/shared/components/Priority";
import { SubtaskIcon } from "@/shared/components/SubtaskIcon";

interface SubtaskCardProps {
  subtask: Subtask;
  onChanged: () => void;
}

export const SubtaskCard = ({ subtask, onChanged }: SubtaskCardProps) => {
  return (
    <div className="bg-gray-50 h-fit p-2 rounded-2xl flex flex-col gap-2 m-2">
      <header className="flex justify-between items-center">
        <ItemName name={subtask.subtaskname} />
        <div className="flex gap-0.5 border rounded-lg p-1 border-gray-300">
          <MarkComplete mode="subtask" />
          <RenameButton mode="subtask" taskname={subtask.taskname} subtaskname={subtask.subtaskname} onSuccess={onChanged} />
          <DeleteButton mode="subtask" taskname={subtask.taskname} subtaskname={subtask.subtaskname} onSuccess={onChanged} />
        </div>
      </header>
      <main className="flex gap-0.5">
        <Assignee />
        <DueDate mode="subtask" taskname={subtask.taskname} subtaskname={subtask.subtaskname} />
        <Priority mode="subtask" taskname={subtask.taskname} subtaskname={subtask.subtaskname} />
      </main>
      <footer className="flex items-center gap-2">
        <SubtaskIcon />
        <div className="text-gray-600">subtask</div>
      </footer>
    </div>
  );
};
