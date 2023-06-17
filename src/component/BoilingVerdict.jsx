import React from 'react'
import Calculator from './Calculator'
import TemperatureInput from './temperatureInput'
// function BoilingVerdict(){
//   // if(TemperatureInput)
// }

function BoilingVerdict({myCelsius, myFahrenheit}) {
      if (myCelsius >= 100) {
        return <h4>Water would boil</h4>
      }else if(myFahrenheit >= 212){
        return <h4>Water would boil</h4>
      }else{
        return <h4>Water would not boil</h4>
      }
}

export default BoilingVerdict
