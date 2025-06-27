import { createTheme } from "@mui/material";

const mode = 'light';

export const theme = createTheme({
        dierction: 'rtl',
        typography: {
          fontFamily: ['Almarai', 'sans-serif'].join(','),
        },
         palette: {
            mode,
            ...(mode === "light"
                ?{
                    // palette values for light mode
                    primary: {
                        main: '#00ffff', 
                        dark: '#00b2b2',
                    },
                    background: {
                        main: '#f9fff9'
                    }

                }
                :{
                    // palette value for dark mode
                    primary: {
                        main: '#51d1e1', 
                        dark: '#00ffff',
                    },
                }),
        },

    });
