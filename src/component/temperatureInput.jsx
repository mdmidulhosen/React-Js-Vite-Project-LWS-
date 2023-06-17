import React, { Component } from 'react'
import BoilingVerdict from './BoilingVerdict'

const scalenames = {
  c: "Celsius",
  f: "Fahrenheit"
}

export function TemperatureInput({celcius, scale, temperature, temperatureHandler}) {
  return (
    <fieldset>
      <legend>Enter Temperature in {scalenames[scale]}</legend>
      <input type="number" value={temperature} onChange={(e) => temperatureHandler(e, scale)} />
      
    </fieldset>
  )


}

export default TemperatureInput
