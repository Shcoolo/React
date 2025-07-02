import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
       blueAccent: {
        100: "#e0e8f9",
        200: "#c1d0f3",
        300: "#a3b9ee",
        400: "#84a1e8",
        500: "#658ae2",
        600: "#516eb5",
        700: "#3d5388",
        800: "#28375a",
        900: "#141c2d"
},

yellow: {
    100: "#fefcd1",
    200: "#fdf9a2",
    300: "#fdf674",
    400: "#fcf345",
    500: "#fbf017",
    600: "#c9c012",
    700: "#97900e",
    800: "#646009",
    900: "#323005"
},
gray: {
    100: "#ececeb",
    200: "#d8d8d7",
    300: "#c5c5c4",
    400: "#b1b1b0",
    500: "#9e9e9c",
    600: "#7e7e7d",
    700: "#5f5f5e",
    800: "#3f3f3e",
    900: "#20201f"
},
black: {
    100: "#cdcdcd",
    200: "#9c9b9b",
    300: "#6a6a68",
    400: "#393836",
    500: "#070604",
    600: "#060503",
    700: "#040402",
    800: "#030202",
    900: "#010101"
},
white: {
    100: "#fcfdfd",
    200: "#f8fbfc",
    300: "#f5f8fa",
    400: "#f1f6f9",
    500: "#eef4f7",
    600: "#bec3c6",
    700: "#8f9294",
    800: "#5f6263",
    900: "#303131"
},
    }:{
        white: {
    100: "#303131",
    200: "#5f6263",
    300: "#8f9294",
    400: "#bec3c6",
    500: "#eef4f7",
    600: "#f1f6f9",
    700: "#f5f8fa",
    800: "#f8fbfc",
    900: "#fcfdfd",
},
blueAccent: {
        100: "#141c2d",
        200: "#28375a",
        300: "#3d5388",
        400: "#516eb5",
        500: "#658ae2",
        600: "#84a1e8",
        700: "#a3b9ee",
        800: "#c1d0f3",
        900: "#e0e8f9"
},

yellow: {
    100: "#323005",
    200: "#646009",
    300: "#97900e",
    400: "#c9c012",
    500: "#fbf017",
    600: "#fcf345",
    700: "#fdf674",
    800: "#fdf9a2",
    900: "#fefcd1"
},
gray: {
    100: "#20201f",
    200: "#3f3f3e",
    300: "#5f5f5e",
    400: "#7e7e7d",
    500: "#9e9e9c",
    600: "#b1b1b0",
    700: "#c5c5c4",
    800: "#d8d8d7",
    900: "#ececeb"
},
black: {
    100: "#010101",
    200: "#030202",
    300: "#040402",
    400: "#060503",
    500: "#070604",
    600: "#393836",
    700: "#6a6a68",
    800: "#9c9b9b",
    900: "#cdcdcd"
},
    }),
});
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.black[500],
            },
            secondary: {
              main: colors.blueAccent[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: colors.black[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.white[100],
            },
            secondary: {
              main: colors.blueAccent[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },};};
    export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
    () => ({
    toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
);

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
};
