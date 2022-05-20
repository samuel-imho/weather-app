import styled from 'styled-components'
import { Card } from './Card'

export const Details = ({ weatherData, errorData }) => {
    return (
        <DetailsContainer>
            <DetailsNav>
                <a className="active" href="#">
                    Weather
                </a>
                <a href="#">Map</a>
                <a href="#">News</a>
            </DetailsNav>

            <div className="details-content">
                { errorData && <h1 className="no-data">No data found</h1>  }
                { weatherData && <Card {...{weatherData}}/> }
            </div>
        </DetailsContainer>
    )
}

const DetailsContainer = styled.div`
    background: #f5f5f5;
    padding: 2rem;
    flex-basis: 40%;
    height: 92%;

    @media only screen and (max-width: 1000px) {
        flex-basis: 50%;
    }

    @media only screen and (max-width: 800px) {
        height: auto;
    }

    .details-content {
        height: 100%;
        overflow-y: auto;
        padding: 0 2rem 1rem;
        position: relative;

        h1{
            font-size: 3rem;
        }

        .no-data{
            text-align: center;
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 100%;
            padding: 0 1rem;

            @media only screen and (max-width: 800px){
                position: static;
                transform: translate(0)
            }
        }

        ::-webkit-scrollbar {
            width: 0.5rem;
        }

        ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px grey;
            border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb {
            background: #333;
            border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #666;
        }
    }

    p {
        line-height: 2rem;
        letter-spacing: 0.05rem;
    }
`

const DetailsNav = styled.div`
    border-bottom: 1px solid #ddd;
    margin-bottom: 2rem;
    text-align: right;

    a {
        display: inline-block;
        padding: 0 0.5rem 0.6rem;
        margin-left: 0.8rem;
        border-bottom: 2px solid transparent;
        transition: 0.2s all ease-in-out;

        &:hover {
            border-bottom: 2px solid #333;
        }

        &.active {
            border-bottom: 2px solid #333;
        }
    }
`
