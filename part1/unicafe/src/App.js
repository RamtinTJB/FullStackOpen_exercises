import { useState } from 'react'

const Header = () => <h1>give feedback</h1>

const App = () => {
    const [ good, setGood ] = useState(0)
    const [ neutral, setNeutral ] = useState(0)
    const [ bad, setBad ] = useState(0)

    return (
        <div>
            <Header />
        </div>
    )
}

export default App
