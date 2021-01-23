import React , {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { themeContext } from '../../../context/themeContext';

// NOTE: Lo ponemos afuera para que no se vuelva a inicializar al re-render
const style = {color: "#FFA500"};

export const ButtonTheme = () => {

    const [theme , toggleTheme] = useContext(themeContext);

    console.log("Render: ButtonTheme.js");

    return(
        <button className="app__dark-mode-btn icon level-right" onClick={toggleTheme}>
          { theme ? <FontAwesomeIcon icon={faSun} style={style} /> : <FontAwesomeIcon icon={faMoon} /> }
        </button>
    )
};