const openWindow = (lucka) => {
  //toggle openPage that has class openPage to .expand
  //get correct html file by using date
  //sliding animation
  // console.log("Hej " + lucka)
  document.getElementById("toprow").classList.toggle("expand3")
  document.getElementById("openPage").classList.toggle("expand1")
  document.getElementById("bottomrow").classList.toggle("expand2")
}


const elements = [...document.getElementsByClassName("window")]; // Just to convert the NodeList to an Array to gain acceess to .forEach

// gets the element and the event
elements.forEach((element) => {
  element.onclick = (event) => {
    // Gets the element id
    // console.log('HELLO!', element.id);
    // Do stuff with the window here
    openWindow(element.id)
  }
});
