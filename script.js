document.getElementById("go").addEventListener("click", startAll)

function startAll() {
  var a1 = 0
  var a2 = 0
  var a3 = 0

  var b1 = 0
  var b2 = 0
  var b3 = 0

  var c1 = 0
  var c2 = 0
  var c3 = 0

  var myTurn = Math.floor(Math.random() * 2)
  var xoTurn = ""

  document.getElementById("a1").innerHTML = "1"
  document.getElementById("a2").innerHTML = "2"
  document.getElementById("a3").innerHTML = "3"
  document.getElementById("b1").innerHTML = "4"
  document.getElementById("b2").innerHTML = "5"
  document.getElementById("b3").innerHTML = "6"
  document.getElementById("c1").innerHTML = "7"
  document.getElementById("c2").innerHTML = "8"
  document.getElementById("c3").innerHTML = "9"

  if (myTurn == 0) {
    xoTurn = "X"
  } else {
    xoTurn = "O"
  }

  document.getElementById("turn").innerHTML = "It is " + xoTurn + "'s turn."

  document.getElementById("a1").addEventListener("click", a1Click)

  function a1Click() {
    if(a1 == 1){
    alert("This square is already taken.")
    } else if (a1 == 0 && myTurn == 0) {
      document.getElementById("a1").innerHTML = "X"
      a1 = 1
      myTurn = 1
      xoTurn = "O"
        document.getElementById("turn").innerHTML = "It is " + xoTurn + "'s turn."
    } else if (a1 == 0 && myTurn == 1) {
      document.getElementById("a1").innerHTML = "O"
      a1 = 2
      myTurn = 0
      xoTurn = "X"
        document.getElementById("turn").innerHTML = "It is " + xoTurn + "'s turn."
    } 
  }

}
