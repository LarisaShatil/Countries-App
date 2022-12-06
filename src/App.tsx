import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";

import Country from "./pages/Country/Country";
import Home from "./pages/Home/Home";
import light from "./styles/lightTheme";
import dark from "./styles/darkTheme";
import NotFound from "./components/NotFound/NotFound";

export const ThemeContext = createContext({ toggleMode: () => {} });

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "light" ? light : dark),
    },
  });
  const manageTheme = {
    toggleMode: () =>
      setMode((prevMode) => (prevMode === "dark" ? "light" : "dark")),
  };

  return (
    <ThemeContext.Provider value={manageTheme}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route path="/country/:name" element={<Country />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
