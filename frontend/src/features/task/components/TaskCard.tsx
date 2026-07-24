"use client";

import { useEffect, useState } from "react";
import { getSubtasks } from "@/lib/api/subtask/get";
import { Subtask } from "@/lib/types/subtask.types";
import { Task } from "@/lib/types/task.types";
import { ItemName } from "@/shared/components/ItemName";
import { MarkComplete } from "@/shared/components/MarkComplete";
import { RenameButton } from "@/shared/components/RenameButton";
import { DeleteButton } from "@/shared/components/DeleteButton";
import { Assignee } from "@/shared/components/Assignee";
import { DueDate } from "@/shared/components/DueDate";
import { Priority } from "@/shared/components/Priority";
import { SubtaskIcon } from "@/shared/components/SubtaskIcon";
import { AddSubtask } from "@/features/subtask/components/AddSubtask";
import { SubtaskCard } from "@/features/subtask/components/SubtaskCard";

interface TaskCardProps {
  task: Task;
  onChanged: () => void;
}

export const TaskCard = ({ task, onChanged }: TaskCardProps) => {
  const [subtasks, setSubtasks] = useState<Subtask[]>([]);
  const [subtasksVisible, setSubtasksVisible] = useState(false);

  const fetchSubtasks = () => {
    getSubtasks().then((res) => setSubtasks(res.data.records));
  };

  useEffect(() => {
    fetchSubtasks();
  }, []);

  const subtasksForTask = subtasks.filter((subtask) => subtask.taskname === task.taskname);

  return (
    <div className="bg-white h-fit p-2 rounded-2xl flex flex-col gap-2">
      <header className="flex justify-between items-center">
        <ItemName name={task.taskname} />
        <div className="flex gap-0.5 border rounded-lg p-1 border-gray-300">
          <MarkComplete mode="task" taskname={task.taskname} onSuccess={onChanged} />
          <AddSubtask taskname={task.taskname} onSuccess={fetchSubtasks} />
          <RenameButton mode="task" taskname={task.taskname} onSuccess={onChanged} />
          <DeleteButton mode="task" taskname={task.taskname} boxname={task.boxname} onSuccess={onChanged} />
        </div>
      </header>

      <main className="flex gap-0.5">
        <Assignee />
        <DueDate mode="task" taskname={task.taskname} boxname={task.boxname} />
        <Priority mode="task" taskname={task.taskname} boxname={task.boxname} />
      </main>

      <footer className="flex items-center gap-2">
        <SubtaskIcon />
        <div className="text-gray-600 cursor-pointer" onClick={() => setSubtasksVisible((v) => !v)}>
          subtask
        </div>
      </footer>

      <div className={`${subtasksVisible ? "flex" : "hidden"} flex-col gap-2`}>
        {subtasksForTask.map((subtask) => (
          <SubtaskCard key={subtask._id} subtask={subtask} onChanged={fetchSubtasks} />
        ))}
      </div>
    </div>
  );
};
