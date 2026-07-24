import { api } from "@/lib/api/baseURL";
import { CreateBoxPayload } from "@/lib/types/box.types";

export const createBox = (data: CreateBoxPayload) => {
  return api.post("/box/create-box", data);
};
