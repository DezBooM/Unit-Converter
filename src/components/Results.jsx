function Results({ title, result }) {
  return (
    <div className="mt-2">
        <h1 className="text-2xl">{title}</h1>
        <p>{result}</p>
    </div>
  )
}

export default Results