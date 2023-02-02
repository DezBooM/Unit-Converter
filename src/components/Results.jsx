function Results({ title, value, unit }) {
  return (
    <div className="mt-2" onSubmit={(e) => e.preventDefault()}>
      <h1 className="text-2xl">{title}</h1>
      <h3 className="text-lg">{value}<span>{unit}</span></h3>
    </div>
  )
}

export default Results
