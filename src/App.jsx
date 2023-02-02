import { useState } from "react"
import Form from "./components/Form"
import Results from "./components/Results"

function App() {
  const [input, setInput] = useState("")
  const [length, setLength] = useState("")
  const [volume, setVolume] = useState("")
  const [mass, setMass] = useState("")

  const getResults = (name1, name2, input, unit1, unit2) => {
    const total1 = Number(input) * unit1
    const total2 = Number(input) * unit2
    const result = `
      ${input} ${name1} = ${total1.toFixed(3)} ${name2} |
      ${input} ${name2} = ${total2.toFixed(3)} ${name1}`
    return result
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLength(getResults("meters", "feet", input, 3.281, 0.305))
    setVolume(getResults("liters", "gallons", input, 0.264, 3.785))
    setMass(getResults("kilos", "pounds", input, 2.204, 0.454))
  }

  return (
    <div className="h-screen md:h-full lg:h-screen flex sm:justify-center items-center bg-gradient-to-br from-indigo-900 to-indigo-700">
      <div className="bg-transparent mx-2 w-full sm:w-4/5 lg:w-2/5 h-3/5 shadow-lg shadow-black rounded-lg text-white">
        <h1 className="text-center text-3xl mt-4 font-bold">Unit Converter</h1>
        <Form input={input} setInput={setInput} handleSubmit={handleSubmit} />
        <div className="text-center">
          <Results title="Length" result={length} />
          <Results title="Volume" result={volume} />
          <Results title="Mass" result={mass} />
        </div>
      </div>
    </div>
  )
}

export default App
