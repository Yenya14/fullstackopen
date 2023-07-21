import StatisticsLine from "./StatisticsLine"

const Statistics = ({good, neutral, bad}) => {
    const total = good + neutral + bad
    const average = (good - bad) / total
    const positive = `${(good / total)*100}%`

    return total > 0 ? (
    <div>
        <h2>statistics</h2>
        <table>
        <tbody>
        <StatisticsLine text="good" value={good}/>
        <StatisticsLine text="neutral" value={neutral}/>
        <StatisticsLine text="bad" value={bad}/>
        <StatisticsLine text="all" value={total}/>
        <StatisticsLine text="average" value={average}/>
        <StatisticsLine text="positive" value={positive}/>
        </tbody>
        </table>



    </div>
    ) :
    (
    <p>No feedback given</p>)
}
export default Statistics