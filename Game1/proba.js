const array = []
let i = 0
document.getElementById("envoyer-1").addEventListener("click", function () {
  // document.querySelector("#taille").valuesi
  const size = document.getElementById("taille").value
  console.log("taille:" , size)
  document.getElementById("envoyer-2").addEventListener("click", function ()  {
    if(i < size) {
      const val = document.getElementById("tab").value
      array.push(val)
      console.log(array.length)
      ++i
    } else {
      console.log(array)
      document.getElementById("envoyer-2").value = "Generate"
      document.getElementById("envoyer-2").addEventListener("mouseover", function () {
        // let moy = moyenne(array)
        // let varianceArr = variance(array, moy)
        document.getElementById("moyenne").textContent = moyenne(array)
        document.getElementById("variance").textContent = variance(array)
        document.getElementById("ecart-type").textContent = ecartType(array)
        
      })
      
    }
    document.getElementById("reset-2").addEventListener("click", function () {
      delete array
      i = 0
      console.log(array)
    })
    // if (array.length == size) 
  })
})
document.getElementById("reset-1").addEventListener("click", function () {
  document.location.reload(true)
})
document.getElementById("reset-2").addEventListener("click", function () {
  document.location.reload(true)
})

  
function moyenne (data) {
  let sum = 0
  for (el of data) {
    sum += parseInt(el)
    // console.log(typeof el)
  }

  console.log(sum)
  return sum / data.length
  // if (data.length < size)
}

function variance(data) {
  let moy = moyenne(data)
  let sum= 0
  for (el of data) {
    sum += (el - moy) ** 2
    
  }
  return sum / data.length

  console.log(i)
}

function ecartType (val) {
  let varia = variance(val)
  return varia ** (1/2)
}
// const array = []
// if (size.value > 0) array.length = size 
// const data = document.querySelector("#tab").value
// document.querySelector("#envoyer-1").COMMENT_NODE

// function setSize(size) {
//   return size.value
// }
