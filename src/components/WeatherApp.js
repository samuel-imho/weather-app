import styled from 'styled-components'
import { Form } from './Form'
import { Details } from './Details'
import { useState, useEffect } from 'react'

const API_KEY = process.env.REACT_APP_API_KEY

export const WeatherApp = () => {
    const [inputField, setInputField] = useState('')
    const [city, setCity] = useState('London')
    const [weatherData, setWeatherData] = useState(null)
    const [errorData, setErrorData] = useState(null)

    const getWeatherDataHandler = () => {
        fetch(`http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`)
            .then(res => res.json())
            .then(data => {
                if(data.error){
                    setErrorData(data.error)
                    setWeatherData(null)
                    return
                }
                setWeatherData(data)
                setErrorData(null)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        getWeatherDataHandler()
    }, [city])

    const onChangeHandler = (e) => {
        setInputField(e.target.value)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault()

        if(inputField.trim().length < 1){
            return
        }

        setInputField('')
        setCity(inputField)
    }

    return (
        <Main>
            <Form {...{ onChangeHandler, onSubmitHandler, inputField, setInputField, weatherData, city }}/>
            <Details {...{ weatherData, city, errorData }} />
        </Main>
    )
}

const Main = styled.div`
    max-width: 1200px;
    height: 80vh;
    width: 90vw;
    background: #f5f5f5;
    display: flex;
    flex-wrap: wrap;

    @media only screen and (max-width: 1000px) {
        height: 100vh;
        width: 100vw;
    }

    @media only screen and (max-width: 800px) {
        display: block;
    }
`
