
// Takes out the url
const nowPage = window.location.href

// finds decXX.html in the url:en and gives an array with XX in position 1.
const pageDate = nowPage.match(/dec(\d+).html/)

const findDate = `dec${pageDate[1]}`
// Check if date is allowed to be opened
if (checkDate(findDate)) {
} else {
    window.location.href = "../cheatPage.html"
}
