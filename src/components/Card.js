import dayjs from 'dayjs';
import styled from 'styled-components'

export const Card = ({ weatherData }) => {
    const { request, current, location } = weatherData
    const [ weatherIcon ] = current.weather_icons
    const [ weatherDescription ] = current.weather_descriptions
    
    return (
        <CardBlock>
            <div className="card-content">
                <h1 className="degrees">{current.temperature}&deg;</h1>
                <h2 className="weather-status">{weatherDescription}</h2>
                <p className="date">{dayjs(location.localtime).format('dddd D MMMM YYYY')}</p>
                <img src={weatherIcon} alt={weatherDescription} />
            </div>

            <Divider />

            <MiniCardContainer>
                <MiniCard>
                    Location: <span className="info">{request.query}</span>
                </MiniCard>
                <MiniCard>
                    latitude: <span className="info">{location.lat}</span>
                </MiniCard>
                <MiniCard>
                    longitude: <span className="info">{location.lon}</span>
                </MiniCard>
                <MiniCard>
                    humidity: <span className="info">{current.humidity}%</span>
                </MiniCard>
                <MiniCard>
                    Cloud cover: <span className="info">{current.cloudcover}%</span>
                </MiniCard>
                <MiniCard>
                    Visibility: <span className="info">{current.humidity} miles</span>
                </MiniCard>
            </MiniCardContainer>
        </CardBlock>
    )

}

const CardBlock = styled.div`
    text-align: center;

    .card-content{
        position: relative;
        img{
            position: absolute;
            top: 0px;
            right: 0px;
            height: 35px;
            border-radius: 50%;
        }
    }
`

const Divider = styled.div`
    width: 100%;
    height: 2px;
    background: #ccc;
    margin: 1.5rem 0;
`

const MiniCardContainer = styled.ul`
    list-style: none;
    display: grid;
    grid-auto-rows: 100px;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 1rem;

    @media only screen and (max-width: 800px) {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
`

const MiniCard = styled.li`
    font-size: 1.5rem;
    margin-top: 1rem;
    border: 1px solid #eee;
    box-shadow: 0 0 10px #ccc;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
        font-weight: 700;
        display: block;
    }
`
