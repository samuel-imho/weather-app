import styled from 'styled-components'
import { FaLocationArrow, FaSearch } from 'react-icons/fa'

export const Form = ({
    onChangeHandler,
    onSubmitHandler,
    inputField,
    weatherData,
    city,
}) => {
    return (
        <FormContainer>
            <img
                src="https://digitalis.com/wp-content/uploads/2021/05/digitalis-logo.svg"
                alt=""
            />
            <LocationSection>
                <FaLocationArrow />
                <div className="location">
                    <span>Current Location</span>
                    <p>{weatherData ? `${weatherData.request.query}` : ''}</p>
                </div>
            </LocationSection>
            <form onSubmit={onSubmitHandler} action="">
                <h1>Digitalis Weather App</h1>
                <div className="form-control">
                    <input
                        value={inputField}
                        onChange={onChangeHandler}
                        type="text"
                        placeholder="Enter location"
                    />
                    <FaSearch />
                </div>
                <CurrentLocationBtn>Get location Data</CurrentLocationBtn>
            </form>
        </FormContainer>
    )
}

// Styles
const FormContainer = styled.div`
    padding: 2rem;
    background: red;
    flex-basis: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background: url('https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg')
        center center no-repeat;
    background-size: cover;

    @media only screen and (max-width: 1000px) {
        flex-basis: 50%;
    }

    @media only screen and (max-width: 800px) {
        height: 300px;
        position: sticky;
        top: 0;
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-image: linear-gradient(to bottom right, #333, #333);
        opacity: 0.5;
    }

    img {
        height: 3rem;
        position: absolute;
        top: 2.5rem;
        left: 2rem;
    }

    form {
        z-index: 1;
        width: 100%;
        text-align: center;

        h1 {
            font-weight: 300;
            font-size: 2.8rem;
            color: #fff;
            letter-spacing: 0.05rem;
            position: relative;
            padding-bottom: 0.8rem;
            margin-bottom: 2rem;

            &:after {
                position: absolute;
                content: '';
                bottom: 0;
                left: 50%;
                transform: translateX(-50%);
                width: 100px;
                height: 3px;
                background: #fff;
            }
        }

        .form-control {
            position: relative;
            max-width: 400px;
            margin: 0 auto;

            svg {
                font-size: 1.3rem;
                position: absolute;
                top: 50%;
                right: 1.5rem;
                transform: translateY(-50%);
            }
        }

        input {
            border: 1px solid transparent;
            height: 3.2rem;
            padding: 5px 40px 5px 8px;
            width: 100%;
            outline: none;
            background: rgba(255, 255, 255, 0.6);

            &:focus {
                background: #fff;
            }

            ::placeholder {
                color: #000;
                font-weight: 600;
            }
        }
    }
`
const LocationSection = styled.div`
    background: rgba(0, 0, 0, 0.3);
    padding: 0.8rem;
    position: absolute;
    top: 2rem;
    right: 2rem;
    display: flex;
    color: #fff;

    svg {
        fill: #fff;
        margin-top: 0.4rem;
        font-size: 1.5rem;
    }

    .location {
        margin-left: 1rem;
        line-height: 1.3rem;

        span {
            font-size: 0.9rem;
        }
        p {
            font-weight: 600;
            font-size: 1rem;
        }
    }
`
const CurrentLocationBtn = styled.button`
    position: relative;
    transform: translateY(0);
    border: 2px solid transparent;
    background: rgba(255, 255, 255, 1);
    padding: 0.6rem 1rem;
    margin-top: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: translateY(-6%);
        box-shadow: 0px 1px 5px #eee;
    }
`
