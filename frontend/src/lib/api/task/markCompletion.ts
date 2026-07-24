import { api } from "@/lib/api/baseURL";
import { MarkTaskCompletePayload } from "@/lib/types/task.types";

export const markTaskComplete = (data: MarkTaskCompletePayload) => {
  return api.patch("/task/markcompletion-task", data);
};
