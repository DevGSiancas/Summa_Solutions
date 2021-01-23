import React from 'react';
import ReactDOM from 'react-dom';
import './styles/_main.scss';
import {Home , Footer} from './routes';


import ThemeProvider from './context/themeContext';
// import AppContainer from './common/containers/App';

ReactDOM.render(

    // NOTE: Dado que podemos usar el "ThemeProvide" como wrapper/container
    //       procedemos a dejar el "AppContainer". 

    // <AppContainer>
      <ThemeProvider>
        <Home />
        {/*
          NOTE: Se creo el footer component para evaluar que no renderiza cada que
                se actualiza el estado del "theme"
        */}
        <Footer />
      </ThemeProvider>,
    // </AppContainer>,

  document.getElementById('root')
);
