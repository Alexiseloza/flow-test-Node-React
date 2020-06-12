import React ,{Fragment, useState, useEffect} from 'react';

const OtraCiudad = (props) => {

    const [name, setName] = useState('')
    const [tempMax, setTempMax] = useState(null)
    const [tempMin, setTempMin] = useState(null)
    const [icon, setIcon] = useState(null)
    const [id, setId] = useState(null)


useEffect(() => {
   setName(props.city.name)
   setTempMax(props.city.main.temp_max)
   setTempMin(props.city.main.temp_min)
   setIcon(props.city.weather[0].icon)
   setId(props.city.id)
}, [props])

    return (
        <Fragment>
        {props
            ?
        <div type="button" className="waves-effect waves-light btn" onClick={() => props.changeCity(id)}>
            <div className="card-title">{name}</div>
    
        
        <div className=" card blue-grey darken-1">
     {tempMax + "°"}
    </div>
        
       
        <div className="card-content white-text">
        {tempMin + "°"}
    </div>
    

    <img src={"http://openweathermap.org/img/wn/"+ icon +"@2x.png"} className="large material-icons"/>
</div>
: null
        }
        </Fragment>
    )
}
 
export default OtraCiudad;