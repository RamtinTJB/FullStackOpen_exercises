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

export default Course
