import { useContext } from "react";
import { Context } from "./Context";

export const useSampleState = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useSampleState must be used within a R2DContext");
  }
  return context;
};
