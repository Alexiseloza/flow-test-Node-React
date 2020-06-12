import React, { Fragment } from 'react'

import OtraCiudad from './otraCiudad'


const  OtrasCiudades = (props)=>{

  return (
    <Fragment>
      {props.actualWeathers
        ?
        <div className="table">
          {props.actualWeathers.map((city, key) => (
            <OtraCiudad 
            key={key}
              city={city}
              changeCity={props.changeCity}
            /> 
          ))}
        </div>
        : null
      }
    </Fragment>
  )
}

export default OtrasCiudades;