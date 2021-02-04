export function convertDate(date: string) {
  const newDate = new Date(date)
  const month = newDate.toLocaleString('default', { month: 'long' })
  const formattedDate = `${month} ${newDate.getDate()}, ${newDate.getFullYear()}`
  return formattedDate
}

export function capitalizeFirstChar(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
