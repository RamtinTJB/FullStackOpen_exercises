const Header = ({ course }) => {
    return (
        <>
            <h2>{course}</h2>
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
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
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
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    return (
        <div>
            <h1>Wen development curriculum</h1>
            {courses.map(course => <Course key={course.id} course={course} />)}
        </div>
    )
}

export default App
