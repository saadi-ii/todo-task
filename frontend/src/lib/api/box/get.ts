import { api } from "@/lib/api/baseURL";
import { Box } from "@/lib/types/box.types";

export const getBoxes = () => {
  return api.get<{ boxes: Box[] }>("/box/boxes");
};
