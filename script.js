//  Get all windows(luckor) and check the date
// Just to convert the NodeList to an Array to gain acceess to .forEach
const luckor = [...document.getElementsByClassName("window")];

luckor.forEach((lucka) => {
  const isOpenable = checkDate(lucka.id)
  if (isOpenable) {
    document.getElementById(lucka.id).classList.toggle("open")
  } else {

  }
});

// Get all the open elements and add an onClick-event
const luckorOpen = [...document.getElementsByClassName("open")];
//Open window on click
// gets the element and the event
luckorOpen.forEach((luckorOpen) => {
  luckorOpen.onclick = (event) => {
    // Opens the correct webpage with the help of element ID
    openWindow(luckorOpen.id)
    // Paus wind sound
    document.getElementById("windSound").muted = true
  }
});

// Toggle elements --> removes the expand class and closes the iframe window
document.getElementById("close-window").onclick = () => {
  toggleDivs()
  // Starts wind sound
  document.getElementById("windSound").muted = false
}

const todaysDate = new Date("2017-12-19")
const dd = todaysDate.getDate()

// document.getElementById(`dec${dd}`).onmouseover = () => {
    document.getElementById(`dec${dd}`).classList.toggle("today")
// }
