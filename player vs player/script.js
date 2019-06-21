var myTurn = Math.floor(Math.random() * 2);
var gameOver = false
document.getElementById("go").addEventListener("click", playFunction);

function playFunction() {
  document.getElementById("a1").innerHTML = "-";
  document.getElementById("a2").innerHTML = "-";
  document.getElementById("a3").innerHTML = "-";
  document.getElementById("b1").innerHTML = "-";
  document.getElementById("b2").innerHTML = "-";
  document.getElementById("b3").innerHTML = "-";
  document.getElementById("c1").innerHTML = "-";
  document.getElementById("c2").innerHTML = "-";
  document.getElementById("c3").innerHTML = "-";
  document.getElementById("a1").style.background = "#636466";
  document.getElementById("a2").style.background = "#636466";
  document.getElementById("a3").style.background = "#636466";
  document.getElementById("b1").style.background = "#636466";
  document.getElementById("b2").style.background = "#636466";
  document.getElementById("b3").style.background = "#636466";
  document.getElementById("c1").style.background = "#636466";
  document.getElementById("c2").style.background = "#636466";
  document.getElementById("c3").style.background = "#636466";

  if (myTurn == 0) {
    document.getElementById("turn").innerHTML = "It is Noughts' turn";
  } else {
    document.getElementById("turn").innerHTML = "It is Cross's turn";
  }
}
function clickFunction(position) {
  if(gameOver == false){
  if (document.getElementById(position).innerHTML != ("X" || "0")) {
    if (myTurn == 1) {
      document.getElementById(position).innerHTML = "X";
      myTurn = 0;
      document.getElementById("turn").innerHTML = "It is Noughts' turn"
    } else {
      document.getElementById(position).innerHTML = "0";
      myTurn = 1;
      document.getElementById("turn").innerHTML = "It is Cross's turn"
    }
  }

  var a1Val = document.getElementById("a1").innerHTML;
  var a2Val = document.getElementById("a2").innerHTML;
  var a3Val = document.getElementById("a3").innerHTML;
  var b1Val = document.getElementById("b1").innerHTML;
  var b2Val = document.getElementById("b2").innerHTML;
  var b3Val = document.getElementById("b3").innerHTML;
  var c1Val = document.getElementById("c1").innerHTML;
  var c2Val = document.getElementById("c2").innerHTML;
  var c3Val = document.getElementById("c3").innerHTML;

  if (a1Val == a2Val && a2Val == a3Val && a1Val == ("X" || "0")) {
    winFtn("a1", "a2", "a3");
  } else if (b1Val == b2Val && b2Val == b3Val && b1Val == ("X" || "0")) {
    winFtn("b1", "b2", "b3");
  } else if (c1Val == c2Val && c2Val == c3Val && c1Val == ("X" || "0")) {
    winFtn("c1", "c2", "c3");
  } else if (a1Val == b1Val && b1Val == c1Val && a1Val == ("X" || "0")) {
    winFtn("a1", "b1", "c1");
  } else if (a3Val == b2Val && b2Val == c1Val && a3Val == ("X" || "0")) {
    winFtn("a3", "b2", "c1");
  } else if (a3Val == b3Val && b3Val == c3Val && a3Val == ("X" || "0")) {
    winFtn("a3", "b3", "c3");
  } else if (a1Val == b2Val && b2Val == c3Val && a1Val == ("X" || "0")) {
    winFtn("a1", "b2", "c3");
  } else if (a3Val == b2Val && b2Val == c1Val && a3Val == ("X" || "0")) {
    winFtn("a3", "b2", "c1");
  }
  function winFtn(a, b, c) {
    document.getElementById(a).style.background = "#063852";
    document.getElementById(b).style.background = "#063852";
    document.getElementById(c).style.background = "#063852";
    alert(document.getElementById(a).innerHTML + " WINS");
    document.getElementById("turn").innerHTML = "Press Start to play again."
    gameOver = true
  }
}
}
