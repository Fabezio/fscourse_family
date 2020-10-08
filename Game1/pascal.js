let bool = true

// Affichages
// triangle de Päscal
document.getElementById("valider").addEventListener("click", function() {
  if(bool) {
    let val = document.getElementById("infos").value
    afficherTriangle(TrianglePascal(val))
    bool = false
    
      }
  
})

document.getElementById("retry").addEventListener("click", function() {
  document.location.reload(true)
})
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
      document.getElementById("res").innerHTML += `${arr[i][j]} `
    }
    document.getElementById("res").innerHTML += "<br>"
  }
}

// suite de Stern
document.getElementById("valider-1").addEventListener("click", function() {
  if(bool) {
    let val = document.getElementById("stern").value
    afficherStern(Stern(val))
    bool = false
    
    }
  
})
document.getElementById("retry-1").addEventListener("click", function() {
  document.location.reload(true)
})

function Stern(size) {
  var tab1 = TrianglePascal(size)
  var tab2 = []
  tab2.push(1)
  tab2.push(1)
  tab2.push(2)
  tab2.push(1)
  for (var n  = 4; n < size; n++) {
    // tab2 = []
    let sum = 0
    var newVal = Math.trunc(n/2)
    for (var p = 0; p < newVal+1; p++) {
      sum += tab1[n-p][p] % 2
    }
     tab2.push(sum) 
  }
  return tab2
}
 
// console.log(Stern(10))
function afficherStern(arr) {
  for (let i  = 0; i < arr.length; i++) {
    document.getElementById("stern-res").innerHTML += `S${[i+1]}=${arr[i]}, `
    // for (var j = 0; j < arr[i].length; j++) {
      // return arr[i][j]
    // }
    // document.getElementById("stern-res").innerHTML += "<br>"
  }
  
}
// fonctions 


// console.log(TrianglePascal(5))

