import React,{useContext} from 'react';
import { MyContext } from '../App';



const Clima = () => {
    const context = useContext(MyContext)
    
    return ( 

        <div>
            {
                context
                    ? <div className="row">
                        <div className=" card-content">
                            {"El clima en"}
                        </div>
                        <div className="text-center">
                            {context.name
                                ? context.name
                                : null}
                        </div >
                        <div className="card-action">
                            {context.main.temp
                                ? context.main.temp + "°"
                                : null}
                        </div >
                        <img
                            className="large material-icons"
                            src={context.weather[0].icon
                                ? "http://openweathermap.org/img/wn/" + context.weather[0].icon + "@2x.png"
                                : null}
                        />
                    </div>
                    : null
            }
            
        </div>
     );
}
 
export default Clima;