import { useMemo } from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";

import router from "./commons/config/router";
import useColorTheme from "./hooks/useColorTheme";
import createThemeMode from "./commons/config/theme";
import CartOverlayContextProvider from "./components/cart/CartOevrlayContextProvider";
import { ToasterContextProvider } from "./components/layout/ToasterContextProvider";

function App() {
  const { colorTheme } = useColorTheme();
  const theme = useMemo(() => createThemeMode(colorTheme), [colorTheme]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToasterContextProvider>
        <CartOverlayContextProvider>
          <RouterProvider router={router} />
        </CartOverlayContextProvider>
      </ToasterContextProvider>
    </ThemeProvider>
  );
}

export default App;
