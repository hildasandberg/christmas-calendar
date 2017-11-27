const sayHello= () => {
  console.log('hello');
}

const openWindow = (lucka) => {
  //toggle openPage that has class openPage to .expand
  //get correct html file by using date
  //sliding animation
  // console.log("Hej " + lucka)
  document.getElementById("toprow").classList.toggle("expand3")
  document.getElementById("openPage").classList.toggle("expand1")
  document.getElementById("bottomrow").classList.toggle("expand2")
}
