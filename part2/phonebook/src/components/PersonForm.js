import Input from './Input'

const PersonForm = (props) => {
    return (
        <form>
            <Input text='name' value={props.name} changeHandler={props.nameChange} />
            <Input text='number' value={props.number} changeHandler={props.numberChange} />
            <div>
                <button type="submit" onClick={props.submitHandler}>add</button>
            </div>
        </form>
    )
}

export default PersonForm
