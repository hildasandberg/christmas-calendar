const toggleDivs = () => {
  //toggle to .expand
  document.getElementById("toprow").classList.toggle("expand3")
  document.getElementById("openPage").classList.toggle("expand1")
  document.getElementById("bottomrow").classList.toggle("expand2")
}

//Open webpage renderer by toggling classes.
const openWindow = (lucka) => {
  toggleDivs()
  // Opens the correct html file with the help of element ID
  document.getElementById("iframe").src=`./luckor/${lucka}.html`
  //sliding animation
}
