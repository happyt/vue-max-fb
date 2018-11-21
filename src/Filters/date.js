export default (value) => {
  // everything here is passed as a string
  const date = new Date(value)
  return date.toLocaleString(['en-US'], 
            {month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' })
}