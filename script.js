//this is for file 3b
function hideit() {
  document.getElementById('whatever').className = 'hidden';
}

//this is for file 4
function changeText() {
  document.getElementById('p1').style.fontSize = '8em';
  document.getElementById('p1').style.fontStyle = 'Italic';
  document.getElementById('p1').style.backgroundColor = 'blue';
  document.getElementById('p1').style.fontweight = 'bold';
}

//this is to reload on file 5
function refresh() {
  location.reload();
}

//this is to alter the text on file 5
function alterText() {
  document.getElementById('persons').style.fontSize = '8em';
  document.getElementById('persons').style.fontStyle = 'Italic';
  document.getElementById('persons').style.backgroundColor = 'yellow';
  document.getElementById('persons').style.fontweight = 'bold';
}
