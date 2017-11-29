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
const elements = [...document.getElementsByClassName("open")];


//Open window on click
// gets the element and the event
elements.forEach((element) => {
  element.onclick = (event) => {
    // Opens the correct webpage with the help of element ID
    openWindow(element.id)
  }
});




// Close window on click
