import { useState } from 'react'

const Header = ({title}) => <h1>{title}</h1>

const StatisticLine = ({text, value}) => {
    return (
        <>
            <p>{text} {value}</p>
        </>
    )
}

const Statistics = ({good, neutral, bad}) => {
    const numFeedback = () => good + neutral + bad
    const averageFeedback = () => (good-bad)/numFeedback()
    const percentPositive = () => 100*good/numFeedback()

    if (numFeedback() == 0) {
        return (
            <>
                <Header title="statistics" />
                <p>No feedback given</p>
            </>
        )
    }
    return (
        <>
            <Header title="statistics" />
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={numFeedback()} />
            <StatisticLine text="average" value={averageFeedback()} />
            <StatisticLine text="positive" value={percentPositive()} />
        </>
    )
}

const Button = ({text, clickHandler}) => {
    return (
        <button onClick={clickHandler}>{text}</button>    
    )
}

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
            <Button text="good" clickHandler={incrementStateHandler(good, setGood)} />
            <Button text="neutral" clickHandler={incrementStateHandler(neutral, setNeutral)} />
            <Button text="bad" clickHandler={incrementStateHandler(bad, setBad)} />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

export default App
