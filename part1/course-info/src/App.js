const Header = ({ course }) => {
    return (
        <>
            <h1>{course}</h1>
        </>
    )
}

const Part = ({ p, ex }) => {
    return (
        <>
            <p> {p} {ex} </p>
        </>
    )
}

const Content = ({ parts }) => {
    return (
        <>
            {parts.map(part =>
                <Part key={part.id} p={part.name} ex={part.exercises} />
            )}
        </>
    )
}

const Total = ({ parts }) => {
    return (
        <>
            <p><strong>total of {parts.reduce((acc, curr) => acc + curr.exercises, 0)} exercises</strong></p>
        </>
    )
}

const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'Redux',
                exercises: 11,
                id: 4
            }
        ]
    }

    return <Course course={course} />
}

export default App
