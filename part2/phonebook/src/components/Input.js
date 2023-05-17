const Input = (props) => {
    return (
        <div>
            {props.text} <input value={props.value} onChange={props.changeHandler} />
        </div>
    )
}

export default Input
