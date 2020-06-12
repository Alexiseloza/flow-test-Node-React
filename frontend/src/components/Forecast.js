import React, {useState, useEffect} from 'react';

const Forecast = (props) => {

const [daily, setDaily] = useState([])

    useEffect(() => {
      if (props.forecast.city) {
        let currentDay = props.forecast.list[0].dt_txt.slice(8, 10)
        let day = []
        let orderDays = []
        props.forecast.list.map((foo) => {
          if(currentDay === foo.dt_txt.slice(8, 10)) {
            return day.push(foo)
          } else {
            orderDays.push(day)
              day = []
              currentDay = foo.dt_txt.slice(8, 10)
             return day.push(foo)
          }
        })
        setDaily(orderDays)
      }
    }, [props])
  
    return (
  
  <div className="card">
    <div className="card-image ">
    {
        daily
        ? <table className="striped" >
          {daily.map((foo, key) => (
      <thead key={key} day={foo}/>
          ))}
        </table>
        :null
      }
    </div>
  </div>
    )
}
 
export default Forecast;