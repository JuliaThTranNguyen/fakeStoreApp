import { ReactNode, useState } from "react";
import { ColorContext, ColorTheme } from "../../hooks/useColorTheme";

export default function ColorModeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [colorTheme, setColorTheme] = useState<ColorTheme>("dark");
  return (
    <ColorContext.Provider value={{ colorTheme, setColorTheme }}>
      {children}
    </ColorContext.Provider>
  );
}
