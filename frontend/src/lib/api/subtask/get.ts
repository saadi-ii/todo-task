import { api } from "@/lib/api/baseURL";
import { Subtask } from "@/lib/types/subtask.types";

export const getSubtasks = () => {
  return api.get<{ records: Subtask[] }>("/subtask/subtasks");
};
