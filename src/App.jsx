import { useEffect, useState } from "react"
import Form from "./components/Form"
import Results from "./components/Results"

function App() {
  const [input, setInput] = useState(0)
  const [metric, setMetric] = useState(true)
  const [length, setLength] = useState(null)
  const [volume, setVolume] = useState(null)
  const [mass, setMass] = useState(null)

  const getMetric = () => {
    setLength({unit:"ft", value: (input * 3.28084).toFixed(3) })
    setVolume({unit:"gal", value: (input * 0.264172052).toFixed(3) })
    setMass({unit:"lb", value: (input * 2.20462262).toFixed(3) })
  }

  const getImperial = () => {
    setLength({unit:"m", value: (input * 0.3048).toFixed(3) })
    setVolume({unit:"L", value: (input * 3.78541178).toFixed(3) })
    setMass({unit:"kg", value: (input * 0.45359237).toFixed(3) })
  }

  useEffect(() => {
    metric ? getMetric() : getImperial()
  }, [input, metric])

  return (
    <div className="h-screen md:h-full lg:h-screen flex sm:justify-center items-center bg-gradient-to-br from-indigo-900 to-indigo-700">
      <div className="bg-transparent mx-2 w-full sm:w-4/5 lg:w-2/5 h-3/5 shadow-lg shadow-black rounded-lg text-white text-center">
        <h1 className="text-3xl mt-4 font-bold">Unit Converter</h1>
        <p>{metric ? "Metric -> Imperial" : "Imperial -> Metric"}</p>
        <Form
          input={input}
          setInput={setInput}
          metric={metric}
          setMetric={setMetric}
        />
        <div className="text-center">
          <Results title="Length" {...length} />
          <Results title="Volume" {...volume} />
          <Results title="Mass" {...mass} />
        </div>
      </div>
    </div>
  )
}

export default App
