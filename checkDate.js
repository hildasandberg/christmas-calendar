//use new Date() to enerate a new Date object containing the the current date and time
const checkDate = (lucka) => {
  const today = new Date("2017-12-04") //Remove date to get todays date
  const luckaDate = new Date(`${lucka} 2017`)

  // alert(`Luckans datum ${luckaDate}`)
  // alert(`Dagens datum ${today}`)

  if (luckaDate <= today) {
    // alert("Luckan går att öppna")
    return true
  } else {
    // alert ("Luckan går inte att öppna")
    return false
  }
}
