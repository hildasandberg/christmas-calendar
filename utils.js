const toggleDivs = () => {
  //toggle to .expand
  document.getElementById("toprow").classList.toggle("expand3")
  document.getElementById("openPage").classList.toggle("expand1")
  document.getElementById("bottomrow").classList.toggle("expand2")
  document.getElementById("close-window").classList.toggle("expand4")
}

//Open webpage renderer by toggling classes.
const openWindow = (lucka) => {
  const classNames = Array.from(document.getElementById("openPage").classList)
  if (classNames.includes("expand1")) {
    toggleDivs()
    setTimeout(() => {
      document.getElementById("iframe").src=`./luckor/${lucka}.html`
      toggleDivs()
    }, 900)
  } else {
    document.getElementById("iframe").src=`./luckor/${lucka}.html`
    toggleDivs()
  }

  // Opens the correct html file with the help of element ID

  //sliding animation
}
