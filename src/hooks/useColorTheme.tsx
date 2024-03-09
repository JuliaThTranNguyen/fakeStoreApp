import { createContext, Dispatch, SetStateAction, useContext } from "react";

export type ColorTheme = "light" | "dark";

export const ColorContext = createContext<{
  colorTheme: ColorTheme;
  setColorTheme: Dispatch<SetStateAction<ColorTheme>>;
}>({
  colorTheme: "light",
  setColorTheme: () => {},
});

export default function useColorTheme() {
  const { colorTheme, setColorTheme } = useContext(ColorContext);

  return {
    colorTheme,
    setColorTheme,
  };
}
