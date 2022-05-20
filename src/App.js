import styled from 'styled-components'
import { WeatherApp } from './components/WeatherApp'

const App = () => {
    return (
        <MainWrapper>
            <WeatherApp />
        </MainWrapper>
    )
}

export default App

const MainWrapper = styled.div`
    background: linear-gradient(0.25turn, #aaa, #ebf8e1, #3f87a6);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
