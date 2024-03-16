import { createContext, Dispatch, SetStateAction, useContext } from "react";

export type ColorTheme = "dark" | "light";

export const ColorContext = createContext<{
  colorTheme: ColorTheme;
  setColorTheme: Dispatch<SetStateAction<ColorTheme>>;
}>({
  colorTheme: "dark",
  setColorTheme: () => {},
});

export default function useColorTheme() {
  const { colorTheme, setColorTheme } = useContext(ColorContext);

  return {
    colorTheme,
    setColorTheme,
  };
}
