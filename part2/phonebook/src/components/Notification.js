const Notification = (props) => {
    if (props.text === null) {
        return null
    }

    console.log(props)

    return (
        <div className={props.type}>
            {props.text}
        </div>
    )
}

export default Notification
