"use client";

import { useEffect, useState } from "react";
import { getTasks } from "@/lib/api/task/get";
import { Task } from "@/lib/types/task.types";
import { BoxName } from "./BoxName";
import { AddTask } from "@/features/task/components/AddTask";
import { TaskCard } from "@/features/task/components/TaskCard";
import { DeleteButton } from "@/shared/components/DeleteButton";

interface BoardBoxProps {
  boxname: string;
  isSystem?: boolean;
  onDeleted: () => void;
}

export const BoardBox = ({ boxname, isSystem, onDeleted }: BoardBoxProps) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = () => {
    getTasks().then((res) => setTasks(res.data.records));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const tasksInBox = tasks.filter((task) => task.boxname === boxname);

  return (
    <div className="w-70 min-w-70 bg-gray-100 h-fit p-2 rounded-2xl flex flex-col gap-2">
      <header className="flex justify-between items-center">
        <BoxName name={boxname} />
        <div className="flex items-center justify-center gap-1">
          <AddTask boxname={boxname} onSuccess={fetchTasks} />
          {!isSystem && <DeleteButton mode="box" boxname={boxname} onSuccess={onDeleted} />}
        </div>
      </header>
      <main className="flex flex-col gap-2 max-h-140 overflow-y-scroll">
        {tasksInBox.map((task) => (
          <TaskCard key={task._id} task={task} onChanged={fetchTasks} />
        ))}
      </main>
      <footer>
        <AddTask boxname={boxname} label="Add Task" onSuccess={fetchTasks} />
      </footer>
    </div>
  );
};
