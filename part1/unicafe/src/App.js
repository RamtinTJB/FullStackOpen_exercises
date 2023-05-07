import { useState } from 'react'

const Header = ({title}) => <h1>{title}</h1>

const App = () => {
    const [ good, setGood ] = useState(0)
    const [ neutral, setNeutral ] = useState(0)
    const [ bad, setBad ] = useState(0)

    const incrementStateHandler = (state, stateSetter) => () => {
        stateSetter(state + 1)
    }

    return (
        <div>
            <Header title="give feedback" />
            <button onClick={incrementStateHandler(good, setGood)}>good</button>
            <button onClick={incrementStateHandler(neutral, setNeutral)}>neutral</button>
            <button onClick={incrementStateHandler(bad, setBad)}>bad</button>
            <Header title="statistics" />
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
        </div>
    )
}

export default App
