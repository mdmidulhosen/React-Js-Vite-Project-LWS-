import React, { Component } from 'react';
import TemperatureInput from './temperatureInput';
import { convert, toCelsius, toFahrenheit } from '../lib/Converter';
import BoilingVerdict from './BoilingVerdict';



export class Calculator extends Component {
    state = {
        temperature: '',
        scale: 'c',
    }
    
    handleChange = (e, scale) =>{
        this.setState({
            temperature: e.target.value,
            scale,
        })
    }

    render() {
        const {temperature, scale} = this.state;
        const celsius = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;
        
        return (
            <div>
                <TemperatureInput scale={"c"} temperature={celsius} temperatureHandler={this.handleChange}/>
                <TemperatureInput scale={"f"} temperature={fahrenheit} temperatureHandler={this.handleChange}/>
                <BoilingVerdict celcius={parseFloat(temperature)} myCelsius={celsius} myFahrenheit={fahrenheit}/>
            </div>
        )
    }
}

export default Calculator   
