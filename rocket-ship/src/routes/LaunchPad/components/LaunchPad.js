import React /*, { useState }*/ from 'react';
import { ClassRocket, FunctionalRocket } from './Rocket';
import '../styles/_launchpad.scss';

export default function LaunchPad() {
  /* NOTE: 
  
      Cada 0.5s el estado "rerenderCount" cambia, esto ocasiona un renderizado, por lo
      que el valor en "timeToPositionPercent" se incrementa, haciendo despegar el cohete.

    const [rerenderCount, triggerRerender] = useState(0);
    setTimeout(() => { triggerRerender(rerenderCount + 1); }, 500);
  */

  return (
    /* NOTE: el cohete en ambos componentes deja de despegar */

    /* class component */
    /* <div className="launchpad">
          <ClassRocket />
       </div> */
    

    /* functional component */
    <div className="launchpad">
       <FunctionalRocket />
    </div>
  );
}
