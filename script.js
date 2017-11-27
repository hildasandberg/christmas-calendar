//Open window on click
// Just to convert the NodeList to an Array to gain acceess to .forEach
const elements = [...document.getElementsByClassName("window")];
// gets the element and the event
elements.forEach((element) => {
  element.onclick = (event) => {
    // Gets the element id
    console.log('HELLO!', element.id);
    // Opens the correct webpage with the help of element ID
    openWindow(element.id)
  }
});
