//use new Date() to enerate a new Date object containing the the current date and time
const today = new Date("2017-12-18")
const dd = today.getDate()
const mm = today.getMonth() + 1 //January is 0
const yyyy = today.getFullYear()

alert(dd)

if(mm==12 && dd<25) {
  alert("Click me! " + dd)
 openWindow == dd
} else {
  alert ("No calendar date")
}

// om du skall testa lucka nr 1 dd = 1 mm= 12
// testa 24  dd = 24 mm == 12
//om månad är 12 och dagen är mindre than 25 (mm == 12 && dd < 25)
//oppna luckan för dd
