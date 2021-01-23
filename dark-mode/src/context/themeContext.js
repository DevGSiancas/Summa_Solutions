import React , { createContext , useEffect, useState } from 'react';

export const themeContext = createContext();
const DOM = document.getElementsByTagName("html")[0];

export default function ThemeProvider (props) {

    const [theme , setThemeValue] = useState(getThemeConfig());

    // NOTE: Queremos que el "setConfigToggleTheme" se ejecute cada vez que
    //       se actualiza el estado "theme"
    
    useEffect(() => {
        setConfigToggleTheme();
    });

    // usamos una function regular para evitar error de inicialización
    function getThemeConfig(){
        let themeConfig = localStorage.getItem("_isDarkTheme");
            themeConfig = JSON.parse(themeConfig) || false;

        return themeConfig;
    }

    // guardamos cambios en local storage para perdurar data
    const setConfigToggleTheme = () => {  
        localStorage.setItem("_isDarkTheme" , theme);
        theme ? DOM.classList.add("dark-mode") : DOM.classList.remove("dark-mode");
    }

    const toggleTheme = () => {
        setThemeValue( !theme );
    }

    console.log("Render: themeContext.js");
    
    return(
        <themeContext.Provider value={[theme , toggleTheme]}>
            {props.children}
        </themeContext.Provider>
    )
}