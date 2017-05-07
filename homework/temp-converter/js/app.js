document.getElementById('submit').onclick = convert;

function convert() {
  
  // Get the value stored in #f
  var f = document.getElementById('f').value;
    
  // Set up a variable to store the celsius temp
  var c;
  
  // Convert F to C
  c = (f - 32) * 5 / 9;
  
  // Print C temp on the page
  document.getElementById('c').innerHTML = c;
  
}
  

