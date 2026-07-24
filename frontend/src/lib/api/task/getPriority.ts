import { api } from "@/lib/api/baseURL";

export const getTaskPriority = (taskname: string, boxname: string) => {
  return api.get<string>("/task/getpriority-task", { params: { taskname, boxname } });
};
