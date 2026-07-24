import { api } from "@/lib/api/baseURL";

export const getSubtaskPriority = (taskname: string, subtaskname: string) => {
  return api.get<string>("/subtask/getpriority-subtask", { params: { taskname, subtaskname } });
};
