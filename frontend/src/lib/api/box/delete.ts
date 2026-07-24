import { api } from "@/lib/api/baseURL";

export const deleteBox = (boxname: string) => {
  return api.delete("/box/delete-box", { params: { boxname } });
};
