function Form({ input, setInput, handleSubmit }) {
  return (
    <form className="flex flex-col items-center mt-4" onSubmit={handleSubmit}>
      <input
        className="w-16 h-12 text-xl outline-none border-2 border-white bg-transparent hover:bg-indigo-700  focus:bg-indigo-700 p-2 font-bold"
        required
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-transparent border-2 hover:bg-indigo-700 border-white first-letter: mt-2 px-3 py-1 rounded-full active:shadow-inner active:shadow-white font-bold text-lg"
        type="submit"
      >
        Convert
      </button>
    </form>
  )
}

export default Form
