function Form({ input, setInput, setMetric, metric }) {
  return (
    <form
      className="flex flex-col items-center relative mt-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        className="w-1/4 text-xl outline-none border-2 border-white bg-transparent hover:bg-indigo-700  focus:bg-indigo-700 rounded-lg font-bold flex text-center"
        type="number"
        value={input}
        id="input"
        onChange={(e) => setInput(e.target.value)}
      />
      <label
        className="absolute right-12 mt-2 sm:right-40 md:mr-4 lg:mr-3"
        htmlFor="input"
      >
        {metric ? "m/L/kg" : "ft/gal/lb"}
      </label>
      <button
        className="bg-transparent border-2 hover:bg-indigo-700 border-white first-letter: mt-2 px-3 py-1 rounded-full active:shadow-inner active:shadow-white font-bold text-lg"
        type="button"
        onClick={() => setMetric((prev) => !prev)}
      >
        Change units
      </button>
    </form>
  )
}

export default Form
