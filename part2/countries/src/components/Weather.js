const Weather = (props) => {
    if (!props.data) {
        return <div></div>
    } else {
        return (
            <div>
                <p>temperature {props.data.temperature} Kelvin</p>
                <p>wind {props.data.wind} m/s</p>
            </div>
        )
    }
}

export default Weather
