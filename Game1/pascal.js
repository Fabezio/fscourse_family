// const getId = document.getElementById()
// const addEvent = addEventListener()
let id = 0
document.getElementById("valider").addEventListener("click", function() {
  let val = document.getElementById("infos").value
  afficherTriangle(TrianglePascal(val))
  // pascalArr.length = val
  // console.log(val)
  // document.getElementById("res").textContent = afficherTriangle(TrianglePascal(val))
})

document.getElementById("retry").addEventListener("click", function() {
  document.location.reload(true)
})
document.getElementById("retry-1").addEventListener("click", function() {
  document.location.reload(true)
})

// function calculTriangle (data) {
//   const arr = []
//   arr.length = data
//   arr.fill(data)
//   return arr
  
// }
function TrianglePascal(size) {
  var tab = []
  for (var n  = 0; n < size; n++) {
    tab[n] = []
    for (var p = 0; p < n+1; p++) {
      if (p == 0 || p == n ) {
        tab[n][p] = 1
      } else {
        tab[n][p] = tab[n-1][p] + tab[n-1][p-1]
      }
    }
  }
  return tab
}
function afficherTriangle(arr) {
  for (let i  = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      // return arr[i][j]
      document.getElementById("res").innerHTML += arr[i][j]+" "
    }
    document.getElementById("res").innerHTML += "<br>"
  }
}
// console.log(TrianglePascal(5))